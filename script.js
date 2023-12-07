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

//#region mobile navbar

//mobile navbar
const mobileNavButton = document.getElementById('mobile-nav-button');
const navbarMobile = document.getElementById('navbar-mobile');
const drawerNav = document.getElementById('drawer-nav');
const drawerItems = document.querySelectorAll('.drawer-item');
const closeDrawer = document.getElementById('close-drawer');

const hideNavbarMobile = () => {
  navbarMobile.classList.add('opacity-0');
  navbarMobile.classList.remove('z-40');
  navbarMobile.classList.add('-z-50');
}

const showNavbarMobile = () => {
  navbarMobile.classList.remove('opacity-0');
  navbarMobile.classList.add('z-40');
  navbarMobile.classList.remove('-z-50');
}

const showDrawer = () => {
  drawerNav.classList.remove('opacity-0');
  drawerNav.classList.add('z-50');
  drawerNav.classList.remove('-z-50');
  setTimeout(() => {
    drawerNav.style.transform = 'translateX(0)';
  }, 50);
}

const hideDrawer = () => {
  setTimeout(() => {
    drawerNav.style.transform = 'translateX(-100%)';
  }, 50);
  drawerNav.classList.add('opacity-0');
  drawerNav.classList.remove('z-50');
  drawerNav.classList.add('-z-50');
}

mobileNavButton.addEventListener('click', () => {
  showDrawer();
  hideNavbarMobile();
});
closeDrawer.addEventListener('click', () => {
  hideDrawer();
  showNavbarMobile();
});
drawerItems.forEach((item) => {
  item.addEventListener('click', () => {
    hideDrawer();
    showNavbarMobile();
  })
});
//#endregion