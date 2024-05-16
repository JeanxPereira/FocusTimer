document.addEventListener('DOMContentLoaded', function() {
  var range = document.getElementById('colorSlider');
  var root = document.documentElement;

  var colorPickerButton = document.getElementById('color-picker');
  var colorSlider = document.getElementById('sliderContentWrapper');

  var savedHue = localStorage.getItem('hue');
  if (savedHue !== null) {
    range.value = savedHue;
    root.style.setProperty('--hue', savedHue);
  }

  range.addEventListener('input', function() {
    root.classList.add('no-transition');
    root.style.setProperty('--hue', this.value);
    localStorage.setItem('hue', this.value);

    setTimeout(function() {
      root.classList.remove('no-transition');
    }, 50);
  });

  colorPickerButton.addEventListener('click', function() {
    colorSlider.classList.toggle('hide');
  });
});
