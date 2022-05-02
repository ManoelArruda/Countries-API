function filter(){
  const select = document.getElementById("localization").value;
  const card = document.querySelectorAll(".card");
  const region = document.querySelectorAll(".region");
  card.forEach((item,index) => {
    
    if(region[index].textContent === select){
      item.style.display = "block";
    }else if(region[index].textContent !== select){
      item.style.display = "none"
    }else{
      item.style.display = "block"; 
    }
  })

  /* for(let i = 0; i < card.length; i++){
    if(region[i].textContent === select){
      card[i].style.display = "block"
    }else if(region[i].textContent !== select){
      card[i].style.display = "none"
    }else if(card[i].style.display = "none"){
      card[i].style.display = "block"
    }
  } */
}