import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryListEl = document.querySelector(".gallery");

const createGalleryItems = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>`;
  })
  .join("");

galleryListEl.insertAdjacentHTML("afterbegin", createGalleryItems);

// console.log(createGalleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,

  /* options */
});
