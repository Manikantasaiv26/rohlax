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

  function wireForm(formId, successId) {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const success = successId ? document.getElementById(successId) : null;
      const original = btn.textContent;
      btn.textContent = 'Message sent — thank you!';
      btn.disabled = true;
      form.reset();
      if (success) {
        success.hidden = false;
      }
      setTimeout(function () {
        btn.textContent = original;
        btn.disabled = false;
        if (success) success.hidden = true;
      }, 3200);
    });
  }

  wireForm('contactForm');
  wireForm('talkForm', 'talkSuccess');
})();
