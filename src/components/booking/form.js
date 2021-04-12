const validate = () => {
  const inputs = document.querySelectorAll('input');
  const btn = document.querySelector('.form-btn');

  const pattern = {
    firstname:  /^[A-Za-z\W]{2,20}$/,
    lastname: /^[A-Za-z]{2,20}$/,
    email: /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([a-z]{2,5})$/,
    date: /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/
  }

  const validation = (field, regex) => {
    if (regex.test(field.value)) {
      field.className = 'valid';
    } else {
      field.className = 'invalid'
    }
  }

  const handleInput = (e) => {
    validation(e.target, pattern[e.target.attributes.name.value])
  }
  
  inputs.forEach(input => {
    input.addEventListener('keyup', handleInput);
  })
}
export default validate;