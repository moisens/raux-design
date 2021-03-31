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

  const card = document.querySelector('.all-themes-content');
  card.innerHTML = await Cards();


}




export default themes;


/*
const themes = await FetchData();
    console.log('THEME', themes);
  
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
*/


/*
<section class="themes-container layout">
      <div class="curved-illu-themes">
        <img src="${curvedIlluReverse}" alt="Curved-Illustration"/>
      </div>
      <h2>Themes</h2>
      <div class="all-themes-content">
      <!--First Theme-->
        <div class="one-theme">
          <div class="theme-image">
            <img src="" alt="usability1" title="Usability testing"/>
          </div>
          <h3>Usability testing</h3>
          <p>
            The last person we talked to said this would be 
            ready synergestic actionables nor this medium 
            needs to be more dynamic.
          </p>
        </div>
      <!--End First Theme-->
      </div>
    </section>
*/


/*
 const section = document.createElement('section');
  section.classList.add('themes-container');
  section.classList.add('layout');

  const illu = document.createElement('div');
  illu.classList.add('curved-illu-themes');

  const img = document.createElement('img');
  img.src = curvedIlluReverse;
  illu.appendChild(img);

  const h2 = document.createElement('h2');
  h2.innerHTML = 'Themes';

  const div = document.createElement('div');
  div.classList.add('all-themes-content')

  const displayCards = async () => {
    const themes = await FetchData();
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
  
    div.innerHTML = displayCards();
    section.append(illu, h2, div)
    body.appendChild(section)
*/


