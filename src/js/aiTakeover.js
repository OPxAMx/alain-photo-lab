import { PRESETS, applyPreset } from "./presets.js";

let interval = null;

export function startAITakeover(photo) {
  interval = setInterval(() => {
    const keys = Object.keys(PRESETS);
    const random = keys[Math.floor(Math.random() * keys.length)];
    applyPreset(photo, random);
  }, 2000);
}

export function stopAITakeover() {
  clearInterval(interval);
}
