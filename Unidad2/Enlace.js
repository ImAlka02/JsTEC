let filterMethod = function(text){
    let renglones = Array.from(this.querySelectorAll("tbody tr"));
    let ocultar = renglones.filter(x => !Array.from(x.childNodes)
    .some(y=>y.textContent.toLowerCase().includes(text.toLowerCase())));
    console.log(ocultar);

    
    renglones.filter(tr => tr.hidden && !ocultar.includes(tr)).forEach(tr=>tr.hidden = false);
    ocultar.forEach(tr => tr.hidden = true);
};

let dataBindMethod = function(datos){
            if(datos.length > 0){
                let primero = datos[0];
                //Generar el thead
                let thead = document.createElement("thead");
                let headRow = thead.insertRow();
                for(let i of Object.keys(primero)){
                    let th = document.createElement("th");
                    th.textContent= i;
                    headRow.append(th);
                }
                this.append(thead);
                //Generar Tbody
                let tbody = document.createElement("tbody");
                for(let obj of datos){
                    let tr = tbody.insertRow();
                    for(let k of Object.keys(primero)){
                        tr.insertCell().textContent = obj[k];
                    }
                }
                this.append(tbody);
            }
};

function mostrarTr(event){
    let a = event.target;
    let inicio = parseInt(a.dataset.inicio);
    let final = parseInt(a.dataset.fin);

    let rows = Array.from(a.closest("table").querySelectorAll("tbody tr"));

    for (let i = inicio; i <= final; i++) {
        rows[i].hidden = false;
        
    }
}

let paginaMethod = function(tamanoPagina){
    //Calcular enlaces
    let totalTr = this.querySelectorAll("tbody tr").length;
    let totalPag = Math.ceil(totalTr / tamanoPagina);
    //Crear el tfoot
    let tfoot = document.createElement("tfoot");
    let tfootTr = tfoot.insertRow();
    let tfootTd = tfootTr.insertCell();
    for (let i = 1; i <= totalPag; i++) {
        let a = document.createElement("a");
        a.textContent = i;
        a.href="#";
        a.dataset.inicio = (i -1)*tamanoPagina;
        a.dataset.fin = parseInt(a.dataset.inicio) + tamanoPagina -1;
        a.onclick= mostrarTr;
        tfootTd.append(a);
    }
    tfootTd.colSpan = this.tBodies[0].rows[0].cells.length;
    this.append(tfoot);
};



document.querySelectorAll("table").forEach(x=> {
    x.dataBind = dataBindMethod;
    x.filter = filterMethod;
    x.paginate = paginaMethod;
});
     