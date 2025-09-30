class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();

//Parte Felipe Login e cadastro

function mostrarLogin() {

  if (!document.getElementById('formLogin')) return;

  document.getElementById('formLogin').style.display = 'block';
  document.getElementById('tituloLogin').style.display = 'block';

  document.getElementById('formCadastro').style.display = 'none';
  document.getElementById('tituloCadastro').style.display = 'none';

  document.querySelectorAll('.tab')[0].classList.add('active');
  document.querySelectorAll('.tab')[1].classList.remove('active');
}

function mostrarCadastro() {

    if (!document.getElementById('formCadastro')) return;

  document.getElementById('formLogin').style.display = 'none';
  document.getElementById('tituloLogin').style.display = 'none';

  document.getElementById('formCadastro').style.display = 'block';
  document.getElementById('tituloCadastro').style.display = 'block'

  document.querySelectorAll('.tab')[0].classList.remove('active');
  document.querySelectorAll('.tab')[1].classList.add('active');
}

window.addEventListener('load', function(){
  if (document.getElementById('formLogin')) {
  mostrarLogin();
    }
});