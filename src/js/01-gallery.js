// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Opisany w dokumentacji
import SimpleLightbox from "simplelightbox";
// Dodatkowy import stylów
import "simplelightbox/dist/simple-lightbox.min.css";


//poniżej kod z zad. 7

const galleryPhoto = document.querySelector(".gallery");
const galleryPhotoItems = makeGallery(galleryItems);
galleryPhoto.insertAdjacentHTML("beforeend", galleryPhotoItems);
galleryPhoto.addEventListener("click", openModal);

function makeGallery(photos) {
  return photos
  .map(({preview, original, description}) => {
    return `<div class = "gallery__item">
    <a class = "gallery__link" href = "${original}">
    <img class = "gallery__image"
    src = "${preview}"
    data-source = "${original}"
    alt = "${description}"/>
    </a>
    </div>`
  })
  .join("");
}

// const instance = basicLightbox.create(
//   `<img src = "" />`,
//   {
//     onShow: () => {
//     console.log("add listener");
//     document.addEventListener("keydown", escBtn);
//   },
// onClose: () => {
//   console.log("remove listener");
//   document.removeEventListener("keydown", escBtn);
// },
// }
// );

//Jak dodasz instance.show(),
//wtedy dodaje się ciemne tło, jak w modalu
// instance.show();

//problemem było, że w tej funkcji dałaś
//instance.onClose(), zamiast
//instance.close()

// function escBtn(ev) {
//   if (ev.code === "Escape") {
//     instance.close();
//   }
// };

// const url = instance.element().querySelector("img");

function openModal(ev) {
  ev.preventDefault();
  url.src= ev.target.dataset.source;
  instance.element().querySelector("img").src = ev.target.dataset.source;
  instance.show();
};

const lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    caption: true,
    captionData: "alt",
});

console.log(galleryItems);

