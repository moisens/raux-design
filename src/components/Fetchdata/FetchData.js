export const fetchSpeakers = async () => {
  const res = await fetch('http://localhost:3001/speakers');
  const speakers = res.json();
  return speakers
}




const FetchData = async (url) => {
  const res = await fetch(url);
  const datas = res.json();
  return datas;
  
  
}

export default FetchData;