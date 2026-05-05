// Laura's Natural Home - OpenCode Qwen 3.6

document.addEventListener('DOMContentLoaded', function() {
  
  const mobileToggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('nav');
  
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      this.classList.toggle('active');
    });
  }

  const header = document.querySelector('header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-full-item');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');

        portfolioItems.forEach(item => {
          const category = item.getAttribute('data-category');
          
          if (filter === 'all' || category === filter) {
            item.style.display = 'block';
            setTimeout(() => { item.style.opacity = '1'; }, 10);
          } else {
            item.style.opacity = '0';
            setTimeout(() => { item.style.display = 'none'; }, 300);
          }
        });
      });
    });
  }

  const testimonialItems = document.querySelectorAll('.testimonial-item');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');
  
  if (testimonialItems.length > 1) {
    let currentSlide = 0;

    function showSlide(index) {
      testimonialItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
      });
      testimonialDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }

    if (testimonialDots.length > 0) {
      testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          currentSlide = index;
          showSlide(currentSlide);
        });
      });
    }

    setInterval(() => {
      currentSlide = (currentSlide + 1) % testimonialItems.length;
      showSlide(currentSlide);
    }, 5000);
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('¡Gracias por contactarme! Te responderé pronto.');
      this.reset();
    });
  }

  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('¡Tu solicitud de presupuesto ha sido enviada!');
      this.reset();
    });
  }

  const consultForm = document.getElementById('consult-form');
  if (consultForm) {
    consultForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('¡Tu consulta ha sido reservada!');
      this.reset();
    });
  }

  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('¡Gracias por suscribirte!');
      this.querySelector('input').value = '';
    });
  }

  console.log('Laura\'s Natural Home - OpenCode Qwen 3.6 loaded');
});
