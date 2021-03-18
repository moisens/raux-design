const days = document.querySelector('.schedule-days');
const btns = document.querySelectorAll('.tab-btn');
const schedules = document.querySelectorAll('.schedule-content');

const showSchedule = (e) => {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(btn => {
      btn.classList.remove('active-schedule');
    });
    e.target.classList.add('active-schedule');

    schedules.forEach(schedule => {
      schedule.classList.remove('active-schedule');
    });
    const schedule_day = document.getElementById(id)
    schedule_day.classList.add('active-schedule')
  }
}

days.addEventListener('click', showSchedule);


export default showSchedule;