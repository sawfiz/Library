import createElement from './createElement';
import alertIcon from './images/icons8-error-96.png';

const deleteModal = (() => {
  const modalEl = createElement('dialog', [], {
    id: 'delete-alert',
  });

  // Alert message
  const alertContainerDiv = createElement(
    'div',
    ['delete-alert-container'],
    {}
  );
  const imgEl = createElement('img', [], { src: alertIcon });
  alertContainerDiv.appendChild(imgEl);
  const pEl = createElement('p', [], {});
  pEl.innerText = "Please confirm that you'd like to delete the book ";
  alertContainerDiv.appendChild(pEl);
  const spanEl = createElement('span', [], { id: 'book-title' });
  pEl.appendChild(spanEl);
  modalEl.appendChild(alertContainerDiv);

  // Buttons
  const btnContainerDiv = createElement('div', ['button-container'], {});
  // Cancel button
  const cancelBtnEl = createElement('button', [], {
    id: 'delete-cancel',
  });
  cancelBtnEl.innerText = 'Cancel';
  btnContainerDiv.appendChild(cancelBtnEl);
  cancelBtnEl.addEventListener('click', () => deleteModal.modalEl.close());
  // Confirm button
  const confirmBtnEl = createElement('button', [], {
    id: 'delete-confirm',
  });
  confirmBtnEl.innerText = 'Confirm';
  btnContainerDiv.appendChild(confirmBtnEl);
  modalEl.appendChild(btnContainerDiv);

  return {
    get modalEl() {
      return modalEl;
    },
  };
})();

export default deleteModal;
