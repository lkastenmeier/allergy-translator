export default async function getAllergies() {
  const promise = await fetch("http://localhost:8080/api/allergydata").then(
    response => response.json()
  );
  return promise;
}
