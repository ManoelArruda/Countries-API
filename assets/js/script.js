fetch('https://restcountries.com/v2/all').then(response => response.json())
.then(data => {
  console.log(data);
  /* alemanha */
  document.getElementById("pgermany").innerHTML = data[84].population;
  document.getElementById("rgermany").innerHTML = data[84].region;
  document.getElementById("cgermany").innerHTML = data[84].capital;
  
  /* usa */
  document.getElementById("pusa").innerHTML = data[239].population;
  document.getElementById("rusa").innerHTML = data[239].region;
  document.getElementById("cusa").innerHTML = data[239].capital;
  
});
