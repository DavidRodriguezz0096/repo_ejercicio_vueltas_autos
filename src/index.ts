import "./styles.css";
//Ejercicio: Vueltas autos de carrera - Alumno: David Rodriguez

let primeraVueta: number = 0;
let segundaVuelta: number = 0;
let terceraVuelta: number = 0;
let cuartaVuelta: number = 0;

const inputFirst = document.getElementById("inputFirst");
const inputSecond = document.getElementById("inputSecond");
const inputThird = document.getElementById("inputThird");
const inputFourth = document.getElementById("inputFourth");
const btnCalc = document.getElementById("btnCalc");
const totalPara = document.getElementById("total");
const promedioPara = document.getElementById("promedio");

btnCalc?.addEventListener("click", function () {
  primeraVueta = Number(inputFirst.value);
  segundaVuelta = Number(inputSecond.value);
  terceraVuelta = Number(inputThird.value);
  cuartaVuelta = Number(inputFourth.value);
  let total = primeraVueta + segundaVuelta + terceraVuelta + cuartaVuelta;
  let promedio = total / 4;

  totalPara.innerText += total;
  promedioPara.innerText += promedio;
});
