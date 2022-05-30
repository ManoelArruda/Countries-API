function darkMode() {
  const body = document.getElementById('body');
  body.classList.toggle('dark-mode'); 
}

const body = document.getElementById('body')

if(localStorage.getItem('darkMode') === null){
  localStorage.setItem('darkMode', 'white')
}

addEventListener('click', changeBG)

function changeBG(event){
  const btnDM = document.getElementById('btn-dark-mode').id
  const ideventclick = event.path[0].id
  const body = document.getElementById('body')

  if(ideventclick === btnDM){
    console.log('clicou no botao') 
    localStorage.setItem('darkMode', body.classList.value)
  }


}
body.classList.value = localStorage.darkMode
