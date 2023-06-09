import React from "react"
import memesData from "../memesData.js"

// Get a random image from the `memesData` array
//      * when the "new meme image" button is clicked.

export default function Meme() {

    function getMemeImage(){
        const memesArray=memesData.data.memes
        const randomNumber=Math.floor(Math.random()*memesArray.length)
        //console.log(randomNumber)
        const url=memesArray[randomNumber].url
    }
    return (
        <main>
            <form>
                <input type="text" 
                placeholder="Top text"
                className="form--input"
                />

                <input type="text" 
                placeholder="Bottom text"
                className="form--input"
                />

                <button className="form--button"
                onClick={getMemeImage}
                >
                Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}