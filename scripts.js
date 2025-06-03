/**
 * funcion para traducir
 * 
 */


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




function mostrarFormu(){
  document.getElementById("contacto").style.display = "none";
 document.getElementById("emailFormulario").style.display = "block";
};


botonFormulario.addEventListener("click", () => {
  enviarEMail();
});

function enviarEmail(){
  const form = document.getElementById('emailFormulario');


  emailjs.sendForm('service_j8tpg7l', 'template_conx9a3', form)
    .then(function () {
      alert('Correo enviado correctamente');
      form.reset();
    }, function (error) {
      console.error('Error al enviar:', error);
      alert('Error al enviar el correo');
    });
  }
