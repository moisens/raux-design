const Countdown = () => {
  const leftDays = document.querySelector('.left-days');
  const leftHours = document.querySelector('.left-hour');
  const leftMinutes = document.querySelector('.left-minutes');
  const leftSeconds = document.querySelector('.left-seconds');
  const daysContainer = document.querySelector('.days-container');
  const countMessage = document.querySelector('.count-message');
  let countDownActive;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const countDownValue = new Date('2022-01-13');
  

  countDownActive = setInterval(() => {
    const now = new Date().getTime();
    const daysBeforeEnd = countDownValue - now;

    const days = Math.floor(daysBeforeEnd / day);
    const hours = Math.floor((daysBeforeEnd % day) / hour);
    const minutes = Math.floor((daysBeforeEnd % hour) / minute);
    const seconds = Math.floor((daysBeforeEnd % minute) / second);

    if (daysBeforeEnd < 0) {
      daysContainer.style.display = 'none';
      clearInterval(countDownActive);
      countMessage.textContent = 'The conference has started!'
    } else {
      leftDays.textContent = `${days}`;
      leftHours.textContent = `${hours}`;
      leftMinutes.textContent = `${minutes}`;
      leftSeconds.textContent = `${seconds}`;
    }



  }, second);

  
}

export default Countdown;