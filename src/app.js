import theme from '../modules/displayThemes.js';
import mondaySchedule from '../modules/displayMondaySchedule.js';
import tuesdaySchedule from '../modules/displayTuesdaySchedule.js'

const init = () => {
  theme();
  mondaySchedule();
  tuesdaySchedule();
}

window.addEventListener('load', init);