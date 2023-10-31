import React from "react"
import { imagesContext } from "./context/imagesContext";
import Images from "./components/Images";

export default function App()
{
  let [input, setInput] = React.useState("");
  let [dataArray, setDataArray] = React.useState(null);

  function search()
  {
    if(input === "")
    {
      alert("Please provide an input for us to show you something!");
    }
    else
    {
      fetch(`https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_CLIENT_ID}&query=${input}`)   //how to use environment variables in Vite is mentioned in the Vite Docs. env variables are used differently in different bundlers.
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setDataArray(data.results);
        })
    }
  }

  return (
    <imagesContext.Provider value = {dataArray}>
      <div>
        <div className="search-container">
          <input type = "text" placeholder="What do you want to see today?" value = {input} onChange={(event) => setInput(event.target.value)}></input>
          <button onClick = {search}>Search</button>
        </div>
        {dataArray != null && <Images />}
      </div>
    </imagesContext.Provider>
  );
}