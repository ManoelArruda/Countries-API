// section que acomoda todos os CARDS
let sectionCountries = document.querySelector('.containerCountries');

// ENDERECO DO ARQUIVO JSON
const url = 'https://restcountries.com/v2/all';
  
function getCountry(){
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

    let link = document.createElement("a")
    link.setAttribute('id', country.name)
   // link.setAttribute('href', 'info-country.html')
    sectionCountries.appendChild(link)

    // CARD
    let card = document.createElement("article")
    card.setAttribute('class', 'card')
    card.setAttribute('id', country.name)
    link.appendChild(card)

    // IMG CARD
    let imagem = document.createElement("img")
    card.appendChild(imagem)
    imagem.setAttribute('class', 'imgCountry')
    imagem.setAttribute('src', country.flags.svg)
    imagem.setAttribute('id', country.name)


    // NAME COUNTRY
    let titleCountry = document.createElement("p")
    titleCountry.setAttribute('class', 'titleCountries')
    titleCountry.setAttribute('id', country.name)
    card.appendChild(titleCountry)
    titleCountry.textContent = country.name;

    // POPULATION TITLE
    let population = document.createElement("p")
    population.setAttribute('class', 'infos')
    population.setAttribute('id', country.name)
    card.appendChild(population)
    population.textContent = "Population: " + country.population;    

    // REGION TITLE
    var region = document.createElement("p")
    region.setAttribute('class', 'infos')
    region.setAttribute('id', country.name)
    region.classList.add("region")
    card.appendChild(region)
    region.textContent = "Region: " + country.region;

    // CAPITAL TITLE
    let capital = document.createElement("p")
    capital.setAttribute('class', 'infos')
    capital.setAttribute('id', country.name)
    card.appendChild(capital)
    capital.textContent = "Capital: " + country.capital;
}

function loadMore(){
  var getlastindice=lastindice;
  for(var i = getlastindice+1; i < getlastindice+13; i++){
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
    for(var i = 0; i < 12; i++){
      var country = totalCountries[i];
      designCard(country);
      lastindice=i;
    }
  })
/*/////////////////////////////////////////////////////////////////////////////*/

  var card = document.getElementById('containerCountries');
  var urlCountry = 'https://restcountries.com/v2/name/';
var country;
  card.addEventListener('click', getLink)

  function getLink(e){
    country = e.target.id
console.log(urlCountry+ country)
buscarPais( urlCountry+country );

  }