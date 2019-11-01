import React from "react";
import Picture from "../components/Picture";

export default {
  title: "Picture"
};
export function Basic() {
  return <Picture />;
}

export function ExampleMilk() {
  return (
    <Picture
      src="https://dairyfarmersofcanada.ca/sites/default/files/styles/full_width_large/public/getty-854296650.jpg?itok=oVdN6l2l"
      alt="milk"
    />
  );
}
export function ExampleFish() {
  return (
    <Picture
      src="https://purewows3.imgix.net/images/articles/2016_12/fish_cooking_mistakes_msn.png?auto=format,compress&cs=strip&fit=min&w=600&h=315"
      alt="fish"
    />
  );
}
