const Countdown = () => {
  const daysContainer = document.querySelector('.days-container');
  const countMessage = document.querySelector('.count-message');
  const timeEl = document.querySelectorAll('.days-container div p');
  
  

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

  const values = [days, hours, minutes, seconds];
  

  const timeFormat = (timeEl) => {
    if (timeEl < 10) {
      return timeEl = `0${timeEl}`;
    }
    return timeEl;
  }
  


  if (daysBeforeEnd < 0) {
    countMessage.innerHTML = 'The conference has already started!';
    daysContainer.style.display = 'none';
    //clearInterval(countdownActive);
    
  } else {
    timeEl.forEach((item, index) => {
      item.innerHTML = timeFormat(values[index])
    });
  }


  
}

export default Countdown;