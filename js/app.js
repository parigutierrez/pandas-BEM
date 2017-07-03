//*************OCULTAR IMAGENES*************
var tache1 = document.getElementById("cerrar1");
var tache2 = document.getElementById("cerrar2");
var tache3 = document.getElementById("cerrar3");
var tache4 = document.getElementById("cerrar4");

function cerrar(){
    document.getElementsByTagName("div")[0].style.display = "none";
}
tache1.addEventListener("click", cerrar);

function cerrar1(){
    document.getElementsByTagName("div")[1].style.display = "none";
}
tache2.addEventListener("click", cerrar1);

function cerrar2(){
    document.getElementsByTagName("div")[2].style.display = "none";
}
tache3.addEventListener("click", cerrar2);

function cerrar3(){
    document.getElementsByTagName("div")[3].style.display = "none";
}
tache4.addEventListener("click", cerrar3);

//*************MOSTRAR IMAGENES*************
function mostrar(){
    document.getElementsByTagName("div")[0].style.display = "inline-block";
    document.getElementsByTagName("div")[1].style.display = "inline-block";
    document.getElementsByTagName("div")[2].style.display = "inline-block";
    document.getElementsByTagName("div")[3].style.display = "inline-block";
}

restaurar.addEventListener("click", mostrar);

//*************OCULTAR PARRAFO IZQUIERDO*************

function parrafoMostrar(){
    document.getElementById("pUno").style.visibility = "hidden";
    origen.removeEventListener("click", parrafoMostrar);
    origen.addEventListener("click", parrafoOcultar);
}
function parrafoOcultar(){
    document.getElementById("pUno").style.visibility = "visible";
    origen.removeEventListener("click", parrafoOcultar);
    origen.addEventListener("click", parrafoMostrar);
}

origen.addEventListener("click", parrafoMostrar);

//*************OCULTAR PARRAFO DERECHO*************

function parrafoMostrar2(){
    document.getElementById("pDos").style.visibility = "hidden";
    extincion.removeEventListener("click", parrafoMostrar2);
    extincion.addEventListener("click", parrafoOcultar2);
}
function parrafoOcultar2(){
    document.getElementById("pDos").style.visibility = "visible";
    extincion.removeEventListener("click", parrafoOcultar2);
    extincion.addEventListener("click", parrafoMostrar2);
}

extincion.addEventListener("click", parrafoMostrar2);
