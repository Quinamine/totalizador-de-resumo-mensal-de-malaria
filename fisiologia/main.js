"use strict"
const backup = {
    saveGridInputs() {
        const inputsCelulares = document.querySelectorAll("[data-total]");
        for (let i = 0; i < inputsCelulares.length; i++) {    
            inputsCelulares[i].addEventListener("input", () => {
                localStorage.setItem(`${keyPrefix}-input${i}`, inputsCelulares[i].value);
            });
            inputsCelulares[i].value = localStorage.getItem(`${keyPrefix}-input${i}`);
        }
    },
    saveExtraInputs() {
        const inputsNaoCelulares = document.querySelectorAll(".input-nao-celular");
        inputsNaoCelulares.forEach( inputTarget => {
            inputTarget.addEventListener("input", () => localStorage.setItem(`${keyPrefix}-${inputTarget.id}`, inputTarget.value));
            inputTarget.value = localStorage.getItem(`${keyPrefix}-${inputTarget.id}`);
        });
    }
}
function totalizar(inputTarget) {
    const classNameDosOperandos = inputTarget.dataset.total;
    inputTarget.classList.add(`${classNameDosOperandos}`);
    const operandos = document.querySelectorAll(`.${classNameDosOperandos}`);
    const celulaDeSaida = document.querySelector(`.${inputTarget.dataset.totaloutput}`);
    let soma = 0;
    for(const operando of operandos) {
        soma += Number(operando.value);
    }
    celulaDeSaida.value = soma;
}
function escutarEventos() {
    const inputsCelulares = document.querySelectorAll("[data-total]");
    inputsCelulares.forEach( inputCelular => {
        inputCelular.addEventListener("input", () => totalizar(inputCelular));
        inputCelular.value !== "" && totalizar(inputCelular);
    });
}
window.addEventListener("load", () => {
    backup.saveGridInputs();
    backup.saveExtraInputs();
    escutarEventos();    
});




