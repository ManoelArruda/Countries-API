const sectionResult = document.getElementById("result");

function buscarPais(link){
  fetch(link)
  .then( response => response.json() )
  .then( response => {
      if(response.erro) {
          console.log("Erro ao acessar o JSON")
          return
      }
    console.log(response[0])
    
    response.forEach((item) => {
      console.log(item.name)
    let teste = document.createElement('div')
    sectionResult.appendChild(teste)
    teste.innerText = item.name
    });
    
  })
}

/* 
var card = document.getElementById('containerCountries');
  var urlCountry = 'https://restcountries.com/v2/name/';
  var link;
  card.addEventListener('click', getLink)

  function getLink(e){
    link = urlCountry + e.target.id
  
    

    linkreal = fetch(link)
    .then( response => response.json() )
    .then( response => {
        if(response.erro) {
            console.log("Erro ao acessar o JSON")
            return
        }
        return response
         //console.log(response[0])
       // console.log(response[0].name) 
    })
    linkreal.then((linkreal) =>{
      console.log(linkreal[0])
    })
  } */
/*   var card = document.getElementById('containerCountries');
  var urlCountry = 'https://restcountries.com/v2/name/brazil';
  var link = fetch(urlCountry).then(response => response.json()).then( response => {
    if(response.erro) {
        console.log("Erro ao acessar o JSON")
        return
    }
    return response
  });

  link.then((response) => {
    console.log(response)
  }) */



  /* var card = document.getElementById('containerCountries');
  var urlCountry = 'https://restcountries.com/v2/name/';
  var link;
  card.addEventListener('click', getLink)
  console.log(link)
  function getLink(e){
    link = urlCountry + e.target.id
  
    console.log(link)

    return fetch(link)
    .then( response => response.json() )
    .then( response => {
        if(response.erro) {
            console.log("Erro ao acessar o JSON")
            return
        }
        return response
         //console.log(response[0])
       // console.log(response[0].name) 
    })
  } */