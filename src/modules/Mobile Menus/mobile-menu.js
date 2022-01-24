import './style.css';

function addMobileMenu(location) {
  const container = document.createElement('div');
  const circleContainer = document.createElement('div');
  const circleOuter = document.createElement('div');
  const circleInner = document.createElement('div');
  container.className = 'mobile-menu';
  circleContainer.className = 'circle-container';
  circleOuter.className = 'circle-outer';
  circleInner.className = 'circle-inner';
  circleOuter.appendChild(circleInner);
  circleContainer.appendChild(circleOuter);
  container.appendChild(circleContainer);
  location.appendChild(container);
}

// eslint-disable-next-line import/prefer-default-export
export { addMobileMenu };
