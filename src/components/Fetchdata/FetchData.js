const FetchData = async () => {
  const res = await fetch('http://localhost:3001/speakers');
  const datas = res.json();
  return datas;
  
  
}

export default FetchData;