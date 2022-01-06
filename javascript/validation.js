function emailValidation() {
  const form = document.getElementById('form');
  const email = form[1];
  const email_confirm = form[2];

  email_confirm.addEventListener("input", function () {
    let flag = false;
    const alert_tr = document.createElement('tr');
    const alert_td = document.createElement('td');
    const message = document.createTextNode('Eメールが一致しません');
    const email_confirm_form = document.getElementById('email_confirm');
    const tr_list = document.getElementsByTagName('tr');
    const on_new_element = tr_list[2];
    const new_element = tr_list[3];

    alert_tr.appendChild(alert_td);
    alert_td.appendChild(message);
    alert_td.classList.add('alert1');
    email_confirm_form.classList.add('alert2');

    if (!(flag) && email.value !== email_confirm.value) {
      on_new_element.after(alert_tr);
      flag = true;
    } else {
      new_element.remove();
      email_confirm_form.classList.remove('alert2');
      flag = false;
    }

  });
};

window.onload = emailValidation;