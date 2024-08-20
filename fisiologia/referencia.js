"use strict"

const referencia = {
    retornarIndicador(inputTarget) {
        const inputTargetAndSiblings = inputTarget.parentElement.children;
        const indicadores = document.querySelectorAll(".ficha__indicador");
        const indicadorOutput = document.querySelector(".reference__output--indicador");

        let inputIndex;
        for (let i in inputTargetAndSiblings) {
            if(inputTarget === inputTargetAndSiblings[i]) inputIndex = i;
        }
        
        let indicador = indicadores[inputIndex].textContent;
        let inputTargetCol = inputTarget.parentElement.dataset.col;
        indicadorOutput.value = `${inputTargetCol}: ${indicador}`;
    },

    retornarFaixaEtaria(inputTarget) {
        const faixaEtariaOutput = document.querySelector(".reference__output--idade");

        let faixaEtaria = inputTarget.parentElement.dataset.faixaetaria;
        faixaEtariaOutput.value = faixaEtaria;
    },

    retornarVazio() {
        const outputs = document.querySelectorAll(".reference__output");
        for (const o of outputs) o.value = "";
    }
}

function events() {
    const inputsCelulares = document.querySelectorAll("[data-total]");
    inputsCelulares.forEach( inputCelular => {
        inputCelular.addEventListener("focus", () => {
            referencia.retornarIndicador(inputCelular);
            referencia.retornarFaixaEtaria(inputCelular);
        });
    });

    inputsCelulares.forEach( inputCelular => inputCelular.addEventListener("focusout", referencia.retornarVazio));
}

window.onload = events;