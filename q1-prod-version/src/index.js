import React from "react";
import ReactDOM from "react-dom";

fetch("https://run.mocky.io/v3/35708933-db05-4ad8-998a-320354ad85cb", {
  "method": "GET"
})
.then(response => response.json())
.then(response => {
  const path = `./v${response.version}.js`;
  import(`${path}`).then(({ default: Environment }) =>
  ReactDOM.render(
    <React.StrictMode>
      <Environment />
    </React.StrictMode>,
    document.getElementById("root")
  )
);
})
.catch(err => { console.log(err); 
});