function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora =  //data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if(hora >= 0 && hora < 12) {
    //Bom Dia!
    img.src = 'imagens/web-manha.png'
    document.body.style.background = '#285781'
  } else if (hora >= 12 && hora <= 18) {
    //Boa Tarde!
    img.src = 'imagens/web-tarde.png'
    document.body.style.background = '#fe7d00'
  } else {
    //Boa Noite!
    img.src = 'imagens/web-noite.png'
    document.body.style.background = '#556b79'
  }
} 