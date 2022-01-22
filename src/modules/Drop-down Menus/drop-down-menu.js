import './style.css';

function addDDMenuButton(location, arrayNavLinks, main) {
  const button = document.createElement('button');
  const menuImg = document.createElement('img');
  const menu = document.createElement('div');
  const menuBGContainer = document.createElement('div');
  const menuBG = document.createElement('div');
  const menuList = document.createElement('li');
  button.className = 'DDButton';
  menuImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/120px-Hamburger_icon.svg.png';
  menuImg.className = 'menuImg';

  function goTo(e) {
    // eslint-disable-next-line no-param-reassign
    main.innerHTML = '';
    const result = arrayNavLinks.filter((navLink) => navLink === e.target.textContent);
    // eslint-disable-next-line no-eval
    eval(`${result[0]}()`);
  }

  function createMenuItems(array) {
    array.map((item) => {
      const navItem = document.createElement('ul');
      navItem.textContent = item;
      navItem.addEventListener('click', goTo);
      return menuList.appendChild(navItem);
    });
  }
  createMenuItems(arrayNavLinks);
  menuBG.className = 'menuBG hiddenBG';
  menuBGContainer.className = 'menuBGContainer';
  menu.className = 'DDMenu hidden';
  menuBGContainer.appendChild(menuBG);
  location.appendChild(menuBGContainer);
  menu.appendChild(menuList);
  location.appendChild(menu);
  button.addEventListener('click', () => {
    if (menu.className === 'DDMenu hidden') {
      menu.className = 'DDMenu visible';
      menuBG.className = 'menuBG visibleBG';
    } else {
      menu.className = 'DDMenu hidden';
      menuBG.className = 'menuBG hiddenBG';
    }
  });
  button.appendChild(menuImg);
  location.appendChild(button);
}

// eslint-disable-next-line import/prefer-default-export
export { addDDMenuButton };
