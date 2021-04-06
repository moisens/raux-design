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
      <div class="all-speaker-content">
        <!--Speakers will be fetched and displayed dynamically-->
      </div>
      <!--Button div will be added dynamically too-->
      <div class="page">BTNS</div>
    </section>
  `;
  body.innerHTML += speaker;

  let index = 0;
  let pages = [];
  const btnContainer = document.querySelector('.page');

  const setupUi = () => {
    displaySpeaker(pages[index]);
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