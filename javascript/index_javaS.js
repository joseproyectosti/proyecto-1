var Nuevocontenido = document.getElementById("publicidad");
var segundos = 0;
var contador1 = 7;
var contador2 = 14;
var contador3 = 21;
var contador4 = 28;
function reloj() {
    segundos = segundos + 1;
    if (segundos == contador1) {
        var image = document.getElementById("image");
        var texto = document.getElementById("imagep");
        Nuevocontenido.removeChild(image);
        Nuevocontenido.removeChild(texto);
        var Nuevoelemento = document.createElement("img");
        Nuevocontenido.append(Nuevoelemento);
        Nuevoelemento.setAttribute("src", "Imagenes/Grandes Ligas.jpg");
        Nuevoelemento.setAttribute("alt", "Grandes Ligas");
        Nuevoelemento.setAttribute("height", "280");
        Nuevoelemento.setAttribute("id", "image1");
        var NuevoelementoA = document.createElement("p");
        Nuevocontenido.append(NuevoelementoA);
        NuevoelementoA.setAttribute("id", "imagep1");
        NuevoelementoA.innerHTML = "MLB por FOXsport";
        contador1 = contador1 + 28; 
    }
    if (segundos == contador2) {
        var image1 = document.getElementById("image1");
        var texto1 = document.getElementById("imagep1");
        Nuevocontenido.removeChild(image1);
        Nuevocontenido.removeChild(texto1);
        var Nuevoelemento1 = document.createElement("img");
        Nuevocontenido.append(Nuevoelemento1);
        Nuevoelemento1.setAttribute("src", "Imagenes/mv5bztqznze1zwmtzjrkzc00yjq1ltgxmtatoda2m2e0ognmowe2xkeyxkfqcgdeqxvyndg4mjkzndk40._v1_sx1777_cr001777999_al_.jpg");
        Nuevoelemento1.setAttribute("alt", "La materia oscura");
        Nuevoelemento1.setAttribute("height", "280");
        Nuevoelemento1.setAttribute("id", "image2");
        var Nuevoelemento1A = document.createElement("p");
        Nuevocontenido.append(Nuevoelemento1A);
        Nuevoelemento1A.setAttribute("id", "imagep2");
        Nuevoelemento1A.innerHTML = "His dark materials por HBO"; 
        contador2 = contador2 + 28;
    }
    if (segundos == contador3) {
        var image2 = document.getElementById("image2");
        var texto2 = document.getElementById("imagep2");
        Nuevocontenido.removeChild(image2);
        Nuevocontenido.removeChild(texto2);
        var Nuevoelemento2 = document.createElement("img");
        Nuevocontenido.append(Nuevoelemento2);
        Nuevoelemento2.setAttribute("src", "Imagenes/Captura de pantalla de 2022-05-06 13-22-01.png");
        Nuevoelemento2.setAttribute("alt", "Aprender italiano");
        Nuevoelemento2.setAttribute("height", "280");
        Nuevoelemento2.setAttribute("id", "image3");
        var Nuevoelemento2A = document.createElement("p");
        Nuevocontenido.append(Nuevoelemento2A);
        Nuevoelemento2A.setAttribute("id", "imagep3");
        Nuevoelemento2A.innerHTML = "Aprende italiano con nativa"; 
        contador3 = contador3 + 28;
    }
    if (segundos == contador4) {
        var image3 = document.getElementById("image3");
        var texto3 = document.getElementById("imagep3");
        Nuevocontenido.removeChild(image3);
        Nuevocontenido.removeChild(texto3);
        var Nuevoelemento3 = document.createElement("img");
        Nuevocontenido.append(Nuevoelemento3);
        Nuevoelemento3.setAttribute("src", "Imagenes/FB_IMG_1508511070943.jpg");
        Nuevoelemento3.setAttribute("alt", "The Tower");
        Nuevoelemento3.setAttribute("height", "280");
        Nuevoelemento3.setAttribute("id", "image");
        var Nuevoelemento3A = document.createElement("p");
        Nuevocontenido.append(Nuevoelemento3A);
        Nuevoelemento3A.setAttribute("id", "imagep");
        Nuevoelemento3A.innerHTML = "Proximamente solo en cines"; 
        contador4 = contador4 + 28;
    }   
}
var parar = window.setInterval(reloj, 1000);


var cambiarN = 1;
var cambiarD = 2;
var cambiar = 1;
function modoNocturno() {
    var cuerpo = document.getElementById("cuerpo");
    var cabeza = document.getElementById("encabezado");
    var menu = document.getElementById("menu");
    var titulo1 = document.getElementById("titulo1");
    var titulo2 = document.getElementById("titulo2");
    var titulo3 = document.getElementById("titulo3");
    var contenedor1 = document.getElementById("contenedorUno"); 
    var contenedor2 = document.getElementById("contenedorDos");
    var contenedor3 = document.getElementById("contenedorTres");
    var masnoticias = document.getElementById("MasNoti");
    var piepagina = document.getElementById("piepagina");
    var notigame = document.querySelectorAll(".notigame > p > a");
    var notianime = document.querySelectorAll(".notiAnime > p > a");
    var i = 0;
    var j = 0;
    if (cambiarN == cambiar) {
        cuerpo.style.backgroundColor = "rgb(37, 37, 37)";
        Nuevocontenido.style.color = "white"; 
        cabeza.style.backgroundColor = "black";
        menu.style.backgroundColor = "black";
        titulo1.style.backgroundColor = "gold";
        titulo2.style.backgroundColor = "gold";
        titulo3.style.backgroundColor = "gold";
        titulo1.style.color = "black";
        titulo2.style.color = "black";
        titulo3.style.color = "black";
        contenedor1.style.borderTop = "2em solid darkgoldenrod";
        contenedor2.style.borderTop = "1em solid darkgoldenrod";
        contenedor3.style.borderTop = "2em solid darkgoldenrod";
        contenedor2.style.color = "white";
        masnoticias.style.backgroundColor = "khaki";
        masnoticias.style.borderTop = "2em solid black";
        piepagina.style.backgroundColor = "black";
        while (i < 8) {
            let elemento = notigame[i];
            elemento.style.color = "white";
            i = i + 1;
        }
        while (j < 8) {
            let elemento1 = notianime[j];
            elemento1.style.color = "white";
            j = j + 1;
        }
        cambiar = cambiar + 1;
    } else {
        cuerpo.style.backgroundColor = "white";
        Nuevocontenido.style.color = "black";
        cabeza.style.backgroundColor = "darkblue";
        menu.style.backgroundColor = "darkblue";
        titulo1.style.backgroundColor = "blue";
        titulo2.style.backgroundColor = "blue";
        titulo3.style.backgroundColor = "blue";
        titulo1.style.color = "white";
        titulo2.style.color = "white";
        titulo3.style.color = "white";
        contenedor1.style.borderTop = "2em solid deepskyblue";
        contenedor2.style.borderTop = "1em solid deepskyblue";
        contenedor2.style.color = "black";
        contenedor3.style.borderTop = "2em solid deepskyblue";
        masnoticias.style.backgroundColor = "lightskyblue";
        masnoticias.style.borderTop = "2em solid darkblue";
        piepagina.style.backgroundColor = "darkblue";
        while (i < 8) {
            let elemento = notigame[i];
            elemento.style.color = "black";
            i = i + 1;
        }
        while (j < 8) {
            let elemento1 = notianime[j];
            elemento1.style.color = "black";
            j = j + 1;
        }
        cambiar = cambiar - 1;
    }
}
var modonoche = document.getElementById("modonoche");
modonoche.addEventListener("click", modoNocturno);

//&& = == != >= <= \r\n % += || ¿
