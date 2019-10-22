export default async function getAllergies() {
  const promise = await fetch("http://localhost:3000/allergies").then(
    response => response.json()
  );
  return promise;
}
