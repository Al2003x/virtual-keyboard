import KEYS from './keys.js';

window.onload = () => {
  const hint = document.createElement('p');
  hint.innerHTML = 'Сделано на Windows: <strong>Сменить раскладку: LeftShift + LeftAlt </strong>';
  document.body.append(hint);
  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  document.body.append(textarea);
  textarea.focus();
  textarea.addEventListener('blur', () => textarea.focus);

  const keyboardView = document.createElement('div');
  keyboardView.classList.add('keyboard-view');
  document.body.append(keyboardView);

  class Keyboard {
    constructor(keys) {
      this.language = this.getLanguage();
      this.keys = keys;
      this.shiftPressed = false;
      this.capslockPressed = false;
      this.ctrlPressed = false;
      this.createKeyboard();
    }

    createKeyboard() {
      let currentRow;
      this.keys.forEach((key) => {
        if (currentRow !== key.row) {
          const row = document.createElement('div');
          row.classList.add('keyboard__row');
          keyboardView.append(row);
          currentRow = key.row;
        }
        const button = document.createElement('button');
        button.id = key.code;
        button.classList = key.classes !== undefined ? key.classes : '';
        button.innerHTML = key.isSpecial ? key.name : key[this.language];

        keyboardView.querySelectorAll('.keyboard__row')[currentRow].append(button);
      });
    }

    getLanguage() {
      let currentLanguage = 'en';
      if (localStorage.getItem('language') === null) {
        this.setLanguage(currentLanguage);
      } else {
        currentLanguage = localStorage.getItem('language');
      }
      return currentLanguage;
    }
  }

  const keyboard = new Keyboard(KEYS);
};
