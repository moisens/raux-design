
const NavActive = () => {
  const links = document.querySelectorAll('li a');
  console.log(links);
 
  const handleActive = (e) => {
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