/**
 * funcion para traducir
 * @param {} idioma 
 */
function traducir(idioma) {
    const elementos = document.querySelectorAll(`[data-${idioma}]`);
    
    elementos.forEach(el => {
      el.textContent = el.getAttribute(`data-${idioma}`);
    });
  }

  /**
   * botones para enseñar u ocultar los textos de AboutMe
   */

  const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");

boton1.addEventListener("click", mostrarAbout);
boton2.addEventListener("click", mostrarEducacion);
boton3.addEventListener("click", mostrarExperiencia);
boton4.addEventListener("click", mostrarSkills);

function mostrarAbout() {
  mostrarSolo("aboutText");
}
function mostrarEducacion() {
  mostrarSolo("educationText");
}
function mostrarExperiencia() {
  mostrarSolo("workText");
}
function mostrarSkills() {
  mostrarSolo("skillsText");
}

function mostrarSolo(idVisible) {
  const ids = ["aboutText", "educationText", "workText", "skillsText"];
  ids.forEach(id => {
    document.getElementById(id).style.display = (id === idVisible) ? "block" : "none";
  });
}
