(function () {
  const CONTACT_EMAIL = 'contact@rohlax.com';
  const FORM_ENDPOINT = 'https://formsubmit.co/ajax/' + CONTACT_EMAIL;

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
      const errorEl = document.getElementById('talkError');
      const original = btn.textContent;
      const data = new FormData(form);
      const payload = {
        name: String(data.get('name') || '').trim(),
        email: String(data.get('email') || '').trim(),
        message: String(data.get('message') || '').trim(),
        _subject: 'New inquiry from rohlax.com',
        _template: 'table',
        _captcha: 'false'
      };

      if (errorEl) {
        errorEl.hidden = true;
        errorEl.textContent = '';
      }
      if (success) success.hidden = true;

      btn.disabled = true;
      btn.textContent = 'Sending…';

      fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          return res.json().then(function (body) {
            return { ok: res.ok, body: body };
          });
        })
        .then(function (result) {
          if (!result.ok || result.body.success === 'false' || result.body.success === false) {
            throw new Error(
              (result.body && result.body.message) ||
                'Could not send your message. Please email ' + CONTACT_EMAIL + '.'
            );
          }

          form.reset();
          btn.textContent = 'Message sent — thank you!';
          if (success) success.hidden = false;

          setTimeout(function () {
            btn.textContent = original;
            btn.disabled = false;
            if (success) success.hidden = true;
          }, 4000);
        })
        .catch(function (err) {
          btn.textContent = original;
          btn.disabled = false;
          if (errorEl) {
            errorEl.hidden = false;
            errorEl.textContent =
              err.message ||
              'Could not send your message. Please email ' + CONTACT_EMAIL + '.';
          } else {
            window.alert(
              err.message ||
                'Could not send your message. Please email ' + CONTACT_EMAIL + '.'
            );
          }
        });
    });
  }

  wireForm('contactForm');
  wireForm('talkForm', 'talkSuccess');
})();
