import './styles.scss';
import nav from '../components/nav/nav.js';
import footer from '../components/footer/footer.js';
import Cart from '../components/cart/cart.js'

const cart = () => {
  nav();
  Cart()
  footer();
}
cart();