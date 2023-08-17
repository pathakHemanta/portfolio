import { Button } from "@nextui-org/react";
import { useState } from "react";

function Calculator() {
  const [result, setResult] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.num1.value);
    const num1 = parseFloat(e.target.num1.value);
    const num2 = parseFloat(e.target.num2.value);
    setResult(num1 + num2);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="number" name="num1" id="num1" className="bg-pink-300" />
          <input type="number" name="num2" className="bg-blue-200" />
          <button className="bg-red-400 px-3 rounded-lg" type="submit">
            +
          </button>
          <p>{result}</p>
        </form>
      </div>
    </div>
  );
}

export default Calculator;
