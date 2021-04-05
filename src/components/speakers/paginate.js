const paginate = (speakerList) => {
  const itemsPerPage = 3;
  const numberOfPages = Math.ceil(speakerList.length / itemsPerPage);
  console.log(numberOfPages);
  const numberOfSpeakerPerPage = Array.from({length:numberOfPages}, (_,index)=> {
    const start = index * itemsPerPage;
    return speakerList.slice(start, start + itemsPerPage);
  });
  console.log('nbrPage', numberOfSpeakerPerPage);
  return numberOfSpeakerPerPage;

}
export default paginate;