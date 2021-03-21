import './partners.scss';
import curvedIlluReverse from '../../images/curvedIlluReverse.svg';
import logoAdobe from '../../images/logoAdobe.png';
import logoBxlFormation from '../../images/logoBxlFormation.png'
import logoFwb from '../../images/logoFwb.png';
import kbcLogo from '../../images/kbcLogo.png';


const partners = () => {
  const body = document.querySelector('body');

  let partner = `
    <section class="partners-container layout">
      <div class="cuved-illu-partners">
        <img src="${curvedIlluReverse}" alt="Curved Illustration">
      </div>
      <div class="all-partners">
        <div class="adobe">
          <img src="${logoAdobe}" alt="logo-Adobe" title="Adobe">
        </div>
        <div class="fwb">
          <img src="${logoFwb}" alt="logo-fwb" title="Federation Wallonie Bruxelles">
        </div>
        <div class="bfm">
          <img src="${logoBxlFormation}" alt="logo-bfm" title="Buxelles Formation">
        </div>
        <div class="kbc">
          <img src="${kbcLogo}" alt="logo-kbc" title="KBC">
        </div>
      </div>
    </section>
  `;
  return body.innerHTML += partner;
}
export default partners;