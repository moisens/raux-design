const id = new URLSearchParams(window.location.search).get('id');
console.log(id);

export const displayDetail = async () => {
  
  const res = await fetch('http://localhost:3001/trainings');
  const training = await res.json();
  console.log(training);

  return training;
 
}


