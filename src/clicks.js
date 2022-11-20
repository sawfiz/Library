import controller from './controller';
import modals from './modals';
import view from './view';

const clickHandler = (() => {
  // Button to add a book
  const addBookImgEl = document.querySelector('.addBookImg');
  addBookImgEl.addEventListener('click', () => {
    modals.openBookModal();
  });

  // Buttons to sort books
  const sortTitleEl = document.querySelector('#sort-title');
  const sortAuthorEl = document.querySelector('#sort-author');
  const sortPagesEl = document.querySelector('#sort-pages');
  const sortReadEl = document.querySelector('#sort-read');

  sortTitleEl.addEventListener('click', () => {
    controller.sortBooks('title');
    view.displayBookList();
  });

  sortAuthorEl.addEventListener('click', () => {
    controller.sortBooks('author');
    view.displayBookList();
  });

  sortPagesEl.addEventListener('click', () => {
    controller.sortBooks('pages');
    view.displayBookList();
  });

  sortReadEl.addEventListener('click', () => {
    controller.sortBooks('isRead');
    view.displayBookList();
  });
})();

export default clickHandler;
