import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);
  console.log("🚀 ~ Assignment1 ~ input:", input);

  // Your solution starts here
  const expensiveValue = useMemo(() => {
    let result = 1;
    for (var idx = 1; idx <= input; idx++) {
      result *= idx;
    }
    console.log("🚀 ~ expensiveValue ~ result:", result);
    return result;
  }, [input]);
  // Your solution ends here

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
