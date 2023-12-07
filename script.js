//navbar links scroll and carrousel init
window.onload = function() {
    new Glide('.glide', {
        type: 'carousel',
        perView: 3,
        focusAt: 'center',
        gap: 0,
        autoplay: 2000,
        breakpoints: {
          768: {
            perView: 1
          }
        }
    }).mount();

    var links = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(event) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          event.preventDefault();
          var targetPos = target.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
          });
        }
      });
    }
  };