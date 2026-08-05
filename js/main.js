(function () {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('menuToggle');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Message sent — thank you!';
      btn.disabled = true;
      contactForm.reset();
      setTimeout(function () {
        btn.textContent = original;
        btn.disabled = false;
      }, 2600);
    });
  }
})();
