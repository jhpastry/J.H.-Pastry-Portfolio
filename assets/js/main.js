document.addEventListener("DOMContentLoaded", () => {
  const galleryGrid = document.getElementById("gallery-grid");
  const folderPath = "assets/img/gallery/";

  const images = [
    "01.jpg", "02.jpg", "03.jpg",
    "Black and gold process photo.jpg",
    "Petit fours 1.jpg",
    "Oat Nougatine.jpg",
    "PBJ monaka process photo.jpg",
    "Pineapple gateau basque.jpg",
    "New Tart Closeup.jpg",
    "Chocolate Sphere.jpg",
    "Canelé Texture Detail.jpg"
  ];

  galleryGrid.innerHTML = "";

  images.forEach(file => {
    const img = document.createElement("img");
    img.src = folderPath + file;
    img.alt = file.replace(/\.[^/.]+$/, "");
    img.loading = "lazy";
    img.classList.add("gallery-item");
    galleryGrid.appendChild(img);
  });

  // Lightbox functionality
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.querySelector(".lightbox-caption");

  document.querySelectorAll(".gallery-item").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxCaption.textContent = img.alt;
      lightbox.classList.add("open");
    });
  });

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox || e.target === lightboxImg) {
      lightbox.classList.remove("open");
    }
  });
});
