document.addEventListener('mousemove', function(e) {
    var luz = document.querySelector('.efecto-luz');
    var x = e.clientX;
    var y = e.clientY;
    
    luz.style.background = 'radial-gradient(circle ' + '20rem ' + 'at ' + x + 'px ' + y + 'px, transparent, rgba(0, 31, 61, 1))';
  });