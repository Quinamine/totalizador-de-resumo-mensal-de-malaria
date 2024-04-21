"use strict"

const backup = {
    saveGridInputs() {
        const gridInputs = document.querySelectorAll("[data-total]");

        for (let i = 0; i < gridInputs.length; i++) {
            
            gridInputs[i].addEventListener("input", () => {
                localStorage.setItem(`${keyPrefix}-input${i}`, gridInputs[i].value);
            });
            gridInputs[i].value = localStorage.getItem(`${keyPrefix}-input${i}`);
        }
        
    },
    
    saveExtraInputs() {
        const extraInputs = document.querySelectorAll(".input-adicional");
        extraInputs.forEach( input => {
            input.addEventListener("input", () => localStorage.setItem(`${keyPrefix}-${input.id}`, input.value));
            input.value = localStorage.getItem(`${keyPrefix}-${input.id}`);
        });
    }
}

function totalizar(inputTarget) {
    inputTarget.classList.add(`${inputTarget.dataset.total}`);
    const celulasPorTotalizar = document.querySelectorAll(`.${inputTarget.dataset.total}`);
    const totaloutput = document.querySelector(`.${inputTarget.dataset.totaloutput}`);

    let soma = 0;
    for(const c of celulasPorTotalizar) {
        soma += Number(c.value);
    }
    totaloutput.value = soma;
}


function escutarEventos() {
    const gridInputs = document.querySelectorAll("[data-total]");
    gridInputs.forEach( gi => {
        gi.addEventListener("input", () => totalizar(gi));
        gi.value !== "" && totalizar(gi);
    });
}

window.addEventListener("load", () => {
    backup.saveGridInputs();
    backup.saveExtraInputs();
    escutarEventos();    
});




