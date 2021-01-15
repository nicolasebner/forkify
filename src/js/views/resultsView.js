import View from './View.js';

import previewView from './previewView.js';

class Resultsview extends View {
  _parentElement = document.querySelector('.results');
  _errorMesseage =
    'Es wurde leider kein Rezept gefunden für deine Suche! 😥😥😥';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new Resultsview();
