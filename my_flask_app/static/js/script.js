function changeBackgroundColor(event) {
    // Mouse'un X ve Y konumunu al
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // Ekran genişliği ve yüksekliğini al
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    // Mouse'un konumunu kullanarak arka plan rengini hesapla
    var red = Math.round((mouseX / screenWidth) * 255);
    var green = Math.round((mouseY / screenHeight) * 255);
    var blue = Math.round(((mouseX + mouseY) / (screenWidth + screenHeight)) * 255);

    // Arka plan rengini ayarla
    document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}
