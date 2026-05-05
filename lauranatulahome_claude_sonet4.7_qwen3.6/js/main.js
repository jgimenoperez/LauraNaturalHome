// Mobile nav toggle
document.querySelectorAll('.nav-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const navList = btn.nextElementSibling?.nextElementSibling?.querySelector('.nav-list') || btn.parentElement.querySelector('.nav-list');
    if (navList) {
      navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
      btn.setAttribute('aria-expanded', btn.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
    }
  });
});

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-list a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Portfolio filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    const filter = btn.getAttribute('data-filter');
    portfolioItems.forEach(item => {
      const categories = item.getAttribute('data-category').split(' ');
      if (filter === 'all' || categories.includes(filter)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Form handling
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    const email = form.querySelector('input[type="email"]');
    if (email && !email.value.includes('@')) {
      e.preventDefault();
      alert('Por favor, introduce un email válido');
      return;
    }

    if (form.getAttribute('data-form') === 'newsletter') {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      input.value = '';
      alert('¡Gracias por suscribirte!');
    }
  });
});

// FAQ toggle
document.querySelectorAll('[data-toggle]').forEach(heading => {
  heading.addEventListener('click', () => {
    const targetId = heading.getAttribute('data-toggle');
    const target = document.getElementById(targetId);
    if (target) {
      const isOpen = target.style.display !== 'none';
      target.style.display = isOpen ? 'none' : 'block';
      heading.style.color = isOpen ? '' : 'var(--primary)';
    }
  });
});

// Auto-update year
document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});
