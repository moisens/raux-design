const validate = () => {
  const inputs = document.querySelectorAll('input');
  const btn = document.querySelector('.form-btn');
  const leftSeats = document.querySelector('.seat-left p');
  let seats = 200;
  
  
  btn.disabled = true;
  if (btn.disabled === true) {
    btn.style.backgroundColor = '#8b1f9394'
  } else {
    btn.style.backgroundColor = 'yellow'
  }

  const pattern = {
    firstname:  /^[A-Za-z\W]{2,20}$/,
    lastname: /^[A-Za-z]{2,20}$/,
    email: /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([a-z]{2,5})$/,
    date: /^\d{4}\-\d{1,2}\-\d{1,2}$/
  }

  const validation = (field, regex) => {
    if (regex.test(field.value)) {
      field.classList = 'valid';
      if (inputs[3].classList.contains('valid')) {
        btn.disabled = false;
        btn.style.backgroundColor = '#8B1F93';
      }
      
    } else {
      field.classList = 'invalid';
      
    }
  }

  const handleInput = (e) => {
    validation(e.target, pattern[e.target.attributes.name.value]);
  }
  
  inputs.forEach(input => {
    input.addEventListener('keyup', handleInput);
  })

  
  const handleClickBook = (e) => {
    e.preventDefault();
    seats--;
    // /!\add pop up functionality for payment!
     
    leftSeats.innerHTML = `${seats} seats left`
  }
  leftSeats.innerHTML = `${seats} seats left`

  btn.addEventListener('click', handleClickBook);

}
export default validate;