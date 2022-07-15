let sexo = prompt(`Cual es tu sexo?`).toLowerCase();

let peso;
let altura;
let edad;
let pregPeso = `Cual es tu peso? (en kg)`;
let pregAltura = `Cual es tu altura? (en cm)`;
let pregEdad = `Cual es tu edad? (en años)`;

let sexoM = [`hombre`,`masculino`,`chico`,`varon`]
let sexoF = [`mujer`,`femenino`,`chica`]

while (
  !(sexoM.includes(sexo)) &&
  !(sexoF.includes(sexo))
) {
  alert(`Recordá aclarar si naciste hombre o mujer`);
  sexo = prompt(`Cual es tu sexo?`).toLowerCase();
}
console.log(sexo);

function pedirDato(dato, preg) {
  do {
    alert(`Recordá ingresar un valor numerico`);
    dato = prompt(preg);
  } while (isNaN(dato));
  return dato;
}

peso = pedirDato(peso, pregPeso);
altura = pedirDato(altura, pregAltura);
edad = pedirDato(edad, pregEdad);

console.log(peso);
console.log(altura);
console.log(edad);

let actividad = prompt(
  `Cuanta actividad fisica haces? 
  Nada = practicamente nada de ejercicio, 
  Poca = ejercicios suaves de 1 a 3 veces por semana, 
  Normal = deportes/ejercicios de 3 a 5 veces por semana, 
  Mucha = deporte/ejercicio de 6 a 7 dias a la semana, 
  Extrema = ejercicios muy intensos al menos 2 horas al dia o una actividad laboral física intensa`
).toLowerCase();

while (
  actividad != `nada` &&
  actividad != `poca` &&
  actividad != `normal` &&
  actividad != `mucha` &&
  actividad != `extrema`
) {
  alert(
    `Ingresa uno de los valores mencionados (Nada, Poca, Normal, Mucha o Extrema)`
  );
  actividad = prompt(
    `Cuanta actividad fisica haces? 
    Nada = practicamente nada de ejercicio, 
    Poca = ejercicios suaves de 1 a 3 veces por semana, 
    Normal = deportes/ejercicios de 3 a 5 veces por semana, 
    Mucha = deporte/ejercicio de 6 a 7 dias a la semana, 
    Extrema = ejercicios muy intensos al menos 2 horas al dia o una actividad laboral física intensa`
  );
}
let factorDeActividad;
if (actividad == `nada`) {
  factorDeActividad = 1.2;
} else if (actividad == `poca`) {
  factorDeActividad = 1.375;
} else if (actividad == `normal`) {
  factorDeActividad = 1.55;
} else if (actividad == `mucha`) {
  factorDeActividad = 1.725;
} else if (actividad == `extrema`) {
  factorDeActividad = 1.9;
}
console.log(actividad);
console.log(factorDeActividad);
let caloriasNecesarias;

function mostrarCalorias() {
  alert(
    `Tenés que consumir por lo menos ` +
      caloriasNecesarias +
      ` kcals por día para mantener tu peso`
  );
}
if (
  sexoM.includes(sexo)
) {
  caloriasNecesarias = Math.round(
    (66 + 13.7 * peso + 5 * altura - 6.8 * edad) * factorDeActividad
  );
  mostrarCalorias();
} else if (sexoF.includes(sexo)) {
  caloriasNecesarias = Math.round(
    (655 + 9.6 * peso + 1.85 * altura - 4.7 * edad) * factorDeActividad
  );
  mostrarCalorias();
}

console.log(caloriasNecesarias);
