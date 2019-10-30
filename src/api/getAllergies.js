export default async function getAllergies() {
  const allergies = await fetch("http://localhost:8080/api/allergies").then(
    response => response.json()
  );
  return arrayToObject(allergies);
}
function arrayToObject(array) {
  const allergyObject = {};
  for (let i = 0; i < array.length; i++) {
    allergyObject[array[i].name] = array[i];
  }
  return allergyObject;
}
