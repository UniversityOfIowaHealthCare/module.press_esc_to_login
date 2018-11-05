document.onkeydown = function(evt) {
  evt = evt || window.event;

  var loginPath = Drupal.settings.pressEscToLogin.loginPath;

  if (evt.key === "Escape" && loginPath) {
    location.href = loginPath;
  }
};
