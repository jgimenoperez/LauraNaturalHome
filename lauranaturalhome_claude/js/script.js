// ============================================================
// Laura's Natural Home - Script Principal
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
  initMenuToggle();
  initNavigation();
  initForms();
  initSmoothScroll();
});

// ============================================================
// MENÚ MÓVIL
// ============================================================

function initMenuToggle() {
  const toggleBtn = document.querySelector('.toggle-menu');
  const navMenu = document.querySelector('.nav-menu');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
      });
    });
  }
}

// ============================================================
// NAVEGACIÓN ACTIVA
// ============================================================

function initNavigation() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-menu a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ============================================================
// DESPLAZAMIENTO SUAVE
// ============================================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ============================================================
// FORMULARIOS
// ============================================================

function initForms() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
  });
}

function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // Validación básica
  if (!validateForm(data)) {
    alert('Por favor, completa todos los campos requeridos.');
    return;
  }

  // Simulación de envío (en producción, enviar a servidor)
  console.log('Datos del formulario:', data);

  showSuccessMessage(form);
  form.reset();
}

function validateForm(data) {
  const requiredFields = ['nombre', 'email'];

  for (let field of requiredFields) {
    if (!data[field] || data[field].trim() === '') {
      return false;
    }
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return false;
  }

  return true;
}

function showSuccessMessage(form) {
  const message = document.createElement('div');
  message.className = 'success-message';
  message.textContent = '✓ Mensaje enviado correctamente. Nos pondremos en contacto pronto.';
  message.style.cssText = `
    background-color: #6B8E71;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    animation: slideIn 0.3s ease;
  `;

  form.insertAdjacentElement('beforebegin', message);

  setTimeout(() => {
    message.remove();
  }, 5000);
}

// ============================================================
// NEWSLETTER
// ============================================================

function subscribeNewsletter(email) {
  if (!email || !email.includes('@')) {
    alert('Por favor, ingresa un email válido.');
    return;
  }

  console.log('Suscripción newsletter:', email);
  alert('¡Gracias por suscribirse! Recibirás nuestras novedades pronto.');
}

// ============================================================
// UTILIDADES
// ============================================================

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Animación fade-in para elementos
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.card, .portfolio-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Ejecutar observador cuando DOM esté listo
if ('IntersectionObserver' in window) {
  observeElements();
}
