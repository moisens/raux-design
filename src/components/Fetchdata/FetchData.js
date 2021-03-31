const FetchData = async (url) => {
  const res = await fetch(url);
  const datas = res.json();
  return datas;
  
  
}

export default FetchData;