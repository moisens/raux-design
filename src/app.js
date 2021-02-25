const fetctData = async () => {
  const res = await fetch('http://localhost:3000/wednesday');
  const datas = await res.json();
  
  datas.map(item => {
    const { id, title, body } = item;
    console.log(id, title, body);
  })
  
}

fetctData();

