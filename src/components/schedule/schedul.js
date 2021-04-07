import './schedul.scss';
import { 
  displayMonday, 
  displayTuesday, 
  displayWednesday, 
  displayThursday, 
  displayFriday ,
  displayNextMonday
} from './displayDays.js';
import agendaEvent from './agendaFunc.js';


const scheduling = async () => {
  const body =  document.querySelector('body');

  let agenda = `
    <section class="schedule-container layout">
      <div class="schedule-text-image">
        <div class="schedule-text">
          <h2>Six days of User Research And Ux Design.</h2>
          <p>
            Big picture market-facing, for pro-sumer software i'll book a meeting so we can solution this before the sprint is over for beef up going forward. Incentivization five-year strategic plan churning anomalies we’re starting to formalize flexible opinions around our foundations so on your plate.
          </p>
        </div>
        <div class="schedule-image">
          <img src="" alt="image schedule" alt="Schedule">
        </div>
      </div>
      <div class="illutrated-picture">
        <div class="schedule-days">
          <div class="days-link-container">
            <button class="monday day-btn active" data-id="monday">Mon 03 Jan</button>
            <button class="day-btn" data-id="tuesday">Tue 04 Jan</button>
            <button class="day-btn" data-id="wednesday">Wed 05 Jan</button>
            <button class="day-btn" data-id="thursday">Thu 06 Jan</button>
            <button class="day-btn" data-id="friday">FRI 07 Jan</button>
            <button class="next-mond day-btn" data-id="nextMonday">Mon 10 Jan</button>
          </div>
          <article class="days-content-agenda">
            <!--Monday-->
            <article class="day-content lundi active" id="monday"></article>  
            <!--End Monday-->
            <!--Tuesday-->
            <article class="day-content mardi" id="tuesday"></article>
            <!--End Tuesday-->
            <!--Wednesday-->
            <article class="day-content mercredi" id="wednesday"></article>
            <!--End Wednesday-->
            <!--Thursday-->
            <article class="day-content jeudi" id="thursday"></article>
            <!--End Thursday-->
            <!--Friday-->
            <article class="day-content vendredi" id="friday"></article>
            <!--End Friday-->
            <!--Next Monday-->
            <article class="day-content next-lundi" id="nextMonday"></article>
            <!--End Next Monday-->
          </article>
        </div>
      </div>
    </section>
  `;
  body.innerHTML += agenda;

  const lundi = document.querySelector('.lundi');
  lundi.innerHTML = await displayMonday();

  const mardi = document.querySelector('.mardi');
  mardi.innerHTML = await displayTuesday();

  const mercredi = document.querySelector('.mercredi');
  mercredi.innerHTML = await displayWednesday();

  const jeudi = document.querySelector('.jeudi');
  jeudi.innerHTML = await displayThursday();

  const vendredi = document.querySelector('.vendredi');
  vendredi.innerHTML = await displayFriday();

  const nextLundi = document.querySelector('.next-lundi');
  nextLundi.innerHTML = await displayNextMonday();

  agendaEvent();

}
export default scheduling;