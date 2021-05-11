import ModeStore from './libs/store.js';
// 默认白天模式
const html = document.querySelector('html');
const ms = new ModeStore();

(function init () {
  const mode = ms.getMode();
  html.setAttribute('data-color-mode', mode ? mode : 'light')
})();


function handleToggle () {
  let mode = html.getAttribute('data-color-mode');
  mode = mode === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-color-mode', mode);
  ms.setMode(mode);
}

const toggle = document.querySelector('.toggle-wrapper');
toggle.addEventListener('click', handleToggle);