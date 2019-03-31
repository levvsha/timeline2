import './styles.styl';
import drawFunction from './demo';

drawFunction();

module.hot.accept('./demo', () => { // eslint-disable-line no-undef
  const newDrawFunction = require('./demo').default;

  document.getElementsByClassName('root')[0].innerHTML = '';

  newDrawFunction();
});
