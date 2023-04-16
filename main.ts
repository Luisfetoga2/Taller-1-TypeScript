import {series} from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('series')!;
let average: HTMLElement = document.getElementById("average")!;

llenarTabla();
average.innerHTML = `Seasons Average: ${calcularPromedio()}`;

function llenarTabla(): void {
    series.forEach((serie) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
        <td> 
            ${serie.id}
        </td>
        <td>
            ${serie.title}
        </td>
        <td>
            ${serie.channel}
        </td>
        <td>
            ${serie.seasons}
        </td>`;
        seriesTbody.appendChild(fila);
    });
}

function calcularPromedio(): string {
    let promedio = 0;
    series.forEach(serie => promedio += serie.seasons);
    promedio /= series.length;
    return promedio.toFixed(2)
}
