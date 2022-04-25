// ELEMENTOS DA 1a CARTA APENAS
let imgCountry      =     document.querySelector('#imgCountry');
let titleCountry    =     document.querySelector('#titleCountries');
let npopulation      =     document.querySelector('#population');
let region          =     document.querySelector('#region');
let capital         =     document.querySelector('#capital');

// section que acomoda todas as cartas
let sectionCountries = document.querySelector('.countries');

// ENDERECO DO ARQUIVO JSON
const url = 'https://restcountries.com/v2/all';
  
function pegarDados(i){
  fetch(url)
    .then( response => response.json() )
    .then( dados => {
        if(dados.erro) {
            console.log("Erro ao acessar o JSON")
            return
        }
        // console.log(dados)
        // Quantidade de lutadores
        let qtdCountries = (dados.length)
        //console.log(dados);
        //for(let i=0; i < qtdCountries; i++){
         // console.log(dados[i]);
          
       // }
        console.log("Quant. de paises " + qtdCountries);
          atribuirDados2(dados, i)
        // passe o valor de i no parametro
    })
  }
 // fim pegarDados
// atribuir dados individualmente, ou seja, so para uma carta
// ela so funciona se for chamada dentro da funcao pegarDados
function atribuirDados(dados, i) {
  imgCountry.setAttribute('src', dados[i].flags.svg)
  titleCountry.textContent   =    dados[i].name
  npopulation.textContent     =    dados[i].population
  region.textContent         =    dados[i].region
  capital.textContent        =    dados[i].capital
}

// SELECIONAR TODOS OS CARDS por class
let imgsCountry            = document.getElementsByClassName('imgCountry')
let titlesCountry          = document.getElementsByClassName('titleCountries')
let npopulations            = document.getElementsByClassName('population')
let regions                = document.getElementsByClassName('region')
let capitals               = document.getElementsByClassName('capital')

// ATRIBUIR DADOS PARA TODOS OS CARDs
// Selecionamos eles por class, com isso temos um array para cada elemento
// agora vamos atribuir para cada posicao os valores que pegamos
function atribuirDados2(dados, i) {
    imgsCountry[i].setAttribute('src', dados[i].flags.svg)
    titlesCountry[i].textContent         = dados[i].name
    npopulations[i].textContent           = dados[i].population
    regions[i].textContent               = dados[i].region
    capitals[i].textContent              = dados[i].capital
}

// usamos as funcoes createElement e appendChild
// para criar article (elemento html que vai acomodar cada carta)
// criamos tambem img, h2 e h3. Depois colocamos eles dentro do article
function desenharCarta(id) {
    // CARD
    let card = document.createElement("article")
    card.setAttribute('class', 'card')
    sectionCountries.appendChild(card)

    // IMG CARD
    let imagem = document.createElement("img")
    card.appendChild(imagem)
    imagem.setAttribute('class', 'imgCountry')

    // NAME COUNTRY
    let titleCountry = document.createElement("p")
    titleCountry.setAttribute('class', 'titleCountries')
    card.appendChild(titleCountry)

    // POPULATION TITLE
    let population = document.createElement("span")
    population.setAttribute('class', 'infos')
    card.appendChild(population)
    population.textContent = "Population: "     

    // NUMBER POPULATION
    let npopulation = document.createElement("span")
    npopulation.setAttribute('class', 'population')
    card.appendChild(npopulation)

    // br
    let br = document.createElement("br")
    card.appendChild(br)
    
    // REGION TITLE
    let regiont = document.createElement("span")
    regiont.setAttribute('class', 'infos')
    card.appendChild(regiont)
    regiont.textContent = "Region: " 

    // REGION
    let region = document.createElement("span")
    region.setAttribute('class', 'region')
    card.appendChild(region)
    
    //BR
    let brr = document.createElement("br")
    card.appendChild(brr)

    // CAPITAL TITLE
    let capitalC = document.createElement("span")
    capitalC.setAttribute('class', 'infos')
    card.appendChild(capitalC)
    capitalC.textContent = "Capital: " 

    // CAPITAL
    let capital = document.createElement("span")
    capital.setAttribute('class', 'capital')
    card.appendChild(capital)

    pegarDados(id)
}

// 1a carta pegamos os dados. Ela ja esta desenhada na tela
pegarDados(0)

// 2a carta em diante desenhamos em tela usando as funcoes
//desenharCarta(0)
for(let p = 0; p <= 249; p++){
  desenharCarta(p);
}
