import theme from '../modules/displayThemes.js';
import mondaySchedule from '../modules/displayMondaySchedule.js';


const init = () => {
  theme();
  mondaySchedule();
}

window.addEventListener('load', init);