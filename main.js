(function () {
  // Check for reduced motion preference
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Animate main rows staggered
  // Exclude accordion rows initially
  var mainRows = document.querySelectorAll('.row:not(.acc-body .row)');
  mainRows.forEach(function (el, i) {
    if (reduced) { 
      el.classList.add('in'); 
      return; 
    }
    // Base delay of 60ms + 55ms per item
    setTimeout(function () { 
      el.classList.add('in'); 
    }, 60 + i * 55);
  });

  // Accordion logic for resources page
  var ab = document.getElementById('ab');
  var aBody = document.getElementById('aBody');
  if (ab && aBody) {
    ab.addEventListener('click', function () {
      var open = aBody.classList.toggle('open');
      ab.setAttribute('aria-expanded', open ? 'true' : 'false');
      
      if (open) {
        // Stagger inner rows
        aBody.querySelectorAll('.row').forEach(function(r, i) {
          if (reduced) {
            r.classList.add('in');
            return;
          }
          r.style.transitionDelay = (i * 38) + 'ms';
          r.classList.add('in');
        });
      }
    });
  }
})();
