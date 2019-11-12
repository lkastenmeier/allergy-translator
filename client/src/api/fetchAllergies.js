// Fetch Data "allergies" from server

export default async function fetchAllergies() {
  //fetch Data
  const allergies = await fetch("/api/allergies").then(response =>
    response.json()
  );
  return arrayToObject(allergies);
}
function arrayToObject(array) {
  //change Datastructure from Array to Object for further use
  const allergyObject = {};
  for (let i = 0; i < array.length; i++) {
    allergyObject[array[i].name] = array[i];
  }
  return allergyObject;
}
