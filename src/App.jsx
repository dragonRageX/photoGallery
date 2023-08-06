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
      fetch(`https://api.unsplash.com/search/photos?client_id=AQVNI6Ku8y4tlxcGb_rS5bRwrX95C7ps1DNyNdkZHxw&query=${input}`)
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