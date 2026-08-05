(function () {
  var AUTH_EMAIL = 'contact@rohlax.com';
  var AUTH_PASSWORD = '@Sun19Jul26#';
  var STORAGE_KEY = 'rohlax_session';

  var loginView = document.getElementById('loginView');
  var dashboardView = document.getElementById('dashboardView');
  var loginForm = document.getElementById('loginForm');
  var authError = document.getElementById('authError');
  var welcomeUser = document.getElementById('welcomeUser');
  var logoutBtn = document.getElementById('logoutBtn');

  function getSession() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY) || sessionStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function setSession(user, remember) {
    var payload = JSON.stringify({ email: user, at: Date.now() });
    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(STORAGE_KEY);
    if (remember) localStorage.setItem(STORAGE_KEY, payload);
    else sessionStorage.setItem(STORAGE_KEY, payload);
  }

  function clearSession() {
    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(STORAGE_KEY);
  }

  function showDashboard(email) {
    if (loginView) loginView.style.display = 'none';
    if (dashboardView) dashboardView.classList.add('show');
    if (welcomeUser) welcomeUser.textContent = 'Signed in as ' + email;
  }

  function showLogin() {
    if (loginView) loginView.style.display = 'block';
    if (dashboardView) dashboardView.classList.remove('show');
  }

  var existing = getSession();
  if (existing && existing.email === AUTH_EMAIL) {
    showDashboard(existing.email);
  } else if (existing) {
    clearSession();
  }

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = (document.getElementById('email').value || '').trim().toLowerCase();
      var password = (document.getElementById('password').value || '').trim();
      var remember = document.getElementById('remember').checked;

      if (email === AUTH_EMAIL && password === AUTH_PASSWORD) {
        if (authError) authError.classList.remove('show');
        setSession(email, remember);
        showDashboard(email);
      } else {
        if (authError) {
          authError.textContent = 'Invalid email or password.';
          authError.classList.add('show');
        }
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', function () {
      clearSession();
      showLogin();
    });
  }
})();
