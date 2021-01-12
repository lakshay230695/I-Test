import React from "react";

console.log("NOTE: This should only appear in the test build bundle");

export default function Test() {
  console.log("NOTE: This should only appear in the test build bundle");
  return (
    <div>
      <h1>Version 1</h1>
      <p>This is an example container for the legacy version 1 of the application</p>
    </div>
  );
}
