function emailValidation() {
  const forms = document.getElementById('form');
  forms.addEventListener("submit", function() {
    if( forms.email.value !== forms.email_confirm.value) {
      const element = document.createElement('p');
      const message = document.createTextNode('Eメールが一致しません');
      element.appendChild(message);
      forms.appendChild(element);
      element.classList.add('alert')
      return false;
    }
  });
};

window.onload = emailValidation;