const lb    = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');

document.querySelectorAll('.project-card img').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lb.classList.add('active');
  });
});

if (lb) {
  lb.addEventListener('click', e => {
    if (e.target !== lbImg) lb.classList.remove('active');
  });
  document.querySelector('.close')?.addEventListener('click', () => lb.classList.remove('active'));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('active'); });
}