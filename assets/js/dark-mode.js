function darkMode() {
  var h2 = document.getElementById('titlePage');
  var header = document.getElementById('header');
  var right = document.getElementById('right');
  var actions = document.getElementById('actions');
  var select = document.getElementById('localization');
  var countries = document.getElementById('countries');
  var card = document.getElementsByClassName('.card');
  var infos = document.getElementsByClassName('.infos');
  var population = document.getElementsByClassName(".population");
  var region = document.getElementsByClassName(".region");
  var capital = document.getElementsByClassName(".capital");
  var titleCountries = document.getElementsByClassName(".titleCountries");

  h2.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");
  right.classList.toggle("dark-mode");
  actions.classList.toggle("dark-mode");
  search.classList.toggle("dark-mode");
  select.classList.toggle("dark-mode");
  countries.classList.toggle("dark-mode");
  card.classList.toggle("dark-mode");
  infos.classList.toggle("dark-mode");
  population.classList.toggle("dark-mode");
  region.classList.toggle("dark-mode");
  capital.classList.toggle("dark-mode");
  titleCountries.classList.toggle("dark-mode");
}