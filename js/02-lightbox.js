import { galleryItems } from './gallery-items.js';
// Change code below this line
const imagesGallery = document.querySelector(".gallery");
galleryItems.forEach(function (item, index) {
  imagesGallery.insertAdjacentHTML(
    "beforeend",
    `<li class="gallery__item"><a class='gallery__link' href='${item.original}'><img src='${item.preview}' alt='${item.description}' class='gallery__image'/></a></li>`)
});
const imageOpen = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);
