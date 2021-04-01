import './speakers.scss';
import displaySpeaker from './displaySpeakers.js'



const speakers = async () => {
  const body = document.querySelector('body');

  let speaker = `
    <section class="speaker-container layout">
      <h2>Speakers</h2>
      <!--Speakers will be fetched and displayed dynamically-->

      <!--Button div will be added dynamically too-->
    </section>
  `;
  body.innerHTML += speaker;

  const allSpeakers = document.querySelector('.speaker-container');
  allSpeakers.innerHTML += await displaySpeaker();



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