'use strict';

console.log('=== MODAL DEVELOPMENT: FOUNDATION & CLASS TOGGLING ===');

console.log('Modal project ready!');

const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModalEl = document.querySelector('.close-modal');
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

console.log('Open buttons:', btnsOpenModalEl.length);

const openModal = () => {
  modalEl.classList.remove('hidden');

  overlayEl.classList.remove('hidden');
};

const closeModal = () => {
  modalEl.classList.add('hidden');

  overlayEl.classList.add('hidden');
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModalEl.addEventListener('click', closeModal);

overlayEl.addEventListener('click', closeModal);