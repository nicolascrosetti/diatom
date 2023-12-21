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

//#region Modals
const bodySection = document.getElementById('body');
const bodyBackdrop = document.getElementById('body-backdrop');
const modalsSection = document.getElementById('modals');
const serviciosSection = document.getElementById('servicios');

const showCurrentModal = (currentModal) => {
  bodySection.classList.add('hidden');
  modalsSection.classList.add('flex');
  modalsSection.classList.remove('hidden');

  bodyBackdrop.classList.remove('hidden');
  currentModal.classList.remove('hidden');
  currentModal.classList.add('flex');

  window.setTimeout(() => {
    currentModal.classList.remove('opacity-0');
    bodyBackdrop.classList.remove('opacity-0');
  }, 1);
}
const closeCurrentModal = (currentModal, target) => {
  currentModal.classList.add('opacity-0');
  bodyBackdrop.classList.add('opacity-0');
  
  window.setTimeout(() => {
    bodyBackdrop.classList.add('hidden');
    currentModal.classList.add('hidden');
  }, 500);

  bodySection.classList.remove('hidden');
  modalsSection.classList.add('hidden');
  modalsSection.classList.remove('flex');

  if (target) {
    let targetPos = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: targetPos,
      behavior: 'auto'
    });
  }
}

//#region Mosquitos
const mosquitosModal = document.getElementById('mosquitos-modal');
const closeMosquitosModal = document.getElementById('close-mosquitos-modal');
const mosquitosButton = document.querySelector('.mosquitos-button');

mosquitosButton.addEventListener('click', () => {
  showCurrentModal(mosquitosModal);
});

closeMosquitosModal.addEventListener('click', () => {
    closeCurrentModal(mosquitosModal, serviciosSection); 
});
//#endregion

//#region Desratizacion
const desratizacionModal = document.getElementById('desratizacion-modal');
const closeDesratizacionModal = document.getElementById('close-desratizacion-modal');
const desratizacionButton = document.querySelector('.desratizacion-button');

desratizacionButton.addEventListener('click', () => {
  showCurrentModal(desratizacionModal);
});

closeDesratizacionModal.addEventListener('click', () => {
    closeCurrentModal(desratizacionModal, serviciosSection); 
});
//#endregion

//#region Hormigas
const hormigasModal = document.getElementById('hormigas-modal');
const closeHormigasModal = document.getElementById('close-hormigas-modal');
const hormigasButton = document.querySelector('.hormigas-button');

hormigasButton.addEventListener('click', () => {
  showCurrentModal(hormigasModal);
});

closeHormigasModal.addEventListener('click', () => {
    closeCurrentModal(hormigasModal, serviciosSection); 
});
//#endregion

//#region Murcielagos
const murcielagosModal = document.getElementById('murcielagos-modal');
const closeMurcielagosModal = document.getElementById('close-murcielagos-modal');
const murcielagosButton = document.querySelector('.murcielagos-button');

murcielagosButton.addEventListener('click', () => {
  showCurrentModal(murcielagosModal);
});

closeMurcielagosModal.addEventListener('click', () => {
    closeCurrentModal(murcielagosModal, serviciosSection); 
});
//#endregion

//#region Grillo Topo
const grillotopoModal = document.getElementById('grillotopo-modal');
const closeGrillotopoModal = document.getElementById('close-grillotopo-modal');
const grillotopoButton = document.querySelector('.grillotopo-button');

grillotopoButton.addEventListener('click', () => {
  showCurrentModal(grillotopoModal);
});

closeGrillotopoModal.addEventListener('click', () => {
    closeCurrentModal(grillotopoModal, serviciosSection); 
});
//#endregion

//#region Cucaracha Germanica
const cucarachagermanicaModal = document.getElementById('cucarachagermanica-modal');
const closeCucarachagermanicaModal = document.getElementById('close-cucarachagermanica-modal');
const cucarachagermanicaButton = document.querySelector('.cucarachagermanica-button');

cucarachagermanicaButton.addEventListener('click', () => {
  showCurrentModal(cucarachagermanicaModal);
});

closeCucarachagermanicaModal.addEventListener('click', () => {
    closeCurrentModal(cucarachagermanicaModal, serviciosSection); 
});
//#endregion

//#endregion
