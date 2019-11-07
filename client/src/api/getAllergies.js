export default function getAllergies() {
  return fetch("/api/allergies")
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return arrayToObject(response);
    })
    .then(response => response.json());
}
function arrayToObject(array) {
  const allergyObject = {};
  for (let i = 0; i < array.length; i++) {
    allergyObject[array[i].name] = array[i];
  }
  return allergyObject;
}
