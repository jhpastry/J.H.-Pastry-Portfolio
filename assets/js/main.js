/* Minimal JS for gallery + lightbox + auto-discover images by number.
   Drop images into /assets/img/gallery/ named 01.jpg, 02.jpg ... or 01.png etc.
   Optionally, add 01.txt beside an image to serve as its caption. */

function byId(id){ return document.getElementById(id); }

async function imageExists(url){
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url + '?v=' + Date.now();
  });
}

async function fetchText(url){
  try{
    const res = await fetch(url + '?v=' + Date.now());
    if(!res.ok) return '';
    return await res.text();
  }catch(e){ return ''; }
}

async function buildGallery(){
  const grid = byId('gallery-grid');
  if(!grid) return;
  const exts = ['jpg','png','jpeg','webp'];
  const max = 120; // up to 120 images
  let count = 0;

  for(let i=1;i<=max;i++){
    const idx = String(i).padStart(2,'0');
    let found = null, extFound = null;
    for(const ext of exts){
      const url = `assets/img/gallery/${idx}.${ext}`;
      /* eslint-disable no-await-in-loop */
      if(await imageExists(url)){ found = url; extFound = ext; break; }
    }
    if(found){
      count++;
      const item = document.createElement('div');
      const img = document.createElement('img');
      img.src = found;
      img.alt = `Gallery ${idx}`;
      img.loading = 'lazy';
      img.addEventListener('click', async () => openLightbox(found, await fetchText(`assets/img/gallery/${idx}.txt`)));
      item.appendChild(img);
      grid.appendChild(item);
    }
  }

  if(count === 0){
    const msg = document.createElement('p');
    msg.textContent = 'Add numbered images to /assets/img/gallery/ (01.jpg, 02.jpg, ...).';
    grid.appendChild(msg);
  }
}

function openLightbox(src, caption=''){
  const lb = byId('lightbox');
  const img = byId('lightbox-img');
  const cap = byId('lightbox-caption');
  img.src = src;
  cap.textContent = caption || '';
  lb.classList.add('open');
}
function closeLightbox(){
  byId('lightbox').classList.remove('open');
}

document.addEventListener('DOMContentLoaded', () => {
  const lb = byId('lightbox');
  if(lb){
    lb.addEventListener('click', (e)=>{
      if(e.target.id === 'lightbox') closeLightbox();
    });
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape') closeLightbox();
    });
  }
  buildGallery();
});