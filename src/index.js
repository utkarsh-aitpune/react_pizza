import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div>
      <h1>hello from pizza</h1>;
      <Pizza />
    </div>
  );
}

function Pizza() {
  return <h1>hello from pizza</h1>;
}
