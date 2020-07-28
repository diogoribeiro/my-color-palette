'use strict';

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
    box.style.backgroundColor = color;
    box.appendChild(createCorlorName(color));

    colorBoxesContainer.appendChild(box);
  });
}

function selectColorPallete() {
  const colorPaletteIndex = Math.floor(Math.random() * ((colorPalettes.length - 1) + 1));
  return colorPalettes[colorPaletteIndex];
}

(function fillColors() {
  const colorBoxesContainer = document.querySelector('.grid-container');
  updateBackgrounds(selectColorPallete(), colorBoxesContainer);
})();