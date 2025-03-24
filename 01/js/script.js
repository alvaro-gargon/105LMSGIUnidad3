var titulo =document.getElementById("titulo")

titulo.innerText="Este es el titulo";

var parrafo =document.getElementsByClassName("parrafo");

parrafo[0].innerText="Este es el 1 ";

parrafo[1].outerHTML="<div>te hago un div </div>"

var cuerpo =document.getElementById("cuerpo")

cuerpo.style.backgroundColor="#f4f4f4"
cuerpo.style.textAlign="center"
titulo.style.color="#333"
titulo.style