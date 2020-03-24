function validaFechaMenor(campo){
  var bRet = false;
  var dHoy = new Date();
  var dCapt = null;
  if (campo.value == "")
    alert("Faltan datos");
  else{
    dCapt = validaFecha(campo.value);
    if (dCapt != null && dCapt < dHoy)
      bRet = true;
    else
      alert("La fecha debe ser menor a la fecha actual");
  }
  return bRet;
}

  function validaFecha(valor){
      var dConvertida = null;
      var sAnio = "";
      var sMes = "";
      var sDia = "";
      var nAnio=0, nMes=0, nDia = 0;

      if (valor.match(/^\d{4}\-\d{2}\-\d{2}$/)){
        nDia = parseInt(valor.substring(8,10), 10);
        nMes = parseInt(valor.substring(6,7), 10);
        nAnio = parseInt(valor.substring(0,4), 10);


        if (nDia <1 || nDia>31)
          alert("El día no es válido")
        else{
          if (nMes <1 || nMes>12)
            alert("El mes no es válido");
          else{
            if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 ||
               nMes==8 || nMes==10 || nMes==12) && nDia > 31)
               alert("El mes tiene máximo 31 días");
            else if ((nMes==4 || nMes==6 || nMes==9 ||
                  nMes==11) && nDia > 30)
               alert("El mes tiene máximo 30 días");
            else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
               alert("Febrero tiene 28 días o 29 en bisiesto");
            else{
              dConvertida = new Date();
              dConvertida.setFullYear(nAnio, nMes-1, nDia);
            }//fin validaci�n día-mes
          }//mes válido
        }//día válido
        creasigno(nDia,nMes);
      }//formato válido

      else{
        alert("No tiene formato de fecha");
      }
      return dConvertida;
  }


  function creasigno(nDia,nMes){

  var newDiv = document.createElement("div");
  var color;
  if((nDia>20) && (nMes==3) || (nDia <=20) && (nMes==4)){
  var newContent = document.createTextNode("SIGNO ARIES\n\nNúmero de la Suerte: 5");
   color = "red";
  }else if ((nDia>20) && (nMes==4) || (nDia <=20) && (nMes==5)){
    var newContent = document.createTextNode("SIGNO TAURO\n\nNúmero de la Suerte: 12");
     color = "green";
  }else if ((nDia>20) && (nMes==5) || (nDia <=20) && (nMes==6)){
      var newContent = document.createTextNode("SIGNO GEMINIS\n\nNúmero de la Suerte: 3");
       color = "yellow";
    }else if ((nDia>20) && (nMes==6) || (nDia <=22) && (nMes==7)){
        var newContent = document.createTextNode("SIGNO CANCER\n\nNúmero de la Suerte: 2");
         color = "white";
      }else if ((nDia>22) && (nMes==7) || (nDia <=23) && (nMes==8)){
          var newContent = document.createTextNode("SIGNO LEO\n\nNúmero de la Suerte: 9");
           color = "orange";
        }else if ((nDia>23) && (nMes==8) || (nDia <=22) && (nMes==9)){
            var newContent = document.createTextNode("SIGNO VIRGO\n\nNúmero de la Suerte: 17");
             color = "brown";
          }else if ((nDia>22) && (nMes==9) || (nDia <=22) && (nMes==10)){
              var newContent = document.createTextNode("SIGNO LIBRA\n\nNúmero de la Suerte: 6");
               color = "pink";
            }else if ((nDia>22) && (nMes==10) || (nDia <=22) && (nMes==11)){
                var newContent = document.createTextNode("SIGNO ESCORPIO\n\nNúmero de la Suerte: 8");
                 color = "darkred";
              }else if ((nDia>22) && (nMes==11) || (nDia <=21) && (nMes==12)){
                  var newContent = document.createTextNode("SIGNO SAGITARIO\n\nNúmero de la Suerte: 4");
                   color = "#cf3476";
                }else if ((nDia>21) && (nMes==12) || (nDia <=21) && (nMes==1)){
                    var newContent = document.createTextNode("SIGNO CAPRICORNIO\n\nNúmero de la Suerte: 23");
                     color = "black"; var fontcolor="#fff";
                  }else if ((nDia>21) && (nMes==1) || (nDia <=21) && (nMes==2)){
                      var newContent = document.createTextNode("SIGNO ACUARIO\n\nNúmero de la Suerte: 0");
                       color = "gray";
                    }else if ((nDia>22) && (nMes==21) || (nDia <=23) && (nMes==3)){
                        var newContent = document.createTextNode("SIGNO PICIS\n\nNúmero de la Suerte: 7");
                         color = "purple";
                      }

  //var newContent = document.createTextNode("SIGNO");
  newDiv.appendChild(newContent); //añade texto al div creado.

   // añade el elemento creado y su contenido al DOM
   var currentDiv = document.getElementById("div");
   document.body.insertBefore(newDiv, currentDiv);
  newDiv.style="border: 3px solid #999999; background-color:"+color+"; color:"+fontcolor+"; width: 200px ;height:150px ";
}
