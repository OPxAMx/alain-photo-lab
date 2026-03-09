export function initUploader(dropzone, callback) {
  dropzone.addEventListener("dragover", e => {
    e.preventDefault();
    dropzone.classList.add("drag");
  });

  dropzone.addEventListener("dragleave", () => {
    dropzone.classList.remove("drag");
  });

  dropzone.addEventListener("drop", e => {
    e.preventDefault();
    dropzone.classList.remove("drag");
    callback(e.dataTransfer.files[0]);
  });
}
