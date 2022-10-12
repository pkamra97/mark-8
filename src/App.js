import { useState } from "react";
import "./styles.css";

export default function App() {
  const emoDictioanry = {
    "😍": "Smiling Face with Heart-Eyes",
    "🥵": "Hot Face",
    "😛": "Face with Tongue",
    "🤪": "Zany Face",
    "🤑": "Money Mouth",
    "😏": "Smirking Face",
    "🥳": "Partying Face",
    "👽": "Alien",
    "🤡": "Clown",
    "🤖": "Robot"
  };

  var [meaning, setMeaning] = useState("");
  //use state function

  var emojisWeKnow = Object.keys(emoDictioanry);
  // console.log(emojisWeKnow);
  //getting array of emjois to use show it on screen

  function emojiInputHandler(event) {
    // console.log(event.target.value);
    var userInput = event.target.value;
    meaning = emoDictioanry[userInput];
    //accesing the value ny directly passing the key
    // console.log(meaning);
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiOnclickHandler(emoji) {
    console.log(emoji);
    meaning = emoDictioanry[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Welcome to the </h1>
      <h1 style={{ color: "blue" }}>Emojinator</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>Emojis we Know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiOnclickHandler(emoji)}
            style={{ fontSize: "1.5rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
