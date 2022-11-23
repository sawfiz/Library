import './style.css';
import bookFactory from './book';
import controller from './controller';
import clickHandler from './clicks';
import view from './view';

let book;

book = bookFactory(0, 'Lord of the Rings', 'J. R. R.Tolkin', 9250, true);
controller.addBook(book);

book = bookFactory(0, 'A Game of Thrones', 'George R. R. Martin', 694, false);
controller.addBook(book);

book = bookFactory(
  0,
  'Harry Potter and the Deathly Hallows',
  'J. K. Rowling',
  607,
  false
);
controller.addBook(book);

view.displayBookList();
