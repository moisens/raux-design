import { fetchThemesData } from '../src/dataFetching.js';

const articleTheme = document.querySelector('.article-grid');


const theme = async () => {
  try {
    const themes = await fetchThemesData();
    const newThemes = themes.map(theme => {
    const { image, title, body } = theme;
    return `
      <article>
        <img src="${image}" alt="${title}" title="${title}">
        <h4>${title}</h4>
        <p>${body}</p>
      </article>
    `;
  }).join('');

  articleTheme.innerHTML = newThemes;
  } catch (error) {
    console.log('unable to fetch the data');
    
  }
  
}


export default theme;