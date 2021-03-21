import './contact.scss';



const contact = () => {
  const body = document.querySelector('body');

  let contact = `
    <section class="contact-container layout">
      <h2>Contact</h2>
    </section>
  `;
  return body.innerHTML += contact;
}
export default contact;