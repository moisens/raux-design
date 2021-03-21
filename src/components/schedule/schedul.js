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
            <article class="day-content active" id="monday">
              <div class="d-day-agenda ">
                <div class="talk-day-img">
                  <img src="" alt="">
                </div>
                <div class="about-talk">
                  <h3>Leoplolde Ouellet</h3>
                  <h5>Usability testing</h5>
                  <p>
                    Enough to wash your face low-hanging fruit, nor workflow ecosystem 
                    yet show pony, yet commitment to the cause for high touch client. 
                    Imagineer big picture and driving the initiative forward nor teams 
                    were able to drive adoption and awareness pixel pushing.
                  </p>
                </div>
              </div>
            </article>  
            <!--End Monday-->
            <!--Tuesday-->
            <article class="day-content" id="monday">
              <div class="d-day-agenda">
                <div class="talk-day-img">
                  <img src="" alt="">
                </div>
                <div class="about-talk">
                  <h3>Stewie Griffin</h3>
                  <h5>User research</h5>
                  <p>
                    Enough to wash your face low-hanging fruit, nor workflow ecosystem 
                    yet show pony, yet commitment to the cause for high touch client. 
                    Imagineer big picture and driving the initiative forward nor teams 
                    were able to drive adoption and awareness pixel pushing.
                  </p>
                </div>
              </div>
              <div class="d-day-agenda">
                <div class="talk-day-img">
                  <img src="" alt="">
                </div>
                <div class="about-talk">
                  <h3>Stewie Griffin</h3>
                  <h5>User research</h5>
                  <p>
                    Enough to wash your face low-hanging fruit, nor workflow ecosystem 
                    yet show pony, yet commitment to the cause for high touch client. 
                    Imagineer big picture and driving the initiative forward nor teams 
                    were able to drive adoption and awareness pixel pushing.
                  </p>
                </div>
              </div>
            </article>
            <!--End Tuesday-->
          </article>
        </div>
      </div>
    </section>
  `;
  return body.innerHTML += agenda;
}
export default scheduling;



