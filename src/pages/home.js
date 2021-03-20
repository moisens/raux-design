import './styles.scss'
//import nav from '../components/nav/nav.js';
import header from '../components/header/header.js';
import about from '../components/about/about.js';
import speakers from '../components/speakers/speakers.js';

const home = () => {
  //nav();
  header()
  about();
  speakers();
}
home();

