// Inicializar animaciones
AOS.init();

// Manejar envío del formulario
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita recarga de página
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validación básica
  if (!name || !email || !message) {
    showResponse('Por favor, llena todos los campos.', 'error');
    return;
  }

  // Enviar a backend (demo con httpbin.org)
  try {
    const response = await fetch('https://httpbin.org/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });

    if (response.ok) {  // Si la respuesta es exitosa (código 200)
      // Limpiar campos en éxito
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      showResponse('¡Mensaje enviado! (Demo)', 'success');  // Mensaje personalizado para demo
    } else {
      showResponse('Error en demo. Intenta de nuevo.', 'error');
    }
  } catch (error) {
    showResponse('Error enviando. Intenta de nuevo.', 'error');
  }
});  // <-- Esta llave cierra el addEventListener

// Función para mostrar respuesta con estilos
function showResponse(message, type) {
  const responseDiv = document.getElementById('response');
  responseDiv.innerText = message;
  responseDiv.className = 'mt-4 text-center font-semibold transition-opacity duration-500 opacity-0'; // Reset clases
  if (type === 'success') {
    responseDiv.classList.add('text-green-600', 'p-2'); // Solo texto verde
  } else {
    responseDiv.classList.add('text-red-600', 'p-2'); // Solo texto rojo
  }
  // Animación fade-in
  setTimeout(() => responseDiv.classList.add('opacity-100'), 100);
  // Desaparecer después de 15 segundos con fade-out
  setTimeout(() => responseDiv.classList.remove('opacity-100'), 10000);
}
