function updateBackgrounds(colors, colorBoxes) {
  colorBoxes.forEach(
    (colorBox, index) => (colorBox.style.backgroundColor = `rgb(${colors[index].join(',')})`),
  );
}

(function fillColors() {
  const colorBoxes = document.querySelectorAll('.grid-container div');
  loadColors()
    .then(colors => updateBackgrounds(colors, colorBoxes));
})();