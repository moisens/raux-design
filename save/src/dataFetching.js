const fetchContoller = new AbortController();

export const fetchThemesData = async () => {
  try {
    const { signal } = fetchContoller;
    let time = setTimeout(() => {
      fetchContoller.abort();
      console.log('Fetching themes aborted');
    },3000);
    const res = await fetch('http://localhost:3000/themes', { signal });
    const themes = await res.json();
    clearTimeout(time);
    console.log('we got the themes data');
    return themes;
  } catch (err) {
    if (err.name === 'AbortError') {
      console.log('Fetch aborted');
    } else {
      console.error('Uh oh, an error!', err);
    }
  }
  
}


export const fetchMondayData = async () => {
  const res = await fetch('http://localhost:3000/monday');
  const monday = await res.json();
  return monday;
}


export const fetchTuesdayData = async () => {
  const res = await fetch('http://localhost:3000/tuesday');
  const tuesday = await res.json();
  return tuesday;
}


export const fetchWednesdayData = async () => {
  const res = await fetch('http://localhost:3000/wednesday');
  const wednesday = await res.json();
  return wednesday;
}


export const fetchThursdayData = async () => {
  const res = await fetch('http://localhost:3000/thursday');
  const thursday = await res.json();
  return thursday;
}


export const fechtFridayData = async () => {
  const res = await fetch('http://localhost:3000/friday');
  const friday = await res.json();
  return friday;
}


export const fetchNextMondayData = async () => {
  const res = await fetch('http://localhost:3000/nextmonday');
  const next_monday = await res.json();
  return next_monday;
}


export const fetchBookingData = async () => {
  const res = await fetch('http://localhost:3000/bookings');
  const booking = await res.json();
  return booking;
}


export const fetchTrainingData = async () =>{
  const res = await fetch('http://localhost:3000/trainings');
  const training = await res.json();
  return training;
}