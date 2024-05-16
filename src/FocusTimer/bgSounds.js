import './elements.js';
import * as actions from './actions.js';

const buttonsContainer = document.getElementById('sounds');

buttonsContainer.addEventListener('click', (event) => {
  const soundSelected = event.target.closest('.soundButton');

  if (!soundSelected) return;

  const action = soundSelected.dataset.action;

  const selectedButton = soundSelected.classList.contains('soundSelected');

  if (selectedButton) {
    soundSelected.classList.remove('soundSelected');
    actions.stopSound();
  } else {
    buttonsContainer.querySelectorAll('.soundButton').forEach(btn => {
        btn.classList.remove('soundSelected');
    });
    soundSelected.classList.add('soundSelected');
    if (typeof actions[action] !== 'function') {
      return;
    }
    actions[action]();
  }
});
