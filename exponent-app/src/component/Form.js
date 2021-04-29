import React, { useState } from "react";

function Form() {
  const [inputNumber, setInputNumber] = useState({ base: "", exponent: "" });
  const [answer, setAnswer] = useState("");
  const { base, exponent } = inputNumber;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputNumber({
      ...inputNumber,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (base && exponent) {
      setAnswer(calculateExponent(base, exponent));
      setInputNumber({
        base: "",
        exponent: "",
      });
    }
  };
  const calculateExponent = (b, expo) => {
    return expo === 0 ? 1 : b * calculateExponent(b, expo - 1);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
      {answer}
    </div>
  );
}

export default Form;
