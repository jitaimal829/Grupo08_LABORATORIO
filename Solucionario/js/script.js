
var parser, xmlDoc;
var text = "<web><lab>" +
"<titulo>Laboratorio Aplicacion de Tecnologias Web <titulo>" +
"<grupo>Grupo 08</grupo>" +
"<fecha>Enero 2022</fecha>" +
"</lab></web>";

parser = new DOMParser();
xmlDoc = parser.parseFromString(text,"text/xml");

document.getElementById("texto1").innerHTML =
xmlDoc.getElementsByTagName("titulo")[0].childNodes[0].nodeValue;
document.getElementById("texto2").innerHTML =
xmlDoc.getElementsByTagName("grupo")[0].childNodes[0].nodeValue;
document.getElementById("texto3").innerHTML =
xmlDoc.getElementsByTagName("fecha")[0].childNodes[0].nodeValue;
