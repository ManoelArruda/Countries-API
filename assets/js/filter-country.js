const inputsearch = document.getElementById("inputsearch");
inputsearch.addEventListener('keyup', filterCountry);

function filterCountry(){
  const card = document.querySelectorAll(".card");  

  card.forEach((item) => {
  
    item.style.display = "none";
  
    const userCountry = document.getElementById("inputsearch").value;
    const titleCountries = item.querySelector('.titleCountries').textContent;

    if((userCountry === titleCountries.toUpperCase()) || 
     (userCountry === titleCountries.toLowerCase()) ||
     (userCountry === titleCountries)){
        item.style.display = "block";
        return;
      }else if((userCountry === "") || (userCountry === " ")){
        item.style.display = "block";
        return;
      }
      /* item.style.display = (titleCountries === userCountry) 
      ||(userCountry === titleCountries.toLowerCase()) 
      || (userCountry === titleCountries.toUpperCase()) ? "block" : "none"; */
      
  })
}