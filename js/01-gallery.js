import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divEl = document.querySelector(".gallery");

const createGalleryItems = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__link"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
  })
  .join("");

divEl.insertAdjacentHTML("afterbegin", createGalleryItems);

divEl.addEventListener("click", handleOriginalImg);

function handleOriginalImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  let originalImg = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
    <img src=${originalImg} width="800" height="600">
`,
    {
      onClose: (instance) => {
        divEl.removeEventListener("keydown", handleCloseModal);
      },
    }
  );

  instance.show();

  divEl.addEventListener("keydown", handleCloseModal);

  function handleCloseModal(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}
