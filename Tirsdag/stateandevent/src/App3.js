import React, { useState, useEffect } from "react";

export default function App3() {
    const [chuckNorris, setChuckNorris] = useState("");
    const [dadJoke, setDadJoke] = useState("");
  
    const [chuckSelector, setChuckSelector] = useState(false);
  
    useEffect(() => {
      function fetchChuckNorris() {
        console.log("Fetching Chuck Norris");
        fetch("https://api.chucknorris.io/jokes/random")
          .then(res => res.json())
          .then(data => setChuckNorris(data.value))
          .catch(err => console.log(err));
      }
      fetchChuckNorris();
    }, [chuckSelector]);
  
    useEffect(() => {
      const timer = setInterval(() => {
        console.log("Fetching Dad Joke");
        fetch("https://icanhazdadjoke.com/slack", {
          headers: {
            Accept: "application/json"
          }
        })
          .then(res => res.json())
          .then(data => setDadJoke(data.attachments[0].text))
          .catch(err => console.log(err));
      }, 10000);
  
      return () => {
        clearInterval(timer);
      };
    });
  
    return (
      <div>
        <h1>App3</h1>
        <button onClick={() => setChuckSelector(!chuckSelector)}>
          Get ChuckNorris
        </button>
        <p>Chuck Norris Joke: {chuckNorris}</p>
        <p>Dad Joke: {dadJoke}</p>
      </div>
    );
  }
 /// den Chuck norris opgaven har jeg ikke lavet! Jeg prøvede at lave den men det virkede ikke. Den er lånt fra maltes github :D