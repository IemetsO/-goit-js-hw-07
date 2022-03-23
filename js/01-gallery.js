import { galleryItems } from "./gallery-items.js";
// Change code below this line

galleryItems.preview;
const gallery = document.querySelector(".gallery");

const itemsInGallery = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML("beforeend", itemsInGallery);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
    )
    .join(" ");
}

gallery.addEventListener("click", clickOnGalleryItem);

function clickOnGalleryItem(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  openModal(event.target.dataset.source);
}

function openModal(src) {
  const instance = basicLightbox.create(
    `
            <img src="${src}" width="800" height="600">
        `,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscClick);
      },
      onClose: () => window.removeEventListener("keydown", onEscClick),
    }
  );
  function onEscClick(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
  instance.show();
}


