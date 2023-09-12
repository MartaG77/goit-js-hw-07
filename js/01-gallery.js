import { galleryItems } from './gallery-items.js';
// Change code below this line
const imagesGallery = document.querySelector(".gallery");
galleryItems.forEach(function (item, index){
  imagesGallery.insertAdjacentHTML(
    "beforeend",
    `<div class='gallery__item'><a class='gallery__link' href='${item.original}'><img src='${item.preview}' alt='${item.description}' class='gallery__image' data-source='${item.original}'></img></a></div>`)
});
imagesGallery.addEventListener("click", selectImage);
function selectImage(event){
  if (event.target.tagName === "IMG"){
    event.target.parentNode.href = "javascript:void(0)";
    const imageOpen = basicLightbox.create(`<img src='${event.target.dataset.source}'/>`);
    imageOpen.show();
    const imageClose = (event) =>{
      if (event.key === "Escape"){
        imageOpen.close();
        document.removeEventListener("keydown", imageClose);
      }};
    document.addEventListener("keydown", imageClose);
  }}
  
console.log(galleryItems);
