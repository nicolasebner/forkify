import View from './View.js';

import previewView from './previewView.js';

class Resultsview extends View {
  _parentElement = document.querySelector('.results');
  _errorMesseage =
    'Es wurde kein Rezept für deine Suche gefunden! 😥 Die Suche funktioniert nur auf Englisch!';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new Resultsview();
