import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function useValues(n) {
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get(
          "https://opentdb.com/api.php?amount=2&category=31&difficulty=easy&type=boolean&encode=url3986"
        )
        .then((res) => {
          setValues(res.data.results);
          setLoading(false);
        });
    }, n * 1000);

    axios
      .get(
        "https://opentdb.com/api.php?amount=2&category=31&difficulty=easy&type=boolean&encode=url3986"
      )
      .then((res) => {
        setValues(res.data.results);
        setLoading(false);
      });

    return () => {
      clearInterval(intervalId);
    };
  }, [n]);

  return { values, loading };
}

function useisOnline() {
  const [isOnline, setIsOnline] = useState(false);
  useEffect(() => {
    const valid = setInterval(() => {
      setIsOnline(window.navigator.onLine);
    }, 1000);
  }, []);

  return isOnline;
}

function useInterval() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);
  });

  return count;
}

function useDebounce(input, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(input);
    }, timeout);

    return () => {
      clearTimeout(timer);
    } 
  }, [input, timeout]);

  return debouncedValue;
}

function App() {
  // const isOnline = useisOnline();
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);

  return (
    <div>
      input value is {inputValue}
      <br />
      Debounced Value is {debouncedValue}
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
    </div>
  );
}

export default App;

// function Questions({ qst, index }) {
//   return (
//     <div key={index}>
//       {decodeURIComponent(qst.question)} - {qst.correct_answer}
//     </div>
//   );
// }
