document.addEventListener("DOMContentLoaded", () => {
  const galleryGrid = document.getElementById("gallery-grid");
  const folderPath = "assets/img/gallery/";

  const images = [
    "applespec.jpg",
    "autumnseries3.jpg",
    "blackandgold.jpg",
    "chocolatechoux .jpg",
    "ispahan.jpg",
    "matcha.jpg",
    "newyears.jpg",
    "pbj.jpg",
    "petitsfour1.jpg",
    "petitsfour3.jpg",
    "petitsfour5.jpg",
    "petitsfour6.jpg",
    "pistachio.jpg",
    "plating4.jpg",
    "plating5.jpg",
    "tatin.jpg",
    "tofufah.jpg"
  ];

  galleryGrid.innerHTML = "";

  // Create thumbnails
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
  const lightboxCaption = document.getElementById("lightbox-caption");

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
