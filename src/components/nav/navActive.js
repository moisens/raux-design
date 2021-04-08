
const NavActive = () => {
  const links = document.querySelectorAll('ul li a');
  //console.log(links);

  //const logo = document.querySelector('.logo');
  //console.log(logo);
  //logo.style.color = 'blue'

   
const handleActive = (e) => {
  //e.preventDefault();
  links.forEach(link => {
    link.classList.remove('active');
  });
  e.target.classList.add('active');
  
  
}


links.forEach(link => {
  link.addEventListener('click', handleActive);
});
 
  

}
export default NavActive;