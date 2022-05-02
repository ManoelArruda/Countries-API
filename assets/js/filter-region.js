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
}
