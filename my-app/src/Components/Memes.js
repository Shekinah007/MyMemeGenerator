import React from "react"

export default function Memes(props) {

    return (
        <div className="memes--root">
            <img 
                src={props.image} 
                className="memeListImage"
            />
        </div>
    )
}