//Defino las variables de los datos personales
let sexo;
let hombreRadio = document.getElementById(`hombre`);
let mujerRadio = document.getElementById(`mujer`);
let actividadTexto = document.getElementById(`actividadTexto`);

hombreRadio.addEventListener("change", sexoNuevo);
function sexoNuevo() {
  if (document.getElementById(`hombre`).checked) {
    sexo = `masculino`;
    console.log(sexo);
  } else if (document.getElementById(`mujer`).checked) {
    sexo = `femenino`;
    console.log(sexo);
  }
}

mujerRadio.addEventListener("change", sexoNuevo);
function sexoNuevo() {
  if (document.getElementById(`hombre`).checked) {
    sexo = `masculino`;
    console.log(sexo);
  } else if (document.getElementById(`mujer`).checked) {
    sexo = `femenino`;
    console.log(sexo);
  }
}

let peso = document.getElementById(`peso`);
peso.addEventListener("change", pesoNuevo);
function pesoNuevo() {
  peso = document.getElementById(`peso`);
  console.log(peso.value);
}

let altura = document.getElementById(`altura`);
let alturaG;
let alturaC = JSON.parse(localStorage.getItem(`alturaS`));
if (alturaC) {
  document.getElementById("altura").value = alturaC;
  alturaV = JSON.parse(localStorage.getItem(`alturaS`));
  console.log(document.getElementById("altura").value);
}

altura.addEventListener("change", alturaNuevo);
function alturaNuevo() {
  alturaV = document.getElementById(`altura`);
  alturaLS = JSON.stringify(altura.value);
  localStorage.setItem(`alturaS`, alturaLS);
  alturaG = JSON.parse(localStorage.getItem(`alturaS`));
  console.log(altura.value);
  console.log(alturaG);
}

let edad = document.getElementById(`edad`);
let edadG;
let edadC = JSON.parse(localStorage.getItem(`edadS`));
if (edadC) {
  document.getElementById("edad").value = edadC;
  edadV = JSON.parse(localStorage.getItem(`edadS`));
  console.log(document.getElementById("edad").value);
}

edad.addEventListener("change", edadNuevo);
function edadNuevo() {
  edadV = document.getElementById(`edad`);
  edadLS = JSON.stringify(edad.value);
  localStorage.setItem(`edadS`, edadLS);
  edadG = JSON.parse(localStorage.getItem(`edadS`));
  console.log(edad.value);
  console.log(edadG);
}

actividad.addEventListener("mousemove", actividadNuevo);
function actividadNuevo() {
  actividad = document.getElementById(`actividad`);
  if (actividad.value == 0) {
    actividadTexto.innerText = "Nada";
  } else if (actividad.value == 1) {
    actividadTexto.innerText = "Poco";
  } else if (actividad.value == 2) {
    actividadTexto.innerText = "Normal";
  } else if (actividad.value == 3) {
    actividadTexto.innerText = "Mucha";
  } else if (actividad.value == 4) {
    actividadTexto.innerText = "Extrema";
  }
  console.log(actividad.value);
}

console.log(actividad.value);
actividad.addEventListener("change", actividadNuevo);
function actividadNuevo() {
  actividad = document.getElementById(`actividad`);
  if (actividad.value == 0) {
    actividadTexto.innerText = "Nada";
  } else if (actividad.value == 1) {
    actividadTexto.innerText = "Poco";
  } else if (actividad.value == 2) {
    actividadTexto.innerText = "Normal";
  } else if (actividad.value == 3) {
    actividadTexto.innerText = "Mucha";
  } else if (actividad.value == 4) {
    actividadTexto.innerText = "Extrema";
  }
  console.log(actividad.value);
}
let resultado = document.getElementById(`resultadoCalculo`);

let factorDeActividad;
if (actividad.value == 0) {
  factorDeActividad = 1.2;
} else if (actividad.value == 1) {
  factorDeActividad = 1.375;
} else if (actividad.value == 2) {
  factorDeActividad = 1.55;
} else if (actividad.value == 3) {
  factorDeActividad = 1.725;
} else if (actividad.value == 4) {
  factorDeActividad = 1.9;
}
console.log(actividad.value);
actividad.addEventListener("mousemove", factorDeActividadNuevo);
function factorDeActividadNuevo() {
  if (actividad.value == 0) {
    factorDeActividad = 1.2;
  } else if (actividad.value == 1) {
    factorDeActividad = 1.375;
  } else if (actividad.value == 2) {
    factorDeActividad = 1.55;
  } else if (actividad.value == 3) {
    factorDeActividad = 1.725;
  } else if (actividad.value == 4) {
    factorDeActividad = 1.9;
  }
  console.log(actividad.value);
}
actividad.addEventListener("change", factorDeActividadNuevo);
function factorDeActividadNuevo() {
  if (actividad.value == 0) {
    factorDeActividad = 1.2;
  } else if (actividad.value == 1) {
    factorDeActividad = 1.375;
  } else if (actividad.value == 2) {
    factorDeActividad = 1.55;
  } else if (actividad.value == 3) {
    factorDeActividad = 1.725;
  } else if (actividad.value == 4) {
    factorDeActividad = 1.9;
  }
  console.log(actividad.value);
}

let boton = document.getElementById(`submit`);
boton.addEventListener("click", formSubmit);

let caloriasNecesarias;
function formSubmit() {
  if (
    (sexo == `masculino` || sexo == `femenino`) &&
    !isNaN(peso.value) &&
    !isNaN(altura.value) &&
    !isNaN(edad.value) &&
    !isNaN(actividad.value) &&
    peso.value !== "" &&
    altura.value !== "" &&
    edad.value !== "" &&
    actividad.value !== ""
  ) {
    if (sexo == `masculino`) {
      caloriasNecesarias = Math.round(
        (66 + 13.7 * peso.value + 5 * altura.value - 6.8 * edad.value) *
          factorDeActividad
      );
    } else if (sexo == `femenino`) {
      caloriasNecesarias = Math.round(
        (655 + 9.6 * peso.value + 1.85 * altura.value - 4.7 * edad.value) *
          factorDeActividad
      );
    }
    resultado.innerText = `Tus calorias de mantenimiento son: ${caloriasNecesarias} kcals`;
  } else {
    alert(`Recordá completar todos los campos`);
  }
  console.log(caloriasNecesarias);
}
