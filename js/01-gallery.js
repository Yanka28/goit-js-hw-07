import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery')

const markup = galleryItems.map(({preview, original, description}) =>  
 `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}""
      data-source="${original}""
      alt="${description}"
    />
  </a>
</li>`).join('')
gallery.insertAdjacentHTML('beforeend', markup)

let instance 

gallery.onclick = (event) => {
       event.preventDefault()
        if (event.target.classList.contains('gallery__image')){ 
            instance = basicLightbox.create(
            `<img src="${event.target.dataset.source}" alt="foto" > `,
            {
                onShow: () => document.addEventListener('keydown', onclickEsc),
                onClose: () => document.removeEventListener('keydown', onclickEsc) 
	        })
        }
    instance.show()
}
    
function onclickEsc(event) { 
    if (event.code === 'Escape') {
        instance.close();
    }
        
}


