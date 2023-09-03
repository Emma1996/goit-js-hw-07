import { galleryItems } from "./gallery-items.js";

const ul = document.querySelector(".gallery");

const lis = galleryItems.map((item) => {
  const li = document.createElement("li");
  li.classList.add("gallery__item");
  li.innerHTML = `<a class="gallery__link" href="${item.original}">
    <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
    />
    </a>`;

  return li;
});

ul.append(...lis);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
