const FetchData = async () => {
  const res = await fetch('http://localhost:3001/themes');
  const datas = res.json();
  console.log(datas);

  return datas;
  
  
}

export default FetchData;