import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const itemsInGallery = createGalleryItems(galleryItems)

gallery.insertAdjacentHTML('beforeend', itemsInGallery);

function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description}) => 
    `<div class="gallery__item">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" 
  alt="${description}" />
</a>
  </div>`). join(" ")
}

gallery.addEventListener("click", clickOnGalleryItem);

function clickOnGalleryItem(event){
    if (event.target.nodeName !== 'IMG'){
        return
    }
event.preventDefault();
let gallery = new SimpleLightbox('.gallery a',
{
  
  captionsData: "alt",
  captionPosition: 'bottom',
 captionDelay: 250,

})
gallery.on('show.simplelightbox', function () {
    	
    });
}
