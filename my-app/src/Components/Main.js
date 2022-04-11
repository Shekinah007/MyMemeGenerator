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
                         Get Random Image
                    </button>
                    <button type="button" onClick={()=>alert("Saved")}> Save Meme</button> 
                    <button type="button">Switch Text Position</button> 
                    {/*<button type="button" className="figma">Button</button>*/}
                </form>
                
                <div className="imageContainer">
                    <img
                        src={props.memeImage}
                        className="memeImage"
                    />
                    <h3 className="top">
                        Top Text
                    </h3>
                    <h3 className="bottom">
                        Bottom Text
                    </h3>
                  
                </div>
            </div>
        </div>
    )
}