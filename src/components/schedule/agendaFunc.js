const agendaEvent = () => {
  const scheduleDays = document.querySelector('.schedule-days');
  const btns = document.querySelectorAll('.day-btn');
  const scheduleContent = document.querySelectorAll('.day-content');

  const handleActiveSchedule = (e) => {
    //e.preventDefault();
    const id = e.target.dataset.id;
    console.log(id);
    if (id) {
      //Adding and removing active class on btn
      btns.forEach(btn => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');

      //Adding active class on article-content
      scheduleContent.forEach(article => {
        article.classList.remove('active');
      });
      const element = document.getElementById(id);
      element.classList.add('active');

    }
  }
  
  scheduleDays.addEventListener('click', handleActiveSchedule);
  
}

export default agendaEvent;