const emailButton = document.getElementById('emailButton');

emailButton.addEventListener('click', function() {
    const destinatario = "manuel.molina.ramirez1991@gmail.com";

    window.location.href = "mailto:" + destinatario;
})