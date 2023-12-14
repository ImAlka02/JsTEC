let instrumentos= [
    {
      "id": 1,
      "nombre": "Guitarra",
      "tipo": "Cuerda",
      "material": "Madera",
      "tono": "Agudo"
    },
    {
      "id": 2,
      "nombre": "Piano",
      "tipo": "Teclado",
      "material": "Madera y Metal",
      "tono": "Varía según la tecla"
    },
    {
      "id": 3,
      "nombre": "Trompeta",
      "tipo": "Viento-metal",
      "material": "Latón",
      "tono": "Brillante"
    },
    {
      "id": 4,
      "nombre": "Batería",
      "tipo": "Percusión",
      "material": "Acero y Piel",
      "tono": "Varios tambores con diferentes tonos"
    },
    {
      "id": 5,
      "nombre": "Violín",
      "tipo": "Cuerda",
      "material": "Madera",
      "tono": "Sutil y melódico"
    },
    {
      "id": 6,
      "nombre": "Flauta",
      "tipo": "Viento-madera",
      "material": "Metal y Madera",
      "tono": "Suave"
    },
    {
      "id": 7,
      "nombre": "Saxofón",
      "tipo": "Viento-metal",
      "material": "Latón",
      "tono": "Melódico"
    },
    {
      "id": 8,
      "nombre": "Bajo eléctrico",
      "tipo": "Cuerda",
      "material": "Madera y Metal",
      "tono": "Grave"
    },
    {
      "id": 9,
      "nombre": "Acordeón",
      "tipo": "Viento-metal",
      "material": "Metal y Acrílico",
      "tono": "Versátil"
    },
    {
      "id": 10,
      "nombre": "Harmónica",
      "tipo": "Viento-metal",
      "material": "Metal y Plástico",
      "tono": "Bluesy"
    },
    {
      "id": 11,
      "nombre": "Tambor",
      "tipo": "Percusión",
      "material": "Piel y Madera",
      "tono": "Rítmico"
    },
    {
      "id": 12,
      "nombre": "Violonchelo",
      "tipo": "Cuerda",
      "material": "Madera",
      "tono": "Profundo"
    },
    {
      "id": 13,
      "nombre": "Oboe",
      "tipo": "Viento-madera",
      "material": "Madera",
      "tono": "Nasal"
    },
    {
      "id": 14,
      "nombre": "Clarinete",
      "tipo": "Viento-madera",
      "material": "Madera",
      "tono": "Mellizo"
    },
    {
      "id": 15,
      "nombre": "Trombón",
      "tipo": "Viento-metal",
      "material": "Latón",
      "tono": "Potente"
    },
    {
      "id": 16,
      "nombre": "Ukelele",
      "tipo": "Cuerda",
      "material": "Madera",
      "tono": "Alegre"
    },
    {
      "id": 17,
      "nombre": "Contrabajo",
      "tipo": "Cuerda",
      "material": "Madera",
      "tono": "Profundo y resonante"
    },
    {
      "id": 18,
      "nombre": "Gaita",
      "tipo": "Viento",
      "material": "Madera y Cuero",
      "tono": "Folklórico"
    },
    {
      "id": 19,
      "nombre": "Xilófono",
      "tipo": "Percusión",
      "material": "Madera y Metal",
      "tono": "Cristalino"
    },
    {
      "id": 20,
      "nombre": "Sitar",
      "tipo": "Cuerda",
      "material": "Madera y Metal",
      "tono": "Exótico"
    }
  ]

// const listaInstrumentos = document.getElementById("listaInstrumentos");
const divContainer = document.querySelector(".container");


if(divContainer){
  cargarDatos();
} else {
  cargarInstrumento();
}

function cargarDatos() {
  
  for(let i of instrumentos){
    let div = document.createElement("div");
    let a = document.createElement("a");
    div.className = "item";
    a.textContent = i.nombre;
    a.href = "javascript:";
    a.onclick = function () {
      verDetalles(i.id);
    };
    div.append(a);
    divContainer.append(div);
  }

        // for(let i of instrumentos){
        //     let li = document.createElement("li");
        //     let a = document.createElement("a");
        //     a.textContent = i.nombre;
        //     a.href = "javascript:";
        //     a.onclick = function () {
        //         verDetalles(i.id);
        //     };
        //     li.append(a);
        //     listaInstrumentos.append(li);
        // }
    
}

function verDetalles(instrumento){
    sessionStorage.id = instrumento;
    location.href = "instrumento.html"
}



function buscarInstrumento(instrumento){
  let i = instrumentos.find(x=>x.id == instrumento);
        if(i){
            return i;
        } else {
            console.log("no se encontro ninguno");
        }
    } 

function cargarInstrumento(){
  if(sessionStorage.id){
    let instrumento = buscarInstrumento(sessionStorage.id);
    for(let prop in instrumento){
        let obj = document.querySelector("."+prop);
        if(obj){
            obj.textContent = instrumento[prop];
        }
    }
  } else {
    location.hfre = "Instrumentos.html"
  }
}

