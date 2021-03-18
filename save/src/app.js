import theme from '../modules/displayThemes.js';
import mondaySchedule from '../modules/displayMondaySchedule.js';
import tuesdaySchedule from '../modules/displayTuesdaySchedule.js';
import Wednesday_schedule from '../modules/displayWednesdaySchedule.js';
import thursdaySchedule from '../modules/displayThursdaySchedule.js';
import fridaySchedule from '../modules/displayFridaySchedule.js';
import nextMondaySchedule from '../modules/displayNextMondaySchedule.js';
//import showSchedule from '../modules/sheduleTab.js'
import displayBook from '../modules/displayBooking.js';
import displayTraining from '../modules/displayTraining.js';

//showSchedule;

const init = () => {
  theme();
  mondaySchedule();
  tuesdaySchedule();
  Wednesday_schedule();
  thursdaySchedule();
  fridaySchedule();
  nextMondaySchedule();
  displayBook();
  displayTraining();



}

window.addEventListener('load', init);








