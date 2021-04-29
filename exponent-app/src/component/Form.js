import React, { useState } from "react";

function Form() {
  const [inputNumber, setInputNumber] = useState({ base: "", exponent: "" });
  const { base, exponent } = inputNumber;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputNumber({
      ...inputNumber,
      [name]: value,
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="base">Base</label>
        <input onChange={handleChange} type="number" name="base" value={base} />
        <label htmlFor="exponent">Exponent</label>
        <input
          onChange={handleChange}
          type="number"
          name="exponent"
          value={exponent}
        />
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default Form;
