/**
 * funcion para traducir
 * 
 */

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  loadTranslations(lang);
}

async function loadTranslations(lang) {
  try {
    
    const res = await fetch(`./translations/${lang}.json`);
    const translations = await res.json();

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key]) {
        el.textContent = translations[key];
      }
    });

    
    if (translations.inputNombre)
      document.getElementById("inputNombre").placeholder = translations.inputNombre;
    if (translations.inputCorreo)
      document.getElementById("inputCorreo").placeholder = translations.inputCorreo;
    if (translations.textareaMensaje)
      document.querySelector("textarea")?.setAttribute("placeholder", translations.textareaMensaje);
  } catch (error) {
    console.error(`Error loading ${lang}.json:`, error);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);
});


  /**
   * botones para enseñar u ocultar los textos de AboutMe
   */

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const botonFormulario = document.getElementById("botonFormulario");
const mail = document.getElementById("email");


mail.addEventListener("click", () => {
 mostrarFormu();
});
document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault(); 
  enviarEmail();
});
function mostrarFormu(){
  document.getElementById("contacto").style.display = "none";
 document.getElementById("emailFormulario").style.display = "block";
};

function enviarEmail(){
  const form = document.getElementById('formulario');

  emailjs.sendForm('service_j8tpg7l', 'template_conx9a3', form)
    .then(function () {
      alert('Correo enviado correctamente');
      form.reset();
    }, function (error) {
      console.error('Error al enviar:', error);
      alert('Error al enviar el correo');
    });
  }

function mostrarDiv(idDiv) {
      const sections = document.querySelectorAll('.content-section');
      sections.forEach(section => {
        section.style.display = (section.id === idDiv) ? 'block' : 'none';
      });
    }

/**
 * carrusel para proyectos
 */

  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const totalProjects = track.children.length;
  let index = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + totalProjects) % totalProjects;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % totalProjects;
    updateCarousel();
  });

 
