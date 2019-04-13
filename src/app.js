import './styles.styl';
import drawFunction from './demo';

new drawFunction();

module.hot.accept('./demo', () => { // eslint-disable-line no-undef
  const NewDrawFunction = require('./demo').default;

  document.getElementsByClassName('root')[0].innerHTML = '';

  new NewDrawFunction();
});
