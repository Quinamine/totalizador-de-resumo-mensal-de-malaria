const referencia = {

    retornarLinha(celulaFocada) {
        const celulaFocadaParent = celulaFocada.parentElement;
        const celulaFocadaAndSiblings = celulaFocadaParent.children;

        let numLinha;
        for (let i=0; i<celulaFocadaAndSiblings.length; i++) {
            if(celulaFocadaAndSiblings[i] === celulaFocada) {
                numLinha = i;

                if(celulaFocadaParent.parentElement.matches(".verso")) {
                    numLinha += 39;
                }
            }
        }
        linhaOutput.textContent = numLinha+1;
    },

    retornarColuna(celulaFocada) {
        const celulaFocadaParent = celulaFocada.parentElement;

        if(celulaFocadaParent.matches(".pf")) {
            colunaOutput.textContent = "PF";
        } else {
            colunaOutput.textContent = "BM";
        }
    },
    
    retornarNulo() {
        linhaOutput.textContent = ""
        colunaOutput.textContent = ""
    }

}



let linhaOutput, colunaOutput;
window.addEventListener("load", () => {
    linhaOutput = document.querySelector(".ref-de-linha");
    colunaOutput = document.querySelector(".ref-de-sexo");

    celulas_de_entrada.forEach ( cel => {
        
        cel.addEventListener("focusin", () => {
            referencia.retornarLinha(cel);
            referencia.retornarColuna(cel);

            cel.hasAttribute("readonly") && referencia.retornarNulo();
        });

        cel.addEventListener("focusout", () => {
            referencia.retornarNulo();
        });

    });

    window.addEventListener("scroll",()=>{let e=document.querySelector("div.linha-de-referencia"),t=document.querySelector(".bounding-reference");t.getBoundingClientRect().bottom<0?e.classList.add("off"):e.classList.remove("off")});
})