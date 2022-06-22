function filter(){
  const select = document.getElementById("localization").value;
  const card = document.querySelectorAll(".linkCard");
 
  card.forEach((item) => {
    if(select === "all"){
      item.style.display = "block";
      return;
    }
    const region = item.querySelector(".region").textContent;

    let totalCountries, lastindice;
    getCountry()
      .then((countries) => {
        totalCountries=countries;
        if(region === select){
          for(let i = 12; i < 24; i++){
            let country = totalCountries[i];
            designCard(country);
            
          }
        }
        
      })
      
  })
}




    // CÓDIGO FUNCIONAL

      /* function filter(){
        const select = document.getElementById("localization").value;
        const card = document.querySelectorAll(".linkCard");
       
        card.forEach((item) => {
          if(select === "all"){
            item.style.display = "block";
            return;
          }
          const region = item.querySelector(".region").textContent;
      
          item.style.display = region === select ? "block" : "none";
            
        })
      } */