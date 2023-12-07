AOS.init();

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

//#region navbar
const navbar = document.getElementById('navbar');
const navlogo = document.getElementById('navlogo');
const navbarText = document.querySelector('#navbar ul');
const scrollPosition = () => window.scrollY;

const navbarSmall = () => {
  navlogo.classList.add("h-[50px]");
  navlogo.classList.remove("h-[75px]");

  navbarText.classList.add("text-2xl");
  navbarText.classList.remove("text-4xl");
}

const navbarNormal = () => {
  navlogo.classList.add("h-[75px]");
  navlogo.classList.remove("h-[50px]");

  navbarText.classList.remove("text-2xl");
  navbarText.classList.add("text-4xl");
}

const handleScroll = () => {
  if (scrollPosition() > 0) {
    navbarSmall();
  } else {
    navbarNormal();
  }
};

window.addEventListener('scroll', handleScroll);
//#endregion