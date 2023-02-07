const GetServerTime = async () => {
  const serverTime = await ping.getTime();
  const diffTime = moment
    .duration(moment().diff(moment(serverTime.data.getTime().data)))
    .asSeconds();
  if (diffTime < 60) {
    localStorage.setItem('diff-time', 0);
  } else {
    localStorage.setItem('diff-time', Math.floor(diffTime));
  }
};

//   localTime(value){
//     const localTime = localStorage.getItem('diff-time')
//     return moment(value).add(localTime, 'm').format('YYYY-MM_DD HH:mm:ss')
// }
