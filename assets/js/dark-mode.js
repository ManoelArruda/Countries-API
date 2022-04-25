function darkMode() {
  var h2 = document.getElementById('titlePage');
  var header = document.getElementById('header');
  var right = document.getElementById('right');
  var actions = document.getElementById('actions');
  var select = document.getElementById('localization');
  var countries = document.getElementById('countries');
  var header = document.getElementById('header');
  var header = document.getElementById('header');

  h2.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");
  right.classList.toggle("dark-mode");
  actions.classList.toggle("dark-mode");
  search.classList.toggle("dark-mode");
  select.classList.toggle("dark-mode");
  countries.classList.toggle("dark-mode");

}