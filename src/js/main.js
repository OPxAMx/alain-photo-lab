import { initUploader } from "./uploader.js";
import { initHueSlider } from "./hue.js";
import { toggleEffect } from "./effects.js";
import { PRESETS, applyPreset } from "./presets.js";
import { startAITakeover, stopAITakeover } from "./aiTakeover.js";

const photo = document.getElementById("photo");

// Uploader
initUploader(
  document.getElementById("dropzone"),
  file => photo.src = URL.createObjectURL(file)
);

// Hue slider
initHueSlider(
  document.getElementById("hueSlider"),
  value => photo.style.filter = `hue-rotate(${value}deg)`
);

// Effets (Zoom, Vignette, Glitch)
document.querySelectorAll("[data-toggle]").forEach(btn => {
  btn.addEventListener("click", () => {
    toggleEffect(photo, btn.dataset.toggle);
  });
});

// IA Takeover
document.getElementById("aiToggle").addEventListener("change", e => {
  if (e.target.checked) startAITakeover(photo);
  else stopAITakeover();
});
