import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function createGalleryMarkup(gallery) {
  return gallery
    .map((photo) => {
      return `
			<div class="gallery__item">
  				<a class="gallery__link" href="${photo.original}">
    			<img
      class="gallery__image"
      src="${photo.preview}"
      data-source="${photo.original}"
      alt="${photo.description}"
    />
  </a>
</div>
		`;
    })
    .join("");
}

galleryList.innerHTML = createGalleryMarkup(galleryItems);

galleryList.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");

  if (e.target.nodeName !== "IMG") {
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  galleryList.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
});
