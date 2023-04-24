import KEYS from './keys.js';

window.onload = () => {
  const hint = document.createElement('p');
  hint.innerHTML = 'Сделано на Windows: <strong>Сменить раскладку: LeftCtrl + LeftShift </strong>';
  document.body.append(hint);
  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  document.body.append(textarea);
  textarea.focus();
  textarea.addEventListener('blur', () => textarea.focus);

  const keyboardView = document.createElement('div');
  keyboardView.classList.add('keyboard-view');
  document.body.append(keyboardView);
};
