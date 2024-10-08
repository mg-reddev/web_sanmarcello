const cards = document.querySelectorAll('.card');
const modal = document.getElementById('form-modal');
const openFormBtns = document.querySelectorAll('.open-form');
const closeBtn = document.querySelector('.close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const option = card.getAttribute('data-option');
    const optionsId = `#${option}-options`;
    const optionsElement = document.querySelector(optionsId);

    document.querySelectorAll('.options').forEach(el => el.style.display = 'none');
    optionsElement.style.display = 'block';

    window.scrollTo({
      top: optionsElement.offsetTop,
      behavior: 'smooth'
    });
  });
});

openFormBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', event => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
