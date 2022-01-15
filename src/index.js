import { addDDMenuButton } from './modules/Drop-down Menus/drop-down-menu';

function init() {
  const DDMenuLinks = ['Home', 'Profile', 'Settings'];
  const content = document.createElement('div');
  content.className = 'content';
  addDDMenuButton(document.body, DDMenuLinks, content);

  document.body.appendChild(content);
}

init();
