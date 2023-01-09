function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  let hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`

  if (hora >= 0 && hora < 12) {
    img.src = 'manha.png'
    document.body.style.background =  '#FD895A'
  } 


  else if (hora >= 12 && hora < 18) {
    img.src = 'tarde.png'
    document.body.style.background =  '#BD3101'
  } 
  
  
  else {
    img.src = 'noite.png'
    document.body.style.background =  '#3a3b40'
  }
}

