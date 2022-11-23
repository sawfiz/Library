import './style.css';
import ScreenController from './ScreenController';

const libraryEl = document.querySelector('tbody');
console.log(libraryEl);

ScreenController.init(libraryEl);
