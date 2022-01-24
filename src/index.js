import { addDDMenuButton } from './modules/Drop-down Menus/drop-down-menu';
import { addImageSlider } from './modules/Image Slider/image-slider';
// import { addMobileMenu } from './modules/Mobile Menus/mobile-menu';
import './style.css';

function init() {
  const DDMenuLinks = ['Home', 'Profile', 'Settings', 'Contacts', 'Gifts'];
  const content = document.createElement('div');
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';
  content.className = 'content';
  addDDMenuButton(buttonContainer, DDMenuLinks, content);
  document.body.appendChild(buttonContainer);
  document.body.appendChild(content);

  addImageSlider(content);
  // addMobileMenu(document.body);
}

init();
