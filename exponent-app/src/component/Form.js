import React from "react";

function Form() {
  return (
    <div>
      <form>
        <label htmlFor="base"></label>
        <input type="number" name="base" />
        <label htmlFor="exponent"></label>
        <input type="number" name="exponent" />
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default Form;
