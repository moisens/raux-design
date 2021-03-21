import './footer.scss';



const footer = () => {
  const body = document.querySelector('body');

  let footer = `
    <footer>
      <p>©2022 www.Raux.d.be</p>
    </footer>
  `;
  return body.innerHTML += footer;
}
export default footer;