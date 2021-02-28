import theme from '../modules/displayThemes.js';
import mondaySchedule from '../modules/displayMondaySchedule.js';
import tuesdaySchedule from '../modules/displayTuesdaySchedule.js';
import Wednesday_schedule from '../modules/displayWednesdaySchedule.js';
import thursdaySchedule from '../modules/displayThursdaySchedule.js';
import fridaySchedule from '../modules/displayFridaySchedule.js';



const init = () => {
  theme();
  mondaySchedule();
  tuesdaySchedule();
  Wednesday_schedule();
  thursdaySchedule();
  fridaySchedule();


  
}

window.addEventListener('load', init);