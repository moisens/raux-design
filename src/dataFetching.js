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



