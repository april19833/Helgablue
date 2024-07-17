// particleEngine.js

var ParticleEngine = (function() {
    'use strict';

    function ParticleEngine(canvas_id) {
        if (!(this instanceof ParticleEngine)) {
            return new ParticleEngine(args);
        }
        
        var _ParticleEngine = this;

        this.canvas_id = canvas_id;
        this.stage = new createjs.Stage(canvas_id);
        this.totalWidth = this.canvasWidth = document.getElementById(canvas_id).width = document.getElementById(canvas_id).offsetWidth;
        this.totalHeight = this.canvasHeight = document.getElementById(canvas_id).height = document.getElementById(canvas_id).offsetHeight;
        this.compositeStyle = "lighter";

        this.particleSettings = [
            {id:"small", num:300, fromX:0, toX:this.totalWidth, ballwidth:3, alphamax:0.4, areaHeight:.5, color:"#F0F0F0", fill:false}, 
            {id:"medium", num:100, fromX:0, toX:this.totalWidth, ballwidth:8, alphamax:0.3, areaHeight:1, color:"#C0C0C0", fill:true}, 
            {id:"large", num:10, fromX:0, toX:this.totalWidth, ballwidth:30, alphamax:0.2, areaHeight:1, color:"#A0A0A0", fill:true}
        ];
        this.particleArray = [];
        this.lights = [
            {ellipseWidth:400, ellipseHeight:100, alpha:0.6, offsetX:0, offsetY:0, color:"#D0D0D0"}, 
            {ellipseWidth:350, ellipseHeight:250, alpha:0.3, offsetX:-50, offsetY:0, color:"#B8B8B8"}, 
            {ellipseWidth:100, ellipseHeight:80, alpha:0.2, offsetX:80, offsetY:-50, color:"#F8F8F8"}
        ];

        this.stage.compositeOperation = _ParticleEngine.compositeStyle;

        function drawBgLight() {
            var light;
            var bounds;
            var blurFilter;
            for (var i = 0, len = _ParticleEngine.lights.length; i < len; i++) {                
                light = new createjs.Shape();
                light.graphics.beginFill(_ParticleEngine.lights[i].color).drawEllipse(0, 0, _ParticleEngine.lights[i].ellipseWidth, _ParticleEngine.lights[i].ellipseHeight);
                light.regX = _ParticleEngine.lights[i].ellipseWidth / 2;
                light.regY = _ParticleEngine.lights[i].ellipseHeight / 2; 
                light.y = light.initY = _ParticleEngine.totalHeight / 2 + _ParticleEngine.lights[i].offsetY;
                light.x = light.initX = _ParticleEngine.totalWidth / 2 + _ParticleEngine.lights[i].offsetX;

                blurFilter = new createjs.BlurFilter(_ParticleEngine.lights[i].ellipseWidth, _ParticleEngine.lights[i].ellipseHeight, 1);
                bounds = blurFilter.getBounds();
                light.filters = [blurFilter];
                light.cache(bounds.x - _ParticleEngine.lights[i].ellipseWidth / 2, bounds.y - _ParticleEngine.lights[i].ellipseHeight / 2, bounds.width * 2, bounds.height * 2);
                light.alpha = _ParticleEngine.lights[i].alpha;

                light.compositeOperation = "screen";
                _ParticleEngine.stage.addChildAt(light, 0);

                _ParticleEngine.lights[i].elem = light;
            }

            TweenMax.fromTo(_ParticleEngine.lights[0].elem, 10, {scaleX:1.5, x:_ParticleEngine.lights[0].elem.initX, y:_ParticleEngine.lights[0].elem.initY},{yoyo:true, repeat:-1, ease:Power1.easeInOut, scaleX:2, scaleY:0.7});
            TweenMax.fromTo(_ParticleEngine.lights[1].elem, 12, { x:_ParticleEngine.lights[1].elem.initX, y:_ParticleEngine.lights[1].elem.initY},{delay:5, yoyo:true, repeat:-1, ease:Power1.easeInOut, scaleY:2, scaleX:2, y:_ParticleEngine.totalHeight / 2 - 50, x:_ParticleEngine.totalWidth / 2 + 100});
            TweenMax.fromTo(_ParticleEngine.lights[2].elem, 8, { x:_ParticleEngine.lights[2].elem.initX, y:_ParticleEngine.lights[2].elem.initY},{delay:2, yoyo:true, repeat:-1, ease:Power1.easeInOut, scaleY:1.5, scaleX:1.5, y:_ParticleEngine.totalHeight / 2, x:_ParticleEngine.totalWidth / 2 - 200});
        }
        
        var blurFilter;
        function drawParticles() {
            for (var i = 0, len = _ParticleEngine.particleSettings.length; i < len; i++) {
                var ball = _ParticleEngine.particleSettings[i];
                var circle;
                for (var s = 0; s < ball.num; s++) {
                    circle = new createjs.Shape();
                    if (ball.fill) {
                        circle.graphics.beginFill(ball.color).drawCircle(0, 0, ball.ballwidth);
                        blurFilter = new createjs.BlurFilter(ball.ballwidth / 2, ball.ballwidth / 2, 1);
                        circle.filters = [blurFilter];
                        var bounds = blurFilter.getBounds();
                        circle.cache(-50 + bounds.x, -50 + bounds.y, 100 + bounds.width, 100 + bounds.height);
                    } else {
                        circle.graphics.beginStroke(ball.color).setStrokeStyle(1).drawCircle(0, 0, ball.ballwidth);
                    }
                    circle.alpha = range(0, 0.1);
                    circle.alphaMax = ball.alphamax;
                    circle.distance = ball.ballwidth * 2;
                    circle.ballwidth = ball.ballwidth;
                    circle.flag = ball.id;
                    _ParticleEngine.applySettings(circle, ball.fromX, ball.toX, ball.areaHeight);
                    circle.speed = range(2, 10);
                    circle.y = circle.initY;
                    circle.x = circle.initX;
                    circle.scaleX = circle.scaleY = range(0.3, 1);
                    _ParticleEngine.stage.addChild(circle);
                    animateBall(circle);
                    _ParticleEngine.particleArray.push(circle);
                }
            }
        }

        this.applySettings = function(circle, positionX, totalWidth, areaHeight) {
            circle.speed = range(1, 3);
            circle.initY = weightedRange(0, _ParticleEngine.totalHeight, 1, [_ParticleEngine.totalHeight * (2 - areaHeight / 2) / 4, _ParticleEngine.totalHeight * (2 + areaHeight / 2) / 4], 0.8);
            circle.initX = weightedRange(positionX, totalWidth, 1, [positionX + ((totalWidth - positionX)) / 4, positionX + ((totalWidth - positionX)) * 3 / 4], 0.6);
        }

        function animateBall(ball) {
            var scale = range(0.3, 1);
            var xpos = range(ball.initX - ball.distance, ball.initX + ball.distance);
            var ypos = range(ball.initY - ball.distance, ball.initY + ball.distance);
            var speed = ball.speed;
            TweenMax.to(ball, speed, {scaleX: scale, scaleY: scale, x: xpos, y: ypos, onComplete: animateBall, onCompleteParams: [ball], ease: Linear.easeNone});
            TweenMax.to(ball, speed / 2, {alpha: range(0, ball.alphaMax), yoyo: true, repeat: 1, ease: Linear.easeNone});
        }

        function range(min, max) {
            return min + (max - min) * Math.random();
        }

        function weightedRange(to, from, decimalPlaces, weightedRange, weightStrength) {
            if (to === from) return (to);

            var ret;
            if (weightStrength <= 0) ret = Math.random() * (to - from);
            else {
                ret = Math.random() * (to - from);
                var numWeights = weightedRange.length;
                var s = Math.floor(Math.random() * (numWeights + weightStrength));
                if (s < numWeights) ret = weightedRange[s];
            }
            return (Math.round(ret * (10 * decimalPlaces)) / (10 * decimalPlaces)) + from;
        }

        drawBgLight();
        drawParticles();

        createjs.Ticker.timingMode = createjs.Ticker.RAF;
        createjs.Ticker.addEventListener("tick", _ParticleEngine.stage);

        window.addEventListener('resize', function() {
            _ParticleEngine.stage.canvas.width = _ParticleEngine.totalWidth = _ParticleEngine.canvasWidth = document.getElementById(_ParticleEngine.canvas_id).width = document.getElementById(_ParticleEngine.canvas_id).offsetWidth;
            _ParticleEngine.stage.canvas.height = _ParticleEngine.totalHeight = _ParticleEngine.canvasHeight = document.getElementById(_ParticleEngine.canvas_id).height = document.getElementById(_ParticleEngine.canvas_id).offsetHeight;
            _ParticleEngine.applySettings();
        });
    }

    return ParticleEngine;
}());

var particleEngine = new ParticleEngine("projector");
