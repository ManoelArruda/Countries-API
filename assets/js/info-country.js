const sectionResult = document.getElementById("result");
var urlCountry = 'https://restcountries.com/v2/name/';

function buscarPais(link){
  fetch(link)
  .then( response => response.json() )
  .then( response => {
      if(response.erro) {
          console.log("Erro ao acessar o JSON")
          return
      }
    console.log(response)
    const pais = response[0];
    const infCountries = document.getElementById("infCountries");

    const img = document.createElement("img")
    img.setAttribute('src', pais.flags.svg)
    infCountries.appendChild(img)
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
