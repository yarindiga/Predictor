import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");

  const valueIsValid = validateValue(enteredValue);

  function valueChangeHandler(event) {
    setEnteredValue(event.target.value);
  }
  return {
    value: enteredValue,
    isValid: valueIsValid,
    valueChangeHandler,
  };
};

export default useInput;
