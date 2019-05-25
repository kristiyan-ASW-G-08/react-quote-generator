const getData = async url => {
  try {
    const response = await fetch(url);
    const responseData = response.json();
    return responseData;
  } catch (err) {}
};
export default getData;
