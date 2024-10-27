type Props = {};
import { useState } from "react";
export default function Counter({}: Props) {
  const [Count, setCount] = useState(0);
  const [incrementBy, setIncreamentBy] = useState(1);

  function Counter() {
    setCount(Count + incrementBy);
  }

  function incrementbycoff() {
    setIncreamentBy(incrementBy + 1);
  }
  function decreamentbycoff() {
    setIncreamentBy(incrementBy - 1);
  }
  return (
    <>
      <button onClick={Counter}>the count is : {Count}</button>

      <p>
        mouse button to increase the Coeffecient and middle mouse button to
        decrease it
      </p>
      <button onAuxClick={decreamentbycoff} onClick={incrementbycoff}>
        Coeffiencnt is : {incrementBy}
      </button>
    </>
  );
}
