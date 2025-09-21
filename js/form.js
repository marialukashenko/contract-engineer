document.getElementById("resume-file").addEventListener("change", function() {
  const fileName = this.files.length > 0 ? this.files[0].name : "Файл не выбран";
  document.getElementById("resume-file-name").textContent = fileName;
});

document.getElementById("motivation-file").addEventListener("change", function() {
  const fileName = this.files.length > 0 ? this.files[0].name : "Файл не выбран";
  document.getElementById("motivation-file-name").textContent = fileName;
});