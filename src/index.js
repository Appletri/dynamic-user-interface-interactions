import { addDDMenuButton } from './modules/Drop-down Menus/drop-down-menu';
import { addImageSlider } from './modules/Image Slider/image-slider';
import './style.css';

function init() {
  const DDMenuLinks = ['Home', 'Profile', 'Settings', 'Contacts', 'Gifts'];
  const content = document.createElement('div');
  content.className = 'content';
  addDDMenuButton(document.body, DDMenuLinks, content);

  document.body.appendChild(content);

  addImageSlider(content);
}

init();
