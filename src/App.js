import "./styles.css";
import { useState } from "react";

const moods = ["Happy ", "Sad ", "Depressed ", "Excited "];
var i = "";
const weather = ["Sunny ", " Rainy ", "Foggy ", "Windy "];

const myDay = weather.concat(moods);
myDay.push(" Winter");

myDay.map((map) => {
  return map;
});

function bakery() {
  return "Your Cake is Ready !!🎂";
}

myDay.push(" Summer");

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{moods[i]}</h1>
      <h1>{myDay}</h1>
      <h1>{bakery()}</h1>

      <button onClick={() => setCount(count + Math.floor(Math.random() * 100))}>
        <h1> {count}</h1>
      </button>
    </div>
  );
}
