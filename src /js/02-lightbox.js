import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function createGalleryMarkup(gallery) {
  return gallery
    .map((photo) => {
      return `
			<a class="gallery__item" href="${photo.original}">
  <img class="gallery__image" src="${photo.preview}" alt="${photo.description}" />
</a>
		`;
    })
    .join("");
}

galleryList.innerHTML = createGalleryMarkup(galleryItems);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 300,
  animationSpeed: 150,
  fadeSpeed: 150,
});
