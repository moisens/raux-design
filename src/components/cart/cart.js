import './cart.scss';



const Cart = () => {
  const body = document.querySelector('body');

  let cart = `
    <setion class="cart-container layout">
      <div class="curved-illu-cart">1</div>
      <section class="cart">
      <h2>Cart</h2>
        <div class="cart-content">
          <div class="cart-courses">2</div>
          <div class="cart-course-price">3</div>
        </div>
      </section>
    </setion>
  `;
  return body.innerHTML += cart;
}
export default Cart;