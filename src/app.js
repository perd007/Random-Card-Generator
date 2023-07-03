/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let iconLeft = document.getElementById("alignLeft");
  let iconRight = document.getElementById("alignRigth");
  let numberCenter = document.getElementById("alignCenter");

  const iconos = ["♦", "♥", "♠", "♣"];
  const pinta = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  function indicesAleatorios(arreglo) {
    const numeroAleatorio = Math.round(Math.random() * (arreglo.length - 1));
    return numeroAleatorio;
  }
  let indexUno = indicesAleatorios(iconos);
  let indexDos = indicesAleatorios(pinta);
  console.log(indexUno);
  console.log(indexDos);

  iconLeft.innerText = iconos[indexUno];
  iconRight.innerText = iconos[indexUno];
  numberCenter.innerText = pinta[indexDos];

  if (indexUno === 0 || indexUno === 1) {
    iconLeft.style.color = "red";
    iconRight.style.color = "red";
  }
};
