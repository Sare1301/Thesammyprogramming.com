document.getElementById('budgetForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    const subject = `Solicitud de Presupuesto - ${service}`;
    const body = `Nombre: ${name}\nCorreo: ${email}\nServicio: ${service}\nDescripción del Proyecto: ${message}`;

    window.location.href = `mailto:tuemail@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
