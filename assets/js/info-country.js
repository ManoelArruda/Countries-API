const urlCountry = 'https://restcountries.com/v2/name/';

function buscarPais(link){
  fetch(link)
  .then( response => response.json() )
  .then( response => {
      if(response.erro) {
          console.log("Erro ao acessar o JSON")
          return
      }
    console.log(response)
    const country = response[0];
    const sectionInfCountry = document.getElementById("containerCountry");

    //CREATING ELEMENTS ON PAGE

    // IMG
    const img = document.createElement("img")
    img.setAttribute('src', country.flags.svg)
    img.setAttribute('class', 'imgcountry')
    sectionInfCountry.appendChild(img)

    //ARTICLE
    const article = document.createElement("article")
    article.setAttribute('class', 'article')
    sectionInfCountry.appendChild(article)

    //DIV TOP ARTICLE
    const divTop = document.createElement("div")
    divTop.setAttribute('class', 'divTop')
    article.appendChild(divTop)

    //DIV BOTTOM ARTICLE
    const divBottom = document.createElement("div")
    divBottom.setAttribute('class', 'divBottom')
    article.appendChild(divBottom)

    //DIV LEFT
    const divLeft = document.createElement("div")
    divLeft.setAttribute('class',  'divLeft')
    divTop.appendChild(divLeft)

    //TITLE COUNTRY
    const titleCountry = document.createElement("h1")
    titleCountry.setAttribute('class', 'titleCountry')
    divLeft.appendChild(titleCountry)
    titleCountry.textContent = country.name;

    //DIV NATIVE NAME
    const divNativeName = document.createElement("div")
    divNativeName.setAttribute('class', 'divItems')
    divLeft.appendChild(divNativeName)
    
    //NATIVE NAME
    const nativeName = document.createElement("p")
    nativeName.setAttribute('class', 'subtitle')
    divNativeName.appendChild(nativeName)
    nativeName.innerText = "Native Name: " 
    
    //INF NATIVE NAME
    const infNativeName = document.createElement("span")
    infNativeName.textContent = country.nativeName
    divNativeName.appendChild(infNativeName)

    //DIV POPULATION
    const divPopulation = document.createElement("div")
    divPopulation.setAttribute('class', 'divItems')
    divLeft.appendChild(divPopulation)
    
    //POPULATION
    const population = document.createElement("p")
    population.setAttribute('class', 'subtitle')
    divPopulation.appendChild(population)
    population.innerText = "Population: "

    //INF POPULATION
    const infPopulation = document.createElement("span")
    infPopulation.textContent = country.population
    divPopulation.appendChild(infPopulation)

    //DIV REGION
    const divRegion = document.createElement("div")
    divRegion.setAttribute('class', 'divItems')
    divLeft.appendChild(divRegion)

    //REGION
    const region = document.createElement("p")
    region.setAttribute('class', 'subtitle')
    divRegion.appendChild(region)
    region.innerText = "Region: " 

    //INF REGION
    const infRegion = document.createElement("span")
    infRegion.textContent = country.region
    divRegion.appendChild(infRegion)

    //DIV SUB REGION
    const divSubRegion = document.createElement("div")
    divSubRegion.setAttribute('class', 'divItems')
    divLeft.appendChild(divSubRegion)

    //SUB REGION
    const subRegion = document.createElement("p")
    subRegion.setAttribute('class', 'subtitle')
    divSubRegion.appendChild(subRegion)
    subRegion.innerText = "Sub Region: "

    //INF SUB REGION
    const infSubRegion = document.createElement("span")
    infSubRegion.textContent = country.subregion
    divSubRegion.appendChild(infSubRegion)

    //DIV CAPITAL
    const divCapital = document.createElement("div")
    divCapital.setAttribute('class', 'divItems')
    divLeft.appendChild(divCapital)

    //CAPITAL
    const capital = document.createElement("p")
    capital.setAttribute('class', 'subtitle')
    divCapital.appendChild(capital)
    capital.innerText = "Capital: "
    
    //INF CAPITAL
    const infCapital = document.createElement("span")
    infCapital.textContent = country.capital
    divCapital.appendChild(infCapital)

    //DIV RIGHT
    const divRight = document.createElement("div")
    divRight.setAttribute('class',  'divRight')
    divTop.appendChild(divRight)

    //DIV TOP LEVEL DOMAIN
    const divTopLevel = document.createElement("div")
    divTopLevel.setAttribute('class', 'divItems')
    divRight.appendChild(divTopLevel)

    //TOP LEVEL DOMAIN
    const topLevel = document.createElement("p")
    topLevel.setAttribute('class', 'subtitle')
    divTopLevel.appendChild(topLevel)
    topLevel.innerText = "Top Level Domain: "   

    //INF TOP LEVEL DOMAIN
    const infTopLevel = document.createElement("span")
    infTopLevel.textContent = country.topLevelDomain[0]
    divTopLevel.appendChild(infTopLevel)

    //DIV CURRENCIE
    const divCurrencie = document.createElement("div")
    divCurrencie.setAttribute('class', 'divItems')
    divRight.appendChild(divCurrencie)

    //CURRENCIE
    const currencie = document.createElement("p")
    currencie.setAttribute('class', 'subtitle')
    divCurrencie.appendChild(currencie)
    currencie.innerText = "Currencies: " 
    
    //INF CURRENCIE
    const infCurrencie = document.createElement("span")
    infCurrencie.textContent = country.currencies[0].name
    divCurrencie.appendChild(infCurrencie)

    //DIV LANGUAGES
    const divLanguages = document.createElement("div")
    divLanguages.setAttribute('class', 'divItems')
    divRight.appendChild(divLanguages)

    //LANGUAGES
    const languages = document.createElement("p")
    languages.setAttribute('class', 'subtitle')
    divLanguages.appendChild(languages)
    languages.innerText = "Languages: "

    //INF LANGUAGES
    const infLanguages = document.createElement("span")
    infLanguages.textContent = country.languages.map((item) =>{
      return " " + item.name 
    })   
    divLanguages.appendChild(infLanguages)

    //DIV AREA
    const divArea = document.createElement("div")
    divArea.setAttribute('class', 'divItems')
    divRight.appendChild(divArea)

    //AREA
    const area = document.createElement("p")
    area.setAttribute('class', 'subtitle')
    divArea.appendChild(area)
    area.innerText = "Area: " 

    //INF AREA
    const infArea = document.createElement("span")
    infArea.textContent = country.area
    divArea.appendChild(infArea)
    

    //BORDER COUNTRIES
    const boderCountries = document.createElement("p")
    boderCountries.setAttribute('class', 'titleBorderCountries')
    divBottom.appendChild(boderCountries)
    boderCountries.innerText = "Border Countries:"

    //DIV BORDERS
    const divBorders = document.createElement("div")
    divBorders.setAttribute('class', 'divBorders')
    divBottom.appendChild(divBorders)

    const borders1 = document.createElement("p")
    borders1.setAttribute('class', 'bordersCountry')
    divBorders.appendChild(borders1)
    if(country.borders[0]){
      borders1.textContent = country.borders.slice(0,1)
    }else{
      borders1.style.display = 'none';
    }
    
    const borders2 = document.createElement("p")
    borders2.setAttribute('class', 'bordersCountry')
    divBorders.appendChild(borders2)
    if(country.borders[1]){
      borders2.textContent = country.borders.slice(1,2)
    }else{
      borders2.style.display = 'none';
    }

    const borders3 = document.createElement("p")
    borders3.setAttribute('class', 'bordersCountry')
    divBorders.appendChild(borders3)
    if(country.borders[2]){
      borders3.textContent = country.borders.slice(2,3)
    }else{
      borders3.style.display = 'none';
    }

    const borders4 = document.createElement("p")
    borders4.setAttribute('class', 'bordersCountry')
    divBorders.appendChild(borders4)
    if(country.borders[3]){
      borders4.textContent = country.borders.slice(3,4)
    }else{
      borders4.style.display = 'none';
    }

    const borders5 = document.createElement("p")
    borders5.setAttribute('class', 'bordersCountry')
    divBorders.appendChild(borders5)
    if(country.borders[4]){
      borders5.textContent = country.borders.slice(4,5)
    }else{
      borders5.style.display = 'none';
    }

    const borders6 = document.createElement("p")
    borders6.setAttribute('class', 'bordersCountry')
    divBorders.appendChild(borders6)
    if(country.borders[5]){
      borders6.textContent = country.borders.slice(5,6)
    }else{
      borders6.style.display = 'none';
    }

  })
}
function onload(){
  
  const search = new URLSearchParams(window.location.search);
  if(search.has('name')){
    const searchName = search.get('name')
    buscarPais(urlCountry+searchName)
  }
}
document.addEventListener('DOMContentLoaded', onload);
