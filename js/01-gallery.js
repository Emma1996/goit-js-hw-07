import { galleryItems } from "./gallery-items.js";

const openImageInLightbox = (e) => {
  basicLightbox
    .create(
      `<img width="1400" height="900" src="${e.target.dataset.source}" />`
    )
    .show();

  e.preventDefault();
};

const ul = document.querySelector(".gallery");

const lis = galleryItems.map((item) => {
  const li = document.createElement("li");
  li.classList.add("gallery__item");
  li.innerHTML = `<a class="gallery__link" href="${item.original}">
    <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
    />
    </a>`;

  li.addEventListener("click", openImageInLightbox);

  return li;
});

ul.append(...lis);
