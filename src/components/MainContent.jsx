import { useState } from "react";
import reactSecondaryLogo from "../assets/secondary-react.svg";

export default function MainContent() {
  const [newFacts, setNewFacts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addFatcs = () => {
    if (inputValue !== "") {
      setNewFacts([...newFacts, inputValue]);
      setInputValue("");
    }
  };
  return (
    <>
      <main className="MainContent">
        <h1 className="MainContent-title">Fun facts about React</h1>
        <ul className="MainContent-list">
          <li>Was first released in 2013</li>
          <li>Was originally created by jordan walke</li>
          <li>Has well over 100k stars on Github</li>
          <li>Is maintained by facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
          {newFacts.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
        <aside>
          <img src={reactSecondaryLogo} alt="react logo" />
        </aside>
      </main>
      <footer>
        <form className="add-facts">
          <input
            type="text"
            placeholder="Add new facts"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <input type="button" value="Add Fact" onClick={addFatcs} />
        </form>
      </footer>
    </>
  );
}
