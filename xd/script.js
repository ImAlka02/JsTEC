
const lista = document.getElementById("animalList");

async function descargarDatos() {
  
    
        
        for (let animal of animales) {
            let li = document.createElement("li");
            let a = document.createElement("a");

            a.textContent = animal.Nombre;
            a.href = "javascript:";
            a.onclick = function () {
                verDetalles(animal);
            };
            let img=document.createElement("img");
            img.src=animal.Image;
            img.height=50;
            img.width=50;
            img.alt=animal.Nombre;
            img.onclick=function () {
                verDetalles(animal);
            };
            li.append(img,a);
            lista.append(li);
        }
    
}

function verDetalles(animal) {
    sessionStorage.setItem("Detalles", JSON.stringify(animal));
    location.href = "animal.html";
}

descargarDatos();

const animalDetails = document.getElementById("animalDetails");

const animalDetailsData = sessionStorage.getItem("Detalles");

if (animalDetailsData) {
    
    const animal = JSON.parse(animalDetailsData);
    
    if (animal.Image) {
        
        let img = document.createElement("img");
        img.src = animal.Image;
        img.alt = `Imagen de ${animal.Nombre}`;
        img.classList="Imagen";
        animalDetails.appendChild(img);
    }
    for (let key in animal) {
        let paragraph = document.createElement("p");
        if(key!="Image"){

            
                paragraph.textContent=key +": " +animal[key];
            animalDetails.append(paragraph);
        }

    }
} else {
    animalDetails.textContent = "No se encontraron detalles del animal.";
}

        