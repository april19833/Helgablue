'use strict';

var tetrominos = [
    {
        // box
        colors: ['rgb(59,84,165)', 'rgb(118,137,196)', 'rgb(79,111,182)'],
        data: [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ]
    },
    {
        // stick
        colors: ['rgb(214,30,60)', 'rgb(241,108,107)', 'rgb(236,42,75)'],
        data: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0]
        ]
    },
    {
        // z
        colors: ['rgb(88,178,71)', 'rgb(150,204,110)', 'rgb(115,191,68)'],
        data: [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 1],
            [0, 0, 0, 0]
        ]
    },
    {
        // T
        colors: ['rgb(62,170,212)', 'rgb(120,205,244)', 'rgb(54,192,240)'],
        data: [
            [0, 0, 0, 0],
            [0, 1, 1, 1],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ]
    },
    {
        // s
        colors: ['rgb(236,94,36)', 'rgb(234,154,84)', 'rgb(228,126,37)'],
        data: [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0]
        ]
    },
    {
        // backwards L
        colors: ['rgb(220,159,39)', 'rgb(246,197,100)', 'rgb(242,181,42)'],
        data: [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ]
    },
    {
        // L
        colors: ['rgb(158,35,126)', 'rgb(193,111,173)', 'rgb(179,63,151)'],
        data: [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ]
    }
];

var Tetris = function (x, y, width, height) {
    this.posX = x || 0;
    this.posY = y || 0;

    this.width = width || window.innerWidth;
    this.height = height || window.innerHeight;

    this.bgCanvas = document.createElement('canvas');
    this.fgCanvas = document.createElement('canvas');

    this.bgCanvas.width = this.fgCanvas.width = this.width;
    this.bgCanvas.height = this.fgCanvas.height = this.height;

    this.bgCtx = this.bgCanvas.getContext('2d');
    this.fgCtx = this.fgCanvas.getContext('2d');

    this.bgCanvas.style.left = this.posX + 'px';
    this.bgCanvas.style.top = this.posY + 'px';

    this.fgCanvas.style.left = this.posX + 'px';
    this.fgCanvas.style.top = this.posY + 'px';

    document.body.appendChild(this.bgCanvas);
    document.body.appendChild(this.fgCanvas);
    this.init();
};

Tetris.prototype.init = function () {
    this.curPiece = {
        data: null,
        colors: [0, 0, 0],
        x: 0,
        y: 0,
    };

    this.lastMove = Date.now();
    this.curSpeed = 50 + Math.random() * 50;
    this.unitSize = 20;
    this.linesCleared = 0;
    this.level = 0;
    this.loseBlock = 0;

    // init the board
    this.board = [];
    this.boardWidth = Math.floor(this.width / this.unitSize);
    this.boardHeight = Math.floor(this.height / this.unitSize);

    var board = this.board,
        boardWidth = this.boardWidth,
        boardHeight = this.boardHeight,
        halfHeight = boardHeight / 2,
        curPiece = this.curPiece,
        x = 0, y = 0;

    // init board
    for (x = 0; x <= boardWidth; x++) {
        board[x] = [];
        for (y = 0; y <= boardHeight; y++) {

            board[x][y] = {
                data: 0,
                colors: ['rgb(0,0,0)', 'rgb(0,0,0)', 'rgb(0,0,0)']
            };

            if (Math.random() > 0.15 && y > halfHeight) {
                board[x][y] = {
                    data: 1,
                    colors: tetrominos[Math.floor(Math.random() * tetrominos.length)].colors
                };
            }
        }
    }

    // collapse the board a bit
    for (x = 0; x <= boardWidth; x++) {
        for (y = boardHeight - 1; y > -1; y--) {

            if (board[x][y].data === 0 && y > 0) {
                for (var yy = y; yy > 0; yy--) {
                    if (board[x][yy - 1].data) {

                        board[x][yy].data = 1;
                        board[x][yy].colors = board[x][yy - 1].colors;

                        board[x][yy - 1].data = 0;
                        board[x][yy - 1].colors = ['rgb(0,0,0)', 'rgb(0,0,0)', 'rgb(0,0,0)'];
                    }
                }
            }
        }
    }

    var self = this;

    window.addEventListener('keydown', function (e) {
        switch (e.keyCode) {
            case 37:
                if (self.checkMovement(curPiece, -1, 0)) {
                    curPiece.x--;
                }
                break;
            case 39:
                if (self.checkMovement(curPiece, 1, 0)) {
                    curPiece.x++;
                }
                break;
            case 40:
                if (self.checkMovement(curPiece, 0, 1)) {
                    curPiece.y++;
                }
                break;
            case 32:
            case 38:
                curPiece.data = self.rotateTetrimono(curPiece);
                break;
        }
    });

    // render the board
    this.checkLines();
    this.renderBoard();

    // assign the current piece
    this.curPiece = {
        data: tetrominos[Math.floor(Math.random() * tetrominos.length)].data,
        colors: tetrominos[Math.floor(Math.random() * tetrominos.length)].colors,
        x: Math.floor(this.boardWidth / 2),
        y: 0
    };

    // render the new piece
    this.renderBlock();
};

Tetris.prototype.checkMovement = function (piece, x, y) {
    var block = piece.data,
        board = this.board,
        boardWidth = this.boardWidth,
        boardHeight = this.boardHeight;

    for (var px = 0; px < 4; px++) {
        for (var py = 0; py < 4; py++) {

            if (block[py][px]) {

                var nx = piece.x + px + x;
                var ny = piece.y + py + y;

                if (nx < 0 || nx >= boardWidth || ny >= boardHeight) {
                    return false;
                }

                if (ny < 0) {
                    continue;
                }

                if (board[nx][ny].data) {
                    return false;
                }
            }
        }
    }
    return true;
};

Tetris.prototype.rotateTetrimono = function (block) {
    var tempBlock = [], newBlock = [];

    for (var row = 0; row < 4; row++) {
        newBlock[row] = [];
        for (var col = 0; col < 4; col++) {
            newBlock[row][col] = block.data[3 - col][row];
        }
    }

    return newBlock;
};

Tetris.prototype.checkLines = function () {
    var board = this.board,
        boardWidth = this.boardWidth,
        boardHeight = this.boardHeight,
        lines = 0;

    for (var y = boardHeight - 1; y > -1; y--) {

        var isComplete = true;
        for (var x = 0; x < boardWidth; x++) {
            if (!board[x][y].data) {
                isComplete = false;
            }
        }

        if (isComplete) {
            for (var yy = y; yy > 0; yy--) {
                for (var xx = 0; xx < boardWidth; xx++) {

                    board[xx][yy].data = board[xx][yy - 1].data;
                    board[xx][yy].colors = board[xx][yy - 1].colors;
                }
            }
            y++;
            lines++;
        }
    }
};

Tetris.prototype.renderBoard = function () {
    var board = this.board,
        boardWidth = this.boardWidth,
        boardHeight = this.boardHeight,
        boardColor = ['rgb(0,0,0)', 'rgb(10,10,10)', 'rgb(0,0,0)', 'rgb(0,0,0)'],
        block;

    for (var x = 0; x < boardWidth; x++) {
        for (var y = 0; y < boardHeight; y++) {

            block = board[x][y];
            this.bgCtx.fillStyle = boardColor[block.data];
            this.bgCtx.fillRect(x * this.unitSize, y * this.unitSize, this.unitSize, this.unitSize);
        }
    }
};

Tetris.prototype.renderBlock = function () {
    var block = this.curPiece.data,
        x = this.curPiece.x,
        y = this.curPiece.y,
        colors = this.curPiece.colors;

    for (var px = 0; px < 4; px++) {
        for (var py = 0; py < 4; py++) {

            if (block[py][px]) {

                this.fgCtx.fillStyle = colors[0];
                this.fgCtx.fillRect((x + px) * this.unitSize, (y + py) * this.unitSize, this.unitSize, this.unitSize);
                this.fgCtx.fillStyle = colors[1];
                this.fgCtx.fillRect((x + px) * this.unitSize + 2, (y + py) * this.unitSize + 2, this.unitSize - 4, this.unitSize - 4);
                this.fgCtx.fillStyle = colors[2];
                this.fgCtx.fillRect((x + px) * this.unitSize + 4, (y + py) * this.unitSize + 4, this.unitSize - 8, this.unitSize - 8);
            }
        }
    }
};

// start the game
window.addEventListener('load', function () {
    new Tetris();
});
