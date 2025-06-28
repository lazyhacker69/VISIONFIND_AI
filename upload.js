const fileInput = document.getElementById("fileInput");
const previewBox = document.getElementById("previewBox");

fileInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      previewBox.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" />`;
    };
    reader.readAsDataURL(file);
  } else {
    previewBox.innerHTML = `<p>No image uploaded yet.</p>`;
  }
});

function goToResults() {
  // Fake delay if you want to simulate "processing"
  window.location.href = "results.html";
}

