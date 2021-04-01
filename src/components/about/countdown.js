const Countdown = () => {
  const leftDays = document.querySelector('.left-days');
  const leftHours = document.querySelector('.left-hour');
  const leftMinutes = document.querySelector('.left-minutes');
  const leftSeconds = document.querySelector('.left-seconds');
  const daysContainer = document.querySelector('.days-container');
  const countMessage = document.querySelector('.count-message');
  

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const countDownValue = new Date('2022-01-13');
  


 
  const now = new Date().getTime();
  const daysBeforeEnd = countDownValue - now;
  const days = Math.floor(daysBeforeEnd / day);
  const hours = Math.floor((daysBeforeEnd % day) / hour);
  const minutes = Math.floor((daysBeforeEnd % hour) / minute);
  const seconds = Math.floor((daysBeforeEnd % minute) / second);


  if (daysBeforeEnd < 0) {
    countMessage.innerHTML = 'The conference has already started!';
    daysContainer.style.display = 'none';
    clearInterval(countdownActive);
    
  } else {
    leftDays.innerHTML = `${days}`
    leftHours.innerHTML = `${hours}`;
    leftMinutes.innerHTML = `${minutes}`;
    leftSeconds.innerHTML = `${seconds}`;
  }


  
}

export default Countdown;