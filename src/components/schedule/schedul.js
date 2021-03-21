import './schedul.scss';


const scheduling = () => {
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
          111
        </div>
      </div>
    </section>
  `;
  return body.innerHTML += agenda;
}
export default scheduling;



