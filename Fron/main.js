// --- MODAL LOGIN ---
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');
const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn'); // (solo si lo tienes en el HTML)
const reservaForm = document.getElementById('reservaForm');
const reservaSection = document.getElementById('reserva');
const abrirReservaBtn = document.getElementById('abrirReserva');

// Bandera: ¿el usuario intentó reservar sin estar logueado?
let quisoReservar = false;

// Mostrar modal login
loginBtn.addEventListener('click', () => {
  loginModal.classList.remove('oculto');
});

// Cerrar modal
closeBtn.addEventListener('click', () => {
  loginModal.classList.add('oculto');
});

// Cerrar modal al hacer clic fuera
window.addEventListener('click', (e) => {
  if (e.target === loginModal) loginModal.classList.add('oculto');
});

// Login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const usuario = document.getElementById('usuario').value;
  const password = document.getElementById('password').value;

  const usuarioValido = "admin";
  const passwordValido = "1234";

  if (usuario === usuarioValido && password === passwordValido) {
    alert("✅ Bienvenido, " + usuario + "!");
    localStorage.setItem('usuarioLogueado', usuario);
    loginModal.classList.add('oculto');
    loginForm.reset();

    mostrarSeccionReserva();

    // Si venía del intento de reservar, lo llevamos directo
    if (quisoReservar) {
      quisoReservar = false;
      window.scrollTo({ top: reservaSection.offsetTop - 60, behavior: 'smooth' });
    }

    // Opcional si tienes logoutBtn en HTML
    if (logoutBtn) {
      logoutBtn.classList.remove('oculto');
      loginBtn.classList.add('oculto');
    }
  } else {
    alert("❌ Usuario o contraseña incorrectos");
  }
});

// Mostrar sección de reservas si está logueado
function mostrarSeccionReserva() {
  const usuario = localStorage.getItem('usuarioLogueado');
  if (usuario && reservaSection) {
    reservaSection.classList.remove('oculto');
  }
}

// Verificar login al cargar
window.addEventListener('DOMContentLoaded', () => {
  const usuario = localStorage.getItem('usuarioLogueado');
  if (usuario) {
    mostrarSeccionReserva();
    if (logoutBtn) {
      logoutBtn.classList.remove('oculto');
      loginBtn.classList.add('oculto');
    }
  }
});

// Logout
logoutBtn?.addEventListener('click', () => {
  localStorage.removeItem('usuarioLogueado');
  alert("Has cerrado sesión");
  location.reload();
});

// --- BOTÓN "Reservar cita" ---
abrirReservaBtn?.addEventListener('click', () => {
  const usuario = localStorage.getItem('usuarioLogueado');
  if (usuario) {
    reservaSection.classList.remove('oculto');
    window.scrollTo({ top: reservaSection.offsetTop - 60, behavior: 'smooth' });
  } else {
    alert("⚠️ Debes iniciar sesión para hacer una reserva.");
    quisoReservar = true; // Marcamos que intentó reservar
    loginModal.classList.remove('oculto');
  }
});

// --- FORMULARIO DE RESERVA ---
reservaForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const usuario = localStorage.getItem('usuarioLogueado');
  if (!usuario) {
    alert("⚠️ Inicia sesión para reservar.");
    loginModal.classList.remove('oculto');
    quisoReservar = true;
    return;
  }

  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;

  alert(`✅ Reserva confirmada para ${usuario} el ${fecha} a las ${hora}`);
  reservaForm.reset();
});
