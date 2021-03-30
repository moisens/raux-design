import './themes.scss';
import curvedIlluReverse from '../../images/curvedIlluReverse.svg';
import FetchData from '../Fetchdata/FetchData.js';


const themes = async () => {
  const body = document.querySelector('body');

  const section = document.createElement('section');
  section.classList.add('themes-container');
  section.classList.add('layout');

  const illu = document.createElement('div');
  illu.classList.add('curved-illu-themes');

  const img = document.createElement('img');
  img.src = curvedIlluReverse;
  illu.appendChild(img);
  console.log(illu);

  const div = document.createElement('div');
  div.classList.add('all-themes-content')
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
    div.innerHTML = newThemes;
    section.append(illu,div)
    body.appendChild(section)
  
  return body;
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