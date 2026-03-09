export const PRESETS = {
  cyberpunk: { hue: 260 },
  vintage: { hue: 35 },
  neon: { hue: 190 }
};

export function applyPreset(photo, name) {
  const preset = PRESETS[name];
  if (!preset) return;
  photo.style.filter = `hue-rotate(${preset.hue}deg)`;
}
