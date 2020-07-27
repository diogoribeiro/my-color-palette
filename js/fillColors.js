const copyIcon = `
<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
</svg>
`;

function createCorlorName(colorName) {
  const colorNameBox = document.createElement('span');
  colorNameBox.innerHTML = `
    ${colorName}
    ${copyIcon}
  `;

  return colorNameBox;
}

function updateBackgrounds(colors, colorBoxesContainer) {
  colors.forEach((color) => {
    const box = document.createElement('div');
    const colorString = `rgb(${color.join(',')})`;
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