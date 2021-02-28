import theme from '../modules/displayThemes.js';
import mondaySchedule from '../modules/displayMondaySchedule.js';
import tuesdaySchedule from '../modules/displayTuesdaySchedule.js';
import Wednesday_schedule from '../modules/displayWednesdaySchedule.js';


const init = () => {
  theme();
  mondaySchedule();
  tuesdaySchedule();
  Wednesday_schedule();
}

window.addEventListener('load', init);