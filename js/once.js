function Domload() {
  //Obtiene un elemento  del HTML a través de su id "información" para agregar mensajes
  var info = document.getElementById("informacion");

  // Obtiene el número de enlaces de la pagina a través de su tag "a"
  var enlaces = document.getElementsByTagName("a");

  // crea un mensaje para ser visualizado en el HTML:
  info.innerHTML = "Numero de enlaces = "+enlaces.length;

  // Direccion del penultimo enlace
  var mensaje = "El pen&uacute;ltimo enlace apunta a: "+enlaces[enlaces.length-2].href;

  // agrega infomación al mensaje para ser visualizado en el HTML:
  info.innerHTML = info.innerHTML + "<br/>" + mensaje;

  // Numero de enlaces que apuntan a http://prueba
  var contador = 0;

  for(var i=0; i<enlaces.length; i++)
    // Es necesario comprobar los enlaces http://prueba y
    // http://prueba/ por las diferencias entre navegadores
        if(enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/")
                contador++;

// agrega infomación al mensaje para ser visualizado en el HTML:
info.innerHTML = info.innerHTML + "<br/>" + contador + " enlaces apuntan a http://prueba"

// Numero de enlaces del tercer párrafo
  var parrafos = document.getElementsByTagName("p");
  enlaces = parrafos[2].getElementsByTagName("a"); // [2] para el tercer párrafo

  // agrega infomación al mensaje para ser visualizado en el HTML:
  info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces del tercer párrafo = "+enlaces.length;
}

function muestra() {
  var elemento = document.getElementById("adicional");
  elemento.className = "visible";

  var enlace = document.getElementById("enlace");
  enlace.className = "visible";

  var enlace1 = document.getElementById("enlace1");
  enlace.className = "oculto";

}

function muestraOculta(id) {
  var elemento = document.getElementById('contenidos_'+id);
  var enlace = document.getElementById('enlace_'+id);

  if(elemento.style.display == "" || elemento.style.display == "block") {
    elemento.style.display = "none";
    enlace.innerHTML = 'Mostrar contenidos';
  }
  else {
    elemento.style.display = "block";
    enlace.innerHTML = 'Ocultar contenidos';
  }
}

  function agregaLinea(){
    var oTbl = document.getElementById("tblUno");
    var oLin = oTbl.insertRow(-1);
    var oCelda1 = oLin.insertCell(0);
    var oCelda2 = oLin.insertCell(1);

    oCelda1.innerHTML = "Celda";
    oCelda2.innerHTML = 'Texto y campo ' +
    '<input type="text" name="campo"/>';
  }

  function eliminaLinea(){
    var oTbl = document.getElementById("tblUno");
    oTbl.deleteRow(1);
  }


  contador=3;
  function anade() {
    var elemento = document.createElement("li");
    var lista = document.getElementById("lista");
    var nuevoElemento = "<li>Elemento "+(++contador)+"</li>";
    lista.innerHTML = lista.innerHTML + nuevoElemento;
  }
