import createElement from './createElement';

const bookModal = (() => {
  const modalEl = createElement('dialog', [], { id: 'book-form' });
  const form = createElement('form', [], {});
  modalEl.appendChild(form);

  // Form header
  const header = createElement('div', ['book-form-header'], {});
  const formTitle = createElement('div', ['book-form-title'], {});
  formTitle.innerText = 'Book details';
  header.appendChild(formTitle);
  const formClose = createElement('div', ['book-form-close'], {});
  formClose.innerText = 'x';
  formClose.addEventListener('click', () => modalEl.close());
  header.appendChild(formClose);
  form.appendChild(header);

  // Fieldset
  const fieldSet = createElement('fieldset', [], {});
  form.appendChild(fieldSet);

  // Title entry line
  const titleLine = createElement('div', ['entry-line'], {});
  const titleLabel = createElement('label', [], { for: 'title' });
  titleLabel.innerText = 'Title';
  titleLine.appendChild(titleLabel);
  const titleInput = createElement('input', ['titleInput'], {
    type: 'text',
    id: 'title',
    placeholder: 'title',
    name: 'title',
    required: true,
    minlength: 1,
  });
  titleLine.appendChild(titleInput);
  fieldSet.appendChild(titleLine);

  // Author entry line
  const authorLine = createElement('div', ['entry-line'], {});
  const authorLabel = createElement('label', [], { for: 'author' });
  authorLabel.innerText = 'Author';
  authorLine.appendChild(authorLabel);
  const authorInput = createElement('input', ['authorInput'], {
    type: 'text',
    id: 'author',
    placeholder: 'author',
    name: 'author',
    required: true,
    minlength: 1,
  });
  authorLine.appendChild(authorInput);
  fieldSet.appendChild(authorLine);

  // Pages entry line
  const pagesLine = createElement('div', ['entry-line'], {});
  const pagesLabel = createElement('label', [], { for: 'pages' });
  pagesLabel.innerText = 'pages';
  pagesLine.appendChild(pagesLabel);
  const pagesInput = createElement('input', ['pagesInput'], {
    type: 'number',
    id: 'pages',
    placeholder: 'pages',
    name: 'pages',
    required: true,
    minlength: 1,
  });
  pagesLine.appendChild(pagesInput);
  fieldSet.appendChild(pagesLine);

  // Read entry line
  const readLine = createElement('div', ['entry-line'], {});
  const readLabel = createElement('label', [], { for: 'read' });
  readLabel.innerText = 'Read';
  readLine.appendChild(readLabel);
  const readInput = createElement('input', ['readInput'], {
    type: 'checkbox',
    id: 'read',
    name: 'read',
  });
  readLine.appendChild(readInput);
  fieldSet.appendChild(readLine);

  // Buttons
  const buttons = createElement('div', ['button-container'], {});
  const resetBtn = createElement('button', ['resetBtn'], {
    type: 'reset',
    name: 'reser',
  });
  resetBtn.textContent = 'Reset';
  buttons.appendChild(resetBtn);

  const submitBtn = createElement('button', ['submitBtn'], {
    type: 'submit',
    name: 'submit',
  });
  submitBtn.textContent = 'Submit';
  buttons.appendChild(submitBtn);
  form.appendChild(buttons);

  function clearInputs() {
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.checked = false;
  }

  return {
    clearInputs,
    get modalEl() {
      return modalEl;
    },
  };
})();

export default bookModal;
