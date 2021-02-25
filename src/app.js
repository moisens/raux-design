const fetctData = async () => {
  const res = await fetch('http://localhost:3000/schedules');
  const datas = await res.json();
}

//fetctData();

