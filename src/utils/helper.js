export function filterData(searchTxt, restaurants) {
  return restaurants.filter((restaurants) =>
    restaurants.data.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
}