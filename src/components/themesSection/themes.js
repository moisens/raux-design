import './themes.scss';
import curvedIlluReverse from '../../images/curvedIlluReverse.svg';
import FetchData from '../Fetchdata/FetchData.js';


const Cards = async () => {
  const url = 'http://localhost:3001/themes';
  const themes = await FetchData(url);
  
    const newThemes = themes.map(theme => {
      const { image, title, body } = theme;
      return`
        <div class="one-theme">
          <div class="theme-image">
            <img src="${image}" alt="${title}" title="${title}"/>
          </div>
          <h3>${title}</h3>
          <p>${body}</p>
        </div>
      `;
    }).join('');
    return newThemes;
}


const themes = async () => {
  const body = document.querySelector('body');

  let theme = `
  <section class="themes-container layout">
    <div class="curved-illu-themes">
      <img src="${curvedIlluReverse}" alt="Curved-Illustration"/>
    </div>
    <h2>Themes</h2>
    <div class="all-themes-content">
      <!--Code will be dynamically injected after being fetched-->
    </div>
  </section>
  `;
  
  body.innerHTML += theme;

  const init = async () => {
    const card = document.querySelector('.all-themes-content');
    card.innerHTML = await Cards();
  }


  window.addEventListener('load', init)


}




export default themes;