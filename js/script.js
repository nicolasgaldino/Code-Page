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
  
  function btnLigacao() {
  const btnLigacao = document.querySelector('.contato button');
  btnLigacao.addEventListener('click', () => {
    window.alert('Site em manuntenção.');
  });
  }
  btnLigacao();