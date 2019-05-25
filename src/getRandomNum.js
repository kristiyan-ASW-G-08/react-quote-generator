const getRandomNum = max => {
  const minNum = Math.ceil(1);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};
export default getRandomNum;
