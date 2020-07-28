const WHITE_COLOR = '#FFF';

function createCorlorName(colorName) {
  const colorNameBox = document.createElement('span');
  const className = tinycolor.isReadable(WHITE_COLOR, colorName) ? '' : 'dark';
  colorNameBox.className = className;
  colorNameBox.innerText = colorName;

  return colorNameBox;
}

function updateBackgrounds(colors, colorBoxesContainer) {
  colors.forEach((color) => {
    const box = document.createElement('div');
    const colorString = tinycolor(`rgb(${color.join(',')})`).toHexString();
    box.style.backgroundColor = colorString;
    box.appendChild(createCorlorName(colorString));

    colorBoxesContainer.appendChild(box);
  });
}

(function fillColors() {
  const colorBoxesContainer = document.querySelector('.grid-container');
  loadColors()
    .then(colors => updateBackgrounds(colors, colorBoxesContainer));
})();