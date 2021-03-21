import './styles.scss'
//import nav from '../components/nav/nav.js';
import header from '../components/header/header.js';
import about from '../components/about/about.js';
import speakers from '../components/speakers/speakers.js';
import themes from '../components/themesSection/themes.js';
import partners from '../components/partners/partners.js';


const home = () => {
  //nav();
  header()
  about();
  speakers();
  themes();
  partners();
}
home();

