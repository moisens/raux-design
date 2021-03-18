import './header.scss';
import nav from '../nav/nav.js';


const header = () => {
  const body = document.querySelector('body');

  let header = `
    <header class="header-container">
    ${nav()}
    </header>
  `
  body.innerHTML = header
}

export default header;
