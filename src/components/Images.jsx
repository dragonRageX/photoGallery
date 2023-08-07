import React from "react"
import { imagesContext } from "../context/imagesContext"

export default function Images()
{
    let dataArray = React.useContext(imagesContext);

    let dataArrayElements = dataArray.map((object) => {
        return (
            <div key = {object.id} className="image-container">
                <img src = {object.urls.regular} />
                <div className="info-container">
                    <h4>{object.description}</h4>
                    <p>by <span>{object.user.name}</span></p>
                    <a href = {object.links.html} target="_blank" rel="noopener noreferrer">View original photograph</a>
                </div>
            </div>
        );
    })
    
    return (
        <div className = "posts-container">
            {(dataArrayElements.length != 0) ? (dataArrayElements) : (<h2 className="no-results">Sorry, no results found!</h2>)}
        </div>
    );
}