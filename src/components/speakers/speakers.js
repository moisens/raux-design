import './speakers.scss';
import { fetchSpeakers } from '../Fetchdata/FetchData.js';
import displaySpeaker from './displaySpeakers.js'
import paginate from './paginate.js';
import displayButton from './displayButtons.js';


const speakers = () => {
  const body = document.querySelector('body');

  let speaker = `
    <section class="speaker-container layout">
      <h2>Speakers</h2>
      <!--Speakers will be fetched and displayed dynamically-->
      <!--Button div will be added dynamically too-->
    </section>
  `;
  body.innerHTML += speaker;

  let index = 0;
  let pages = [];

  const setupUi = () => {
    displaySpeaker(pages[index]);
    const btnContainer = document.querySelector('.page');
    displayButton(btnContainer, pages, index);
    

  }

  const init = async () => {
    const speakerList = await fetchSpeakers();
    pages = paginate(speakerList);
    setupUi();
    
  }

  

  

  window.addEventListener('load', init);



}
export default speakers;


/*
<!--pagination-->
      <div class="page">
        <button>PREV</button>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <button>NEXT</button>
      </div>
*/