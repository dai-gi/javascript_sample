function confirmSubmit() {
  const forms = document.forms;
  forms[0].onsubmit = function() {
    if( forms[0].email.value !== forms[0].email_confirm.value) {
      const element = document.createElement('p');
      const message = document.createTextNode('Eメールが一致しません');
      element.appendChild(message);
      forms[0].appendChild(element);
      element.classList.add('alert')
      return false;
    }
  };
};

window.onload = confirmSubmit;