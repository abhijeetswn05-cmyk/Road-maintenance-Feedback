// Shared settings and helpers for all pages.
// Reports are saved in the browser (localStorage), so no server is needed.

const CONFIG = {
  ADMIN_USERNAME: "admin",
  ADMIN_PASSWORD: "password123",
  SECURITY_QUESTION: "What is your favorite city?",
  SECURITY_ANSWER: "Gorakhpur"
};

function getReports() {
  try { return JSON.parse(localStorage.getItem("roadcare_reports")) || []; }
  catch (e) { return []; }
}

function saveReports(reports) {
  localStorage.setItem("roadcare_reports", JSON.stringify(reports));
}

// Read an image file and shrink it so it fits in browser storage.
function readImage(file) {
  return new Promise((resolve) => {
    if (!file) return resolve(null);
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, 600 / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.7));
      };
      img.onerror = () => resolve(null);
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}
