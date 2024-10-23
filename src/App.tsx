// @deno-types="@types/react"

import "./App.css";
import ConditionalComponent from "./ConditionalComponent.tsx";

import Fruits from "./Fruits.tsx";

function App() {
  return (
    <>
      <h1>Hello World</h1>
    <ConditionalComponent display={true} />
    </>
  );
}

export default App;
