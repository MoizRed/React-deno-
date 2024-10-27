import { useState } from "react";
export default function Form() {
  const [value, setvalue] = useState("any test");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setvalue(e.target.value);
    console.log(e, e.target.value);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => handleChange(e)}
          // onChange={(e)=>setvalue(e.target.value)}
        >
        </input>
      </form>
    </div>
  );
}
