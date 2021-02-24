const fetctData = async () => {
  const res = await fetch('http://localhost:3000/training');
  const data = await res.json();
  console.log(data);
  data.map(item => {
    const content = item.content;
    content.map(item => {
      console.log(item)
    })
  })
}

//fetctData();

