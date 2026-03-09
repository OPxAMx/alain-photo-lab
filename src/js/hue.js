export function initHueSlider(slider, callback) {
  slider.addEventListener("input", () => callback(slider.value));
}
