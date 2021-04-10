const handleFunctionalities = () => {
  const btns = document.querySelectorAll('.buy');
  const ticketsPass = document.querySelectorAll('.one-pass');
  

  const handleTicketActive = (e) => {
    //handling btn active
    if (e.target.classList.contains('buy')) {
      btns.forEach(ticket => {
        ticket.classList.remove('btn-active');
      });
      e.target.classList.add('btn-active');
      //handling pass active
      ticketsPass.forEach(pass => {
        pass.classList.remove('ticket-active');
      });
      e.target.parentElement.classList.add('ticket-active');
    
      
    }

  }

  
  ticketsPass.forEach(ticket => {
    ticket.addEventListener('click', handleTicketActive);
  });


  const getPassData = () => {
    btns.forEach(ticket => {
      ticket.addEventListener('click', (e) => {
        
      });
    })
  }
  getPassData();

}
export default handleFunctionalities;