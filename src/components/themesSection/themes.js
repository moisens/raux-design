import './themes.scss';
import curvedIlluReverse from '../../images/curvedIlluReverse.svg';
import usability1 from '../../images/usability1.jpg';



const themes = () => {
  const body = document.querySelector('body');

  let theme = `
    <section class="themes-container layout">
      <div class="curved-illu-themes">
        <img src="${curvedIlluReverse}" alt="Curved-Illustration"/>
      </div>
      <h2>Themes</h2>
      <div class="all-themes-content">
      <!--First Theme-->
        <div class="one-theme">
          <div class="theme-image">
            <img src="${usability1}" alt="usability1" title="Usability testing"/>
          </div>
          <h3>Usability testing</h3>
          <p>
            The last person we talked to said this would be 
            ready synergestic actionables nor this medium 
            needs to be more dynamic.
          </p>
        </div>
      <!--End First Theme-->
      <!--First Theme-->
        <div class="one-theme">
          <div class="theme-image">
            <img src="${usability1}" alt="usability1" title="Usability testing"/>
          </div>
          <h3>Usability testing</h3>
          <p>
          The last person we talked to said this would be 
          ready synergestic actionables nor this medium 
          needs to be more dynamic.
          </p>
        </div>
      <!--End First Theme-->
      <!--First Theme-->
        <div class="one-theme">
          <div class="theme-image">
            <img src="${usability1}" alt="usability1" title="Usability testing"/>
          </div>
          <h3>Usability testing</h3>
          <p>
          The last person we talked to said this would be 
          ready synergestic actionables nor this medium 
          needs to be more dynamic.
          </p>
        </div>
      <!--End First Theme-->
      <!--First Theme-->
        <div class="one-theme">
          <div class="theme-image">
            <img src="${usability1}" alt="usability1" title="Usability testing"/>
          </div>
          <h3>Usability testing</h3>
          <p>
          The last person we talked to said this would be 
          ready synergestic actionables nor this medium 
          needs to be more dynamic.
          </p>
        </div>
      <!--End First Theme-->
      <!--First Theme-->
        <div class="one-theme">
          <div class="theme-image">
            <img src="${usability1}" alt="usability1" title="Usability testing"/>
          </div>
          <h3>Usability testing</h3>
          <p>
          The last person we talked to said this would be 
          ready synergestic actionables nor this medium 
          needs to be more dynamic.
          </p>
        </div>
      <!--End First Theme-->
      <!--First Theme-->
        <div class="one-theme">
          <div class="theme-image">
            <img src="${usability1}" alt="usability1" title="Usability testing"/>
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
  `;
  return body.innerHTML += theme;
}
export default themes;