import React from "react";
import AllergySelection from "../components/AllergySelection/AllergySelection";

export default {
  title: "AllergySelection"
};
export function Basic() {
  return <AllergySelection />;
}
export function Example() {
  return (
    <AllergySelection
      name={"milk"}
      src={
        "https://dairyfarmersofcanada.ca/sites/default/files/styles/full_width_large/public/getty-854296650.jpg?itok=oVdN6l2l"
      }
    ></AllergySelection>
  );
}
