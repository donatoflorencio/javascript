let nav = document.getElementById('nav')
let btn = document.getElementById('btn-menu')
let showSidebar = false; /*keyfreme*/

function Sidebar() {
  showSidebar = !showSidebar;

  if(showSidebar) {
    nav.style.left = "0vw"
    nav.style.animationName = "showSidebar"
  } else {
    nav.style.left = "-100vw"
  }
}

