const armazenamento={salvarFicha(){for(let a=0;a<celulas_de_entrada.length;a++)celulas_de_entrada[a].addEventListener("input",()=>{localStorage.setItem(`trmmalaria-cel${a}`,`${celulas_de_entrada[a].value}`)}),celulas_de_entrada[a].value=localStorage.getItem(`trmmalaria-cel${a}`)},salvarDadosAdicionais(){let a=document.querySelectorAll("div.container > header input, footer.rodape-da-ficha input, input[type=date], textArea");for(let t=0;t<a.length;t++)if(a[t].addEventListener("input",()=>{if(localStorage.setItem(`trmmalaria-${a[t].id}`,`${a[t].value}`),a[t].matches("#nota")){let e=a[t];e.value.length>0?e.classList.add("bold"):e.classList.remove("bold")}}),a[t].value=localStorage.getItem(`trmmalaria-${a[t].id}`),a[t].matches("#nota")){let e=a[t];e.value.length>0?e.classList.add("bold"):e.classList.remove("bold")}},salvarDestaqueDeTotais(){readonlyCelsDarker.addEventListener("change",()=>{readonlyCelsDarker.checked?localStorage.setItem("trmmalaria-destaque","on"):localStorage.removeItem("trmmalaria-destaque")}),localStorage.getItem("trmmalaria-destaque")&&(readonlyCelsDarker.setAttribute("checked",""),menu.destacarFundoDeTotais())}},totalizador={filtrarCelulas(a){if(a.dataset.total){a.classList.add(`${a.dataset.total}`);let t=document.querySelectorAll(`.${a.dataset.total}`),e=document.querySelector(`.${a.dataset.totaloutput}`);this.totalizarCelulas(t,e)}},totalizarCelulas(a,t){let e=0;for(let l of a)e+=Number(l.value);t.value=e}};window.addEventListener("load",()=>{armazenamento.salvarFicha(),armazenamento.salvarDadosAdicionais(),armazenamento.salvarDestaqueDeTotais(),celulas_de_entrada.forEach(a=>{a.addEventListener("input",()=>totalizador.filtrarCelulas(a)),""!==a.value&&totalizador.filtrarCelulas(a)})});