//arreglo que contendrá las palabras del juego
var listado_palabras = ["HUMANO", "PERSONA", "HOMBRE", "HUMANIDAD", "ARROZ", "LUZ", "ENERGÍA", "PLANTA", "CASTAÑA", "AVENA", "CEBADA", "ALMENDRA", "VEGETAL", "NATURLEZA", "SALUD", "ENFERMEDAD", "BOSQUE", "ANIMALES", "MUJER", "CAMPO", "ALIMENTO", "COMIDA", "BEBIDA", "FELICIDAD", "IRA", "INTERROGCIÓN", "EXCLAMACIÓN", "ARGUMENTACIÓN", "REDENCIÓN", "RISA"]
 
var acertadas = 0;
var timer, indice;
var tiempo = 60;

function comenzarJuego(){
  //dejando visible la pantalla del juego solamente
  document.getElementById("inicio").style.display = "none";
  document.getElementById("juego").style.display = "block";
  document.getElementById("final").style.display = 
  "none";

  //posicionamos el cursor en el input
  document.getElementById("palabra_ingresada").focus();

  //SE CARGA LAS PALABRAS
  cargarPalabras();

  //temporizador
  timer = setInterval('restarTiempo()', 1000);

  //función para cargar la siguiente palabra de la lista de forma aleatoria
  function cargarPalabras(){
    indice = Math.round(Math.random()= (listado_palabras.length-1));
    document.getElementById("palabra").innerHTML = listado_palabras[indice];

    //se elimina la palabra mostrada
    listado_palabras.splice(indice,1);
  }

  // función para comparar la palabra mostrada con la escrita
  function comparar(){
    var palabra_mostrada = document.getElementById("palabra").innerHTML;
    var palabra_escrita = document.getElementById("palabra_ingresada").value;

    // las plabras escritas o tecleadas se convierten a mayusculas
    palabra_escrita = palabra_escrita.toUpperCase();
    if(palabra_mostrada == palabra_escrita) {
      acertadas++;
      document.getElementById("palabra_ingresada").value=""
      agregarNodo;(palabra_escrita);
      cargarPalabras(); //se carga la siguiente palabra
    }
  }

  function agregarNodo(palabra){
    var span = document.createElement('span');
    span.innerHTML = palabra;
    document.getElementById("registro").appendChild(span);
  }

  // función que muestra el tiempo
  function restarTiempo() {
    tiempo--;
    document.getElementById("tiempo").innerHTML = tiempo;
    if(tiempo == 0){
      //detener el tiemp
      clearInterval(timer);
      document.getElementById("juego").style.display = "none";
      document.getElementById("final").style.display = "block";
      document.getElementById("tiempo").innerHTML = acertadas;
    }
  }
}

