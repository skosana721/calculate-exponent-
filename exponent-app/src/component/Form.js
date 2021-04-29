import React, { useState } from "react";

function Form() {
  const [inputNumber, setInputNumber] = useState({ base: "", exponent: "" });
  const { base, exponent } = inputNumber;
  return (
    <div>
      <form>
        <label htmlFor="base">Base</label>
        <input type="number" name="base" value={base} />
        <label htmlFor="exponent">Exponent</label>
        <input type="number" name="exponent" value={exponent} />
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default Form;
