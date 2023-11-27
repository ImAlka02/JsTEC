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

document.querySelectorAll("table").forEach(x=> {
    x.dataBind = dataBindMethod;
    x.filter = filterMethod;
});
     