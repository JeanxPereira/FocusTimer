export const buttonPressAudio = new Audio('./assets/button-press.wav');
export const kitchenTimer = new Audio('./assets/kitchen-timer.mp3');

export const forestBg = new Audio('./assets/Floresta.wav');
export const rainBg = new Audio('./assets/Chuva.wav');
export const fireplaceBg = new Audio('./assets/Lareira.wav');
export const coffeeBg = new Audio('./assets/Cafeteria.wav');

const audioElements = [forestBg, rainBg, fireplaceBg, coffeeBg];

audioElements.forEach(audio => {
  audio.loop = true;
});
