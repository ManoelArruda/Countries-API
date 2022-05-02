function filter(){
  const select = document.getElementById("localization").value;
  const card = document.querySelectorAll(".card");
 
  card.forEach((item) => {
    if(select === "all"){
      item.style.display = "block";
      return;
    }
    var region = item.querySelector(".region").textContent;

    item.style.display = region === select ? "block" : "none";
      
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
