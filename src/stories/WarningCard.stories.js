import React from "react";
import WarningCard from "../components/WarningCard";

export default {
  title: "WarningCard"
};
export function Basic() {
  return <WarningCard />;
}

export function ExampleMilk() {
  return (
    <WarningCard
      src="https://dairyfarmersofcanada.ca/sites/default/files/styles/full_width_large/public/getty-854296650.jpg?itok=oVdN6l2l"
      alt="milk"
      text="I am allergic to milk - to prevent a severe allergic reaction, please make sure my food does not contain any milk!"
    />
  );
}
