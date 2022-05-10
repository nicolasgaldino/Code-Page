function btnLogin() {
  const btnLogin = document.querySelectorAll('.ul-cont li:last-child');
  function alerta() {
    window.alert('Site em manuntenção.')
  }
  btnLogin.forEach((i) => {
    i.addEventListener('click', alerta);
  });
  }
btnLogin();
  
function btnOrcamento() {
  const btnOrcamento = document.querySelector('.inicio-text button');
  btnOrcamento.addEventListener('click', () => {
    window.alert('Site em manuntenção.');
  });
  }
btnOrcamento();

function initDrpodownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  dropdownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    this.classList.add('ativo');
    clickFora(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo');
    });
  }
}
initDrpodownMenu();

function clickFora(element, events, callBack) {
  const html = document.documentElement;
  const fora = 'data-outside';
  if(!element.hasAttribute(fora)) {
    events.forEach(userEvent => {
      html.addEventListener(userEvent, handleOutsideClick);
    });
    element.setAttribute(fora, '');
  }
  function handleOutsideClick(event) {
    if(!element.contains(event.target)) {
      element.removeAttribute(fora);
      events.forEach(userEvent => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
      callBack();
    }
  }
}
clickFora();
  
function btnLigacao() {
  const btnLigacao = document.querySelector('.contato button');
  btnLigacao.addEventListener('click', () => {
    window.alert('Site em manuntenção.');
  });
  }
btnLigacao();