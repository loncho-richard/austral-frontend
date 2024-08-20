// script.js

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simular el envío del correo
    if (name && email && message) {
        document.getElementById("responseMessage").innerText = "¡Gracias por contactarnos, " + name + "! Hemos recibido tu mensaje.";
    } else {
        document.getElementById("responseMessage").innerText = "Por favor, completa todos los campos.";
    }

    // Limpia el formulario
    document.getElementById("contactForm").reset();
});
