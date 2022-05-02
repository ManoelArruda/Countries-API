// section que acomoda todos os CARDS
let sectionCountries = document.querySelector('.countries');

// ENDERECO DO ARQUIVO JSON
const url = 'https://restcountries.com/v2/all';
  
function getCountry(i){
 return fetch(url)
    .then( response => response.json() )
    .then( response => {
        if(response.erro) {
            console.log("Erro ao acessar o JSON")
            return
        }
        return response
    })
}

function designCard(country) {
    // CARD
    var card = document.createElement("article")
    card.setAttribute('class', 'card')
    sectionCountries.appendChild(card)

    // IMG CARD
    let imagem = document.createElement("img")
    card.appendChild(imagem)
    imagem.setAttribute('class', 'imgCountry')
    imagem.setAttribute('src', country.flags.svg)

    // NAME COUNTRY
    let titleCountry = document.createElement("p")
    titleCountry.setAttribute('class', 'titleCountries')
    card.appendChild(titleCountry)
    titleCountry.textContent = country.name;

    // POPULATION TITLE
    let population = document.createElement("p")
    population.setAttribute('class', 'infos')
    card.appendChild(population)
    population.textContent = "Population: " + country.population;    

    // REGION TITLE
    var region = document.createElement("p")
    region.setAttribute('class', 'infos')
    region.setAttribute('class', 'region')
    card.appendChild(region)
    region.textContent = "Region: " + country.region;

    // CAPITAL TITLE
    let capital = document.createElement("p")
    capital.setAttribute('class', 'infos')
    card.appendChild(capital)
    capital.textContent = "Capital: " + country.capital;
}

function loadMore(){
  var getlastindice=lastindice;
  for(var i = getlastindice+1; i < getlastindice+9; i++){
    var country = totalCountries[i];
    designCard(country);
    lastindice=i;
  }
}
// 1a carta pegamos os dados. Ela ja esta desenhada na tela
var totalCountries, lastindice;
getCountry()
  .then((countries) => {
    totalCountries=countries;
    for(var i = 0; i < 8; i++){
      var country = totalCountries[i];
      designCard(country);
      lastindice=i;
    }
  })