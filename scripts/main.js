import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
var average = document.getElementById("average");
llenarTabla();
average.innerHTML = "Seasons Average: ".concat(calcularPromedio());
function llenarTabla() {
    series.forEach(function (serie) {
        var fila = document.createElement("tr");
        fila.innerHTML = "\n        <td> \n            ".concat(serie.id, "\n        </td>\n        <td>\n            ").concat(serie.title, "\n        </td>\n        <td>\n            ").concat(serie.channel, "\n        </td>\n        <td>\n            ").concat(serie.seasons, "\n        </td>");
        seriesTbody.appendChild(fila);
    });
}
function calcularPromedio() {
    var promedio = 0;
    series.forEach(function (serie) { return promedio += serie.seasons; });
    promedio /= series.length;
    return promedio.toFixed(2);
}
