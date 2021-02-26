export const fetchThemesData = async () => {
  const res = await fetch('http://localhost:3000/themes');
  const themes = await res.json();
  return themes;
  
}



