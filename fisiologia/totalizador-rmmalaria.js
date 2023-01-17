const armazenamento = {
    salvarFicha() {

        for(let i=0; i<celulas_de_entrada.length; i++) {
            celulas_de_entrada[i].addEventListener("input", () => {
                localStorage.setItem(`trmmalaria-cel${i}`, `${celulas_de_entrada[i].value}`);
            });
            celulas_de_entrada[i].value = localStorage.getItem(`trmmalaria-cel${i}`);
        }
    },

    salvarDadosAdicionais() {
        const dadosAdicionais = document.querySelectorAll("div.container > header input, footer.rodape-da-ficha input, input[type=date], textArea");

        for (let i=0; i<dadosAdicionais.length; i++) {

            dadosAdicionais[i].addEventListener("input", () => {             
                localStorage.setItem(`trmmalaria-${dadosAdicionais[i].id}`, `${dadosAdicionais[i].value}`);

                if(dadosAdicionais[i].matches("#nota")) {
                    let dado = dadosAdicionais[i];
                    
                    dado.value.length > 0 ? dado.classList.add("bold") : dado.classList.remove("bold");
                }
            })
            dadosAdicionais[i].value = localStorage.getItem(`trmmalaria-${dadosAdicionais[i].id}`);
        }
    },

    salvarDestaqueDeTotais(){
        readonlyCelsDarker.addEventListener("change",()=>{readonlyCelsDarker.checked?localStorage.setItem("trmmalaria-destaque","on"):localStorage.removeItem("trmmalaria-destaque")}),localStorage.getItem("trmmalaria-destaque")&&(readonlyCelsDarker.setAttribute("checked",""),menu.destacarFundoDeTotais())}
}



const totalizador = {

    filtrarCelulas(cel) {
        if(cel.dataset.total) {
            cel.classList.add(`${cel.dataset.total}`);
            const celulasPorTotalizar = document.querySelectorAll(`.${cel.dataset.total}`);
            const celula_de_saida = document.querySelector(`.${cel.dataset.totaloutput}`);
            this.totalizarCelulas(celulasPorTotalizar, celula_de_saida);
        }
    },

    totalizarCelulas(celulasPorTotalizar, celula_de_saida) {
        let soma = 0;
        
        for (const v of celulasPorTotalizar) {
            soma += Number(v.value);
        }

        celula_de_saida.value = soma;

    }
}

window.addEventListener("load", () => {
    // INSTANCIAMENTO
    armazenamento.salvarFicha();
    armazenamento.salvarDadosAdicionais();
    armazenamento.salvarDestaqueDeTotais();
    celulas_de_entrada.forEach ( cel => {
        cel.addEventListener("input", () => totalizador.filtrarCelulas(cel));
        
        if(cel.value !== "") {
            totalizador.filtrarCelulas(cel);
        }
    });
})