export const fetchThemesData = async () => {
  const res = await fetch('http://localhost:3000/themes');
  const themes = await res.json();
  return themes;
  
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