const inputsearch = document.getElementById("inputsearch");
inputsearch.addEventListener('keyup', filterCountry);
const btnLoadMore = document.querySelector('.btnloadmore')



function filterCountry(){
  const card = document.querySelectorAll(".linkCard");  

  card.forEach((item) => {
  
    item.style.display = "none";
  
    const userCountry = document.getElementById("inputsearch").value;
    const titleCountries = item.querySelector('.titleCountries').textContent;

    if ((titleCountries.toUpperCase().includes(userCountry.toUpperCase()))) {
        item.style.display = "block";
        return;
      }else if((userCountry === "") || (userCountry === " ")){
        item.style.display = "block";
      }
      
  })
}
