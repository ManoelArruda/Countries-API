function filterCountry(){
  const titleCountries = document.querySelectorAll('.titleCountries');
  
  titleCountries.forEach((item) => {
    console.log(item.textContent);
  })
}