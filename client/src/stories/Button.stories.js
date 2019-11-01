import React from "react";
import Button from "../components/Button";
import DownloadIcon from "../icons/downloadIcon";

export default {
  title: "Button"
};
export function Basic() {
  return <Button name="test" />;
}

export function ExampleDownload() {
  return (
    <Button name="Download">
      <DownloadIcon />
    </Button>
  );
}
