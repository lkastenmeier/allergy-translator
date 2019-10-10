import React from "react";
import Button from "../components/Button";
import DownloadIcon from "../icons/downloadIcon";

export default {
  title: "Button"
};
export function Basic() {
  return <Button active={true} />;
}

export function ExampleDownload() {
  return (
    <Button active={true} name="Download">
      <DownloadIcon />
    </Button>
  );
}
export function ExampleDownloadInactive() {
  return (
    <Button active={false} name="Download">
      <DownloadIcon />
    </Button>
  );
}
export function ExampleChange(tet) {
  return <Button active={true} name="Suggest Change"></Button>;
}
export function ExampleChangeInactive(tet) {
  return <Button active={false} name="Suggest Change"></Button>;
}
