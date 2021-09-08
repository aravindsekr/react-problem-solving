import "./styles.css";

import dancingNumbers from "./misc/dancing-numbers";
import compress from "./misc/data-compression";
import Bubble from "./sort/bubble";
import Insertion from "./sort/insertion";

document.getElementById("app").innerHTML = `
  <div>
    <div>
      <b>Finding Dancing numbers</b>
      <p>To list all numbers whose digit difference is 1, for the input of 25 these are the numbers:</p>
      <p>${dancingNumbers(25).join(", ")}</p>
      <p>Time complexity is <b>linear</b></p>
    </div>
    <hr/>
    <div>
      <b>Compress string</b>
      <p>To compress the characters with correct count</p>
      <p> Input: <b>aabbbccdefg</b> </p>
      <p> Output: <b>${compress("aabbbccdefg")}</b></p>
    </div>
    <hr/>
    <div>
    <b>Bubble sort</b>
    <p> Input: <b>n: 100</b> </p>
    <p> Output: <b>${Bubble([3, 4, 5, 2, 8, 1, 2, 9])}</b></p>
    </div>
    <hr/>
    <div>
    <b>Insertion sort</b>
    <p> Input: <b>n: 3, 4, 5, 2, 8, 1, 2, 9</b> </p>
    <p> Output: <b>${Insertion([1, 2, 3, 4, 5, 9, 8])}</b></p>
    </div>
    <hr/>
  </div>
`;
