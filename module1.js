document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.item');
  const point = document.querySelector('svg').createSVGPoint();

  function getCoordinates(e, svg) {
    point.x = e.clientX;
    point.y = e.clientY;
    return point.matrixTransform(svg.getScreenCTM().inverse());
  }

  items.forEach((item, index) => {
    const svg = item.querySelector('svg');
    const circle = document.querySelector(`#clip-${index} circle`);

    item.addEventListener('mousemove', (e) => {
      const coords = getCoordinates(e, svg);
      circle.setAttribute('cx', coords.x);
      circle.setAttribute('cy', coords.y);
    });

    item.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const touch = e.targetTouches[0];
      if (touch) {
        const coords = getCoordinates(touch, svg);
        circle.setAttribute('cx', coords.x);
        circle.setAttribute('cy', coords.y);
      }
    });
  });
});
