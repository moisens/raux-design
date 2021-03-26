import './cart.scss';
import curvedIlluReverse from '../../images/curvedIlluReverse.svg'; 


const Cart = () => {
  const body = document.querySelector('body');

  let cart = `
    <div class="cart-container layout">
      <div class="curved-illu-cart">
        <img src="${curvedIlluReverse}" alt="curved illustration cart" />
      </div>
      <section class="cart">
        <h2>Cart</h2>
        <div class="cart-content">
          <div class="cart-courses">
            <!--One Course-->
            <div class="one-course-bought">
              <div class="image-course">1</div>
              <div class="text-price-trash">
                <h4>Usability testing</h4>
                <p>Nail jelly to the hothouse wall execut.</p>
                <div class="price-trash-inc">
                  <p class="price-item">€130</p>
                  <p class="increase-decrease"><span class="increase">+</span>2<sapn class="decrease">-</sapn></p>
                  <p>🗑️</p>
                </div>
              </div>
            </div>
            <!--End One Course-->
            
          </div>
          <div class="cart-course-price">3</div>
        </div>
      </section>
    </div>
  `;
  return body.innerHTML += cart;
}
export default Cart;