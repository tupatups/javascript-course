'use strict';

console.log('Open buttons:', btnsOpenModalEl.length);

let lastFocusedButton = null;

const openModal = () => {
  modalEl.classList.remove('hidden');

  overlayEl.classList.remove('hidden');

  modalEl.focus();

  lastFocusedButton = document.activeElement;
};

const closeModal = () => {
  modalEl.classList.add('hidden');

  overlayEl.classList.add('hidden');

  if (lastFocusedButton) {
    lastFocusedButton.focus();
  }
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

overlayEl.addEventListener('click', closeModal);

console.log('Keyboard events test');

// document.addEventListener('keydown', e => {
//   console.log('key pressed:', e);

//   console.log('key name:', e.key);
// });

document.addEventListener('keydown', e => {
  console.log(
    'Key pressed:',
    e.key,
    'Modal visible:',
    !modalEl.classList.contains('hidden')
  );

  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');
btnCloseModalEl.setAttribute('aria-label', 'Close modal');