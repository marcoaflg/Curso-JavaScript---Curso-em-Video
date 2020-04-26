function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = './img/foto-manha.png'
        document.body.style.background = '#fde782'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = './img/foto-tarde.png'
        document.body.style.background = '#945c50'
    } else {
        // BOA NOITE!
        img.src = './img/foto-noite.png'
        document.body.style.background = '#091722'
    }
}