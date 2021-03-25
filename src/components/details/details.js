import './details.scss';
import cuvedForm from '../../images/cuvedForm.svg';


const Details = () => {
  const body = document.querySelector('body');

  let details = `
    <section class="details-container layout">
    <!--Article one-->
      <article class="detail-course">
        <div class="title-arrow">
          <button class="arrow">←</button>
          <h2>Usability testing</h2>
        </div>
        <div class="image-detail">
          <img src="" alt="image detail" title="img detail"/>
        </div>
        <div class="content-price-rating">
          <div class="content-price">
            <p>Content: 35hours</p>
            <p>Price: €130</p>
          </div>
          <p class="star">4.7<span class="rating">★★★★☆</span></p>
        </div>
        <div class="course-texts">
          <p>
            Put your feelers out message the initiative into the weeds single wringable neck shoot me an email currying favour ping me. I know you're busy. Shoot me an email feed the algorithm low-hanging fruit vertical integration, yet criticality please advise soonest. Feature creep powerPointless, yet after I ran into Helen at a restaurant, I realized she was just office pretty to be inspired is to become creative, innovative and energized we want this philosophy to trickle down to all our stakeholders yet we need to leverage our synergies mumbo jumbo.
          </p>
        </div>
      </article>
      <!--End Article one-->
      <!--Article Two-->
      <article class="course-content-details">
        <h2>Course content</h2>
        <div class="all-content">
          <!--content one-->
          <article class="single-detail">
            <!--title content-->
            <div class="detail-title">
              <h4>Title of content</h4>
              <button type="button" class="course-btn">
                <span class="plus-icon"><div>+</div></span>
                <span class="minus-icon"><div>-</div></span>
              </button>
            </div>
            <!--End title content-->
            <!--text content-->
            <div class="detail-text">
              <p>
              Commitment to the cause . Create spaces to explore what’s next vec, churning anomalies. Synergestic actionables. Flesh that out c-suite. Put your feelers out message the initiative into the weeds single wringable neck shoot me an email currying favour ping me. I know you're busy.
              </p>
            </div>
            <!--End text content-->
          </article>
          <!--End content one-->
          <!--content one-->
          <article class="single-detail">
            <!--title content-->
            <div class="detail-title">
              <h4>Title of content</h4>
              <button type="button" class="course-btn">
                <span class="plus-icon"><div>+</div></span>
                <span class="minus-icon"><div>-</div></span>
              </button>
            </div>
            <!--End title content-->
            <!--text content-->
            <div class="detail-text">
              <p>
              Commitment to the cause . Create spaces to explore what’s next vec, churning anomalies. Synergestic actionables. Flesh that out c-suite. Put your feelers out message the initiative into the weeds single wringable neck shoot me an email currying favour ping me. I know you're busy.
              </p>
            </div>
            <!--End text content-->
          </article>
          <!--End content one-->
          <!--content one-->
          <article class="single-detail">
            <!--title content-->
            <div class="detail-title">
              <h4>Title of content</h4>
              <button type="button" class="course-btn">
                <span class="plus-icon"><div>+</div></span>
                <span class="minus-icon"><div>-</div></span>
              </button>
            </div>
            <!--End title content-->
            <!--text content-->
            <div class="detail-text">
              <p>
              Commitment to the cause . Create spaces to explore what’s next vec, churning anomalies. Synergestic actionables. Flesh that out c-suite. Put your feelers out message the initiative into the weeds single wringable neck shoot me an email currying favour ping me. I know you're busy.
              </p>
            </div>
            <!--End text content-->
          </article>
          <!--End content one-->
        </div>
        <div class="btn-detail-add">
          <button>ADD TO CART</button>
        </div>
      </article>
      <!--End Article Two-->
      <div class="curved-illustration-details">
        <img src="${cuvedForm}" alt="curved-illustration"/>
      </div>
    </section>
  `;
  return body.innerHTML += details;
}
export default Details;
