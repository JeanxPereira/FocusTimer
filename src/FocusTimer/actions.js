import state from './state.js';
import * as timer from './timer.js';
import * as el from './elements.js';
import * as sounds from './sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running');
  timer.countdown();
  sounds.buttonPressAudio.play();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove('running');
  timer.updateDisplay();
  sounds.buttonPressAudio.play();
}

export function set() {
  el.minutes.setAttribute('contenteditable', true);
  el.seconds.setAttribute('contenteditable', true);
  el.minutes.focus();
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on');
  if(state.isMute) {
    sounds.bgAudio.play();
    return;
  }
  sounds.bgAudio.pause();
}

export function increaseTime() {
  state.minutes += 5;
  timer.updateDisplay();
}

export function decreaseTime() {
  if(state.minutes == 0) {
    return;
  }
  state.minutes -= 5;
  timer.updateDisplay();
}

function pauseAllSounds() {
  sounds.forestBg.pause();
  sounds.rainBg.pause();
  sounds.fireplaceBg.pause();
  sounds.coffeeBg.pause();

  sounds.forestBg.currentTime = 0;
  sounds.rainBg.currentTime = 0;
  sounds.fireplaceBg.currentTime = 0;
  sounds.coffeeBg.currentTime = 0;
}

export function stopSound() {
  pauseAllSounds();
}

export function playForestSound() {
  pauseAllSounds();
  sounds.forestBg.play();
}

export function playRainSound() {
  pauseAllSounds();
  sounds.rainBg.play();
}

export function playFireplaceSound() {
  pauseAllSounds();
  sounds.fireplaceBg.play();
}

export function playCoffeeSound() {
  pauseAllSounds();
  sounds.coffeeBg.play();
}
