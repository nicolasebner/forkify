import View from './View.js';

import icons from 'url:../../img/icons.svg';

class Resultsview extends View {
  _parentElement = document.querySelector('.results');
  _errorMesseage =
    'Es wurde leider kein Rezept gefunden für deine Suche! 😥😥😥';
  _message = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    return `
    <li class="preview">
        <a class="preview__link" href="#${result.id}">
        <figure class="preview__fig">
            <img src="${result.image}" alt="${result.title}" />
        </figure>
        <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
        </div>
        </a>
    </li>
`;
  }
}

export default new Resultsview();
