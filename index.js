const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const buttonPassword = document.querySelector('.password-button');
const buttonEnter = document.querySelector('.button-enter');
const imgs = Array(...document.querySelectorAll('.background img'));

function canActiveButton() {
  if (emailInput.value && passwordInput.value.length >= 6) {
    buttonEnter.disabled = false;
  } else {
    buttonEnter.disabled = true;
  }
}

function updateInput() {
  let teste = this.value;

  canActiveButton();

  if (!teste) {
    this.classList.remove('active');
    if (this.name == 'password') {
      buttonPassword.classList.remove('active');
    }
  }
  if (teste) {
    if (this.name == 'password') {
      buttonPassword.classList.add('active');
    }
    this.classList.add('active');
  }
}

emailInput.oninput = updateInput;
passwordInput.oninput = updateInput;

buttonPassword.onclick = () => {
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  buttonPassword.innerHTML =
    buttonPassword.innerHTML === 'Mostrar' ? 'Ocultar' : 'Mostrar';
};

function carousel() {
  setTimeout(() => {
    let previous = imgs.find((img) => img.classList.contains('previous'));
    let current = imgs.find((img) => img.classList.contains('current'));

    previous.classList.remove('previous');
    current.classList.remove('current');
    current.classList.add('previous');

    if (imgs.indexOf(previous) == 0) {
      imgs[4].classList.remove('previous');
    }
    if (imgs.indexOf(current) != 4) {
      imgs[imgs.indexOf(current) + 1].classList.add('current');
    } else {
      imgs[0].classList.add('current');
    }

    carousel();
  }, 5000);
}

function startImgs() {
  setTimeout(() => {
    imgs[1].classList.add('current');
    carousel();
  }, 5000);
}

startImgs();
