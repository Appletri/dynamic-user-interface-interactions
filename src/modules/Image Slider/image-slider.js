/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
import './style.css';

function importAll(r) {
  return r.keys().map(r);
}

function addImageSlider(location) {
  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
  const div = document.createElement('div');
  const leftSlide = document.createElement('div');
  const rightSlide = document.createElement('div');
  const scrubber = document.createElement('div');
  const imageContainer = document.createElement('div');
  const image = document.createElement('img');
  const imagePrev = document.createElement('img');
  const imageNext = document.createElement('img');
  let timeoutID = setInterval(goRight, 5000);
  let currentImage = 0;

  function moveSelectedDot() {
    const dots = document.querySelectorAll('.dot');
    const selectedDot = document.querySelector(`#dot${currentImage}`);
    // eslint-disable-next-line no-return-assign, no-param-reassign
    dots.forEach((dot) => dot.className = 'dot');
    selectedDot.classList.add('selected');
  }

  function timeout() {
    clearTimeout(timeoutID);
    timeoutID = setInterval(goRight, 5000);
  }

  function changeCurrentImage(num, array, change) {
    let tempNum = num + change;
    if (tempNum === -1) {
      tempNum = array.length - 1;
    }
    if (tempNum === array.length) {
      tempNum = 0;
    }
    return tempNum;
  }

  function establishImages() {
    imagePrev.src = images[changeCurrentImage(currentImage, images, -1)];
    image.src = images[changeCurrentImage(currentImage, images, 0)];
    imageNext.src = images[changeCurrentImage(currentImage, images, 1)];
  }
  function goTo(e) {
    const str = e.target.id;
    const targetImage = parseInt(str.substring('dot'.length), 10);
    const threeImages = document.querySelectorAll('.images');
    imageNext.src = images[targetImage];
    threeImages.forEach((img) => {
      img.style.transition = 'ease-in-out 0.5s';
      img.style.transform = 'translateX(-100%)';
    });
    currentImage = targetImage;
    setTimeout(() => {
      establishImages();
      threeImages.forEach((img) => {
        img.style.transition = 'none';
        img.style.transform = 'translateX(0%)';
      });
    }, 500);
    moveSelectedDot();
    timeout();
  }

  function addScrubbingDots() {
    for (let i = 0; i < images.length; i += 1) {
      const dot = document.createElement('div');
      if (i === 0) {
        dot.className = 'dot selected';
      } else {
        dot.className = 'dot';
      }
      scrubber.appendChild(dot);
      dot.id = `dot${i}`;
      dot.addEventListener('click', goTo);
    }
  }
  addScrubbingDots();
  function goLeft() {
    currentImage -= 1;
    leftSlide.removeEventListener('click', goLeft);
    if (currentImage === -1) {
      currentImage = (images.length - 1);
    }
    const threeImages = document.querySelectorAll('.images');
    threeImages.forEach((img) => {
      img.style.transition = 'ease-in-out 0.5s';
      img.style.transform = 'translateX(100%)';
    });
    setTimeout(() => {
      establishImages();
      threeImages.forEach((img) => {
        img.style.transition = 'none';
        img.style.transform = 'translateX(0%)';
      });
      leftSlide.addEventListener('click', goLeft);
    }, 500);
    moveSelectedDot();
    timeout();
  }

  function goRight() {
    rightSlide.removeEventListener('click', goRight);
    currentImage += 1;
    if (currentImage === images.length) {
      currentImage = 0;
    }
    const threeImages = document.querySelectorAll('.images');
    threeImages.forEach((img) => {
      img.style.transition = 'ease-in-out 0.5s';
      img.style.transform = 'translateX(-100%)';
    });
    setTimeout(() => {
      establishImages();
      threeImages.forEach((img) => {
        img.style.transition = 'none';
        img.style.transform = 'translateX(0%)';
      });
      rightSlide.addEventListener('click', goRight);
    }, 500);
    moveSelectedDot();
    timeout();
  }

  leftSlide.className = 'left slideButton';
  leftSlide.addEventListener('click', goLeft);
  rightSlide.className = 'right slideButton';
  rightSlide.addEventListener('click', goRight);
  scrubber.className = 'scrubber';
  div.className = 'imageSlider';
  imageContainer.className = 'imageContainer';
  imagePrev.className = 'images';
  image.className = 'images';
  imageNext.className = 'images';
  establishImages();
  div.appendChild(leftSlide);
  div.appendChild(imageContainer);
  imageContainer.appendChild(imagePrev);
  imageContainer.appendChild(image);
  imageContainer.appendChild(imageNext);
  div.appendChild(rightSlide);
  div.appendChild(scrubber);
  location.appendChild(div);
}

// eslint-disable-next-line import/prefer-default-export
export { addImageSlider };
