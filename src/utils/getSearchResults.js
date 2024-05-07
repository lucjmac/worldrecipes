const getResults = async (query) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/${query}`
  );
  const data = await response.json();
  return data;
};

export default getResults;