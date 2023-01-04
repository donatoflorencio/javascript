let btn = document.querySelector(".menu-burguer")
let menu = document.getElementById("menu")
let menushow = false;



btn.addEventListener("click", function () {
  menushow = !menushow

  if(menushow) {
    menu.style.left = "-1000px"

    menu.style.animationName = "menushow"

  }else {
    menu.style.left = "0px"

    menu.style.animationName = ""
  }
})