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

galleryListEl.addEventListener("click", handleOriginalImg);

function handleOriginalImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  let originalImg = event.target.dataset.source;

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 5000,

    /* options */
  });

  //   const instance = basicLightbox.create(
  //     `
  //     <img src=${originalImg} width="800" height="600">
  // `,
  //     {
  //       onClose: (instance) => {
  //         galleryListEl.removeEventListener("keydown", handleCloseModal);
  //       },
  //     }
  //   );

  //   instance.show();

  //   galleryListEl.addEventListener("keydown", handleCloseModal);

  //   function handleCloseModal(event) {
  //     if (event.key === "Escape") {
  //       instance.close();
  //     }
  //   }
}
