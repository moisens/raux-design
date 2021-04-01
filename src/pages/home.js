import './styles.scss'
import header from '../components/header/header.js';
import about from '../components/about/about.js';
import speakers from '../components/speakers/speakers.js';
import themes from '../components/themesSection/themes.js';
import partners from '../components/partners/partners.js';
import contact from '../components/contact/contact.js';
import footer from '../components/footer/footer.js';


const home = async () => {
  header()
  about();
  await speakers();
  await themes();
  partners();
  contact();
  footer();
}

home();
