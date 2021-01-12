import React from "react";

console.log("NOTE: This should only appear in the app build bundle");

export default function App() {
  console.log("NOTE: This should only appear in the app build bundle");
  return (
    <div>
      <h1>Version 2</h1>
      <p>This is an example container for the main version 2 of the application</p>
    </div>
  );
}