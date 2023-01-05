import "./styles.css";
import TextArea from "./Components/TextArea";
import { useState } from "react";

import Player from "./Components/Player";
export default function App() {
  const [getdata, setdata] = useState();
  const [setvalues, setfun] = useState([]);
  const [counter, counterfun] = useState(0);
  const [curtime, setTime] = useState("00:00:00,000");
  const [buttonName, setButtonName] = useState("Start");
  function buttonhandle(e) {
    console.log(e.target.value);

    if (e.target.value === "Start") {
      setButtonName("End");
    } else if (e.target.value === "End") {
      setButtonName("Start");
    }
    console.log("i am clicked");
    const spaces1 = getdata.split(" ").length - 1;
    console.log(spaces1);
    var lines = getdata.split("\n");
    const len = lines.filter((ele) => {
      return ele !== "";
    });
    const rel = getdata.split("\n").slice(1).join("\n");

    if (counter <= len.length - 1) {
      if (buttonName === "Start") {
        setfun((ele) => [ele + "\n" + (counter + 1) + "\n" + curtime + " -->"]);
      } else if (buttonName === "End") {
        setfun((ele) => [ele + curtime + "\n"]);
        setfun((ele) => [ele + len[counter] + "\n"]);
        counterfun(counter + 1);
      }
    }
    console.log(curtime);
  }
  function handleChange(e) {
    console.log(e.target.value);
    const values = e.target.value;
    setdata(values);
  }
  function Timehandle(e) {
    console.log("thats me", e);
    setTime(e);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Player setTime={setTime} />
      <h2>Start editing to see some magic happen!</h2>

      <TextArea
        buttontype={buttonName}
        setvalues={setvalues}
        values={getdata}
        handleChange={handleChange}
        buttonhandle={buttonhandle}
      />
    </div>
  );
}
