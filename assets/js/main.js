document.addEventListener("DOMContentLoaded", function () {
  const galleryGrid = document.getElementById("gallery-grid");
  const folderPath = "assets/img/gallery/";

  const images = [
    "01.jpg", "02.jpg", "03.jpg",
    "Apple, speculoos and miso b.jpg",
    "Black and gold process photo.jpg",
    "Jasmin, Bahibé, pistachio, blo....jpg",
    "Oat Nougatine.jpg",
    "PBJ monaka process photo.jpg",
    "Petit fours 1.jpg", "Petits Fours 2.jpg",
    "Petits Fours 4.jpg", "Petits Fours 6.jpg", "Petits Fours 7.jpg",
    "Pineapple gateau basque.jpg",
    "Plating 3.jpg", "Plating 4.jpg", "Plating 5.jpg",
    "Raspberry, litchi and yogurt.jpg",
    "Roasted lemon, shiso oil, but....jpg",
    "Tatin.jpg", "Tofu Fah.jpg"
  ];

  images.forEach(file => {
    const img = document.createElement("img");
    img.src = folderPath + file;
    img.alt = file.replace(/\.[^/.]+$/, "");
    img.loading = "lazy";
    img.classList.add("gallery-item");
    galleryGrid.appendChild(img);
  });
});
