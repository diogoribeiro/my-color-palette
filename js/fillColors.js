function updateBackgrounds(colors, colorBoxesContainer) {
  colors.forEach((color) => {
    const box = document.createElement('div');
    box.style.backgroundColor = `rgb(${color.join(',')})`;

    colorBoxesContainer.appendChild(box);
  });
}

(function fillColors() {
  const colorBoxesContainer = document.querySelector('.grid-container');
  loadColors()
    .then(colors => updateBackgrounds(colors, colorBoxesContainer));
})();