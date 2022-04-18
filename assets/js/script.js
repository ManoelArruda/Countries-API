const url = fetch('https://restcountries.com/v2/all');

url.then((response) => response.json())
.then((body) => {
  console.log(body);
  const titleCountries = document.querySelectorAll('.titleCountries');
    
    body.forEach((ex) => {
      
      titleCountries.forEach((e) => {
        const nameCountries = e.textContent;
        
          if(ex.name === nameCountries){
            console.log(nameCountries, ex.population);
            document.getElementById("population").innerHTML = ex.population;
          }
    })   
  })  
})
  /*alemanha 
  document.getElementById("pgermany").innerHTML = data[84].population;
  document.getElementById("rgermany").innerHTML = data[84].region;
  document.getElementById("cgermany").innerHTML = data[84].capital;
  
  usa
  document.getElementById("pusa").innerHTML = data[239].population;
  document.getElementById("rusa").innerHTML = data[239].region;
  document.getElementById("cusa").innerHTML = data[239].capital;
*/