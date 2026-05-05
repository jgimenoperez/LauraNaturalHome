(() => {
  'use strict';

  /* -- Mobile nav toggle ------------------------------------------------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const open = navList.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', open);
    });

    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('is-open');
        navToggle.classList.remove('is-open');
      });
    });
  }

  /* -- Active nav link --------------------------------------------------- */
  const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-list a').forEach(link => {
    const href = link.getAttribute('href').toLowerCase();
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('is-active');
    }
  });

  /* -- Scroll reveal ----------------------------------------------------- */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  /* -- Stat counters ----------------------------------------------------- */
  const animateValue = (el, end, duration = 1400) => {
    const start = 0;
    const startTime = performance.now();
    const isFloat = end % 1 !== 0;
    const tick = (now) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = start + (end - start) * eased;
      el.textContent = isFloat ? value.toFixed(1) : Math.round(value);
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = end + (el.dataset.suffix || '');
    };
    requestAnimationFrame(tick);
  };

  if ('IntersectionObserver' in window) {
    const counterIO = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.dataset.count);
          if (!isNaN(target)) animateValue(el, target);
          counterIO.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('[data-count]').forEach(el => counterIO.observe(el));
  }

  /* -- Portfolio filters ------------------------------------------------- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (filterButtons.length && portfolioItems.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        filterButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        portfolioItems.forEach(item => {
          const cats = item.dataset.category || '';
          if (filter === 'all' || cats.split(' ').includes(filter)) {
            item.style.display = '';
            requestAnimationFrame(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            });
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.96)';
            setTimeout(() => { item.style.display = 'none'; }, 220);
          }
        });
      });
    });
  }

  /* -- Form handling ----------------------------------------------------- */
  const showSuccess = (form, message) => {
    let banner = form.querySelector('.form-success');
    if (banner) banner.remove();
    banner = document.createElement('div');
    banner.className = 'form-success';
    banner.innerHTML = `<span>✓</span><span>${message}</span>`;
    form.insertBefore(banner, form.firstChild);
    setTimeout(() => banner.remove(), 6000);
  };

  const validateEmail = (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);

  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));

      if (data.email && !validateEmail(data.email)) {
        alert('Por favor, introduce un email válido.');
        return;
      }

      const type = form.dataset.form;
      const messages = {
        contact: 'Mensaje recibido. Te responderé en menos de 24h.',
        quote: 'Solicitud enviada. Recibirás presupuesto detallado pronto.',
        booking: 'Reserva confirmada. Te enviaré los detalles por email.',
        newsletter: 'Suscripción confirmada. Bienvenida a la newsletter.'
      };

      showSuccess(form, messages[type] || 'Enviado correctamente.');
      form.reset();
      console.log(`[${type}]`, data);
    });
  });

  /* -- Year in footer ---------------------------------------------------- */
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
