
const controle= document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento)=>{
    elemento.addEventListener("click", (evento)=>{
        manipulaContador(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca);
    })
})


function manipulaContador(operacao, controle){
    const  peca = controle.querySelector("[data-contador]");

    if (operacao === "-"){
        peca.value = parseInt(peca.value) -1;

    }else{
        peca.value = parseInt(peca.value) + 1;
    }
}   

function atualizaEstatistica (peca){

        estatisticas.forEach( (elemento) =>{
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica];

        })
};


const robo = document.querySelector(".robo");

var cores = ["Robotron 2000 - Amarelo.png", "Robotron 2000 - Azul.png", "Robotron 2000 - Branco.png", 
"Robotron 2000 - Preto.png", "Robotron 2000 - Rosa.png", "Robotron 2000 - Vermelho.png"];
let i = 1;

if(i < 5) {
  
 robo.addEventListener("click", ()=>{
     robo.src= `img/${cores[i]}` 
    console.log(i)
    i++
    if(i >5){

        i = 0;
        
        }
})
}

    
    
    






      



