const handleFunctionalities = () => {
  const btns = document.querySelectorAll('.buy');
  const ticketsPass = document.querySelectorAll('.one-pass');

  const handleTicketActive = (e) => {
    if (e.target.classList.contains('one-pass')) return;
    if (e.target.classList.contains('buy')) {
      ticketsPass.forEach(ticket => {
      ticket.classList.remove('ticket-active');
      });
      e.target.classList.add('ticket-active');
    }
  }

  

  
  
  ticketsPass.forEach(ticket => {
    ticket.addEventListener('click', handleTicketActive);
  });
}
export default handleFunctionalities;