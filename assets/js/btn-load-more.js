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
    link.setAttribute('class', 'linkCard')
    link.setAttribute('href', `info-country.html?name=${country.name}`)
    sectionCountries.appendChild(link)

    // CARD
    let card = document.createElement("article")
    card.setAttribute('class', 'card')
    link.appendChild(card)

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
    population.textContent = "Population: "  
   
    let npopulation = document.createElement("span")
    npopulation.setAttribute('class', 'npopulation')
    population.appendChild(npopulation)
    npopulation.textContent = country.population;    

    // REGION TITLE
    let region = document.createElement("p")
    region.setAttribute('class', 'infos')
    region.classList.add("region")
    card.appendChild(region)
    region.textContent = "Region: " + country.region;

    // CAPITAL TITLE
    let capital = document.createElement("p")
    capital.setAttribute('class', 'infos')
    card.appendChild(capital)
    capital.textContent = "Capital: " + country.capital;
}

function loadMore(){
  let getlastindice=lastindice;
  for(let i = getlastindice+1; i < getlastindice+13; i++){
    let country = totalCountries[i];
    designCard(country);
    lastindice=i;
  }
}
let totalCountries, lastindice;
getCountry()
  .then((countries) => {
    totalCountries=countries;
    for(let i = 0; i < 12; i++){
      let country = totalCountries[i];
      designCard(country);
      lastindice=i;
    }
  })
