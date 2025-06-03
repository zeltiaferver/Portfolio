/**
 * funcion para traducir
 * 
 */

async function loadTranslations(lang) {
  try {
    const response = await fetch(`translations/${lang}.json`);
    if (!response.ok) throw new Error('No se pudo cargar el archivo de idioma');
    const translations = await response.json();

    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key]) {
        el.textContent = translations[key];
      }
    });
  } catch (error) {
    console.error('Error al cargar traducción:', error);
  }
}


function setLanguage(lang) {
  loadTranslations(lang);
  
  localStorage.setItem('preferredLanguage', lang);
}


document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';
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

