import React from "react"

export default function Main(props) {
    return (
        <div className="main--root">
            <div className="formAndImage">
                <form>
                    <input
                        type="text"
                        placeholder="Top Text"
                        //onChange={}
                    />
                    <input
                        type="text"
                        placeholder="Bottom Text"
                        //onChange={}
                    />
                <button type="button" onClick={props.handleGetImage}>
                    Get New Image
                </button>
                <button type="button" onClick={()=>alert("Saved")}> Save Meme</button> 
                <button type="button">Switch Text Position</button> 
                </form>
                
                <div className="imageContainer">
                    <img
                        src={props.memeImage}
                        className="memeImage"
                    />
                                      
                </div>
            </div>
        </div>
    )
}