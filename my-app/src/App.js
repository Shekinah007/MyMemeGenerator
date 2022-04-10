import React from "react";
import Header from "./Components/Header"
import Main from "./Components/Main"

export default function App() {
  let [memesData, setMemesData] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  let [memeArray, setMemeImage] = React.useState()
  React.useEffect(function () {
      console.log("UseEffect")
      fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(item => setMemeImage(item.data.memes))

  }, [])

  function  getRandomImage() {
    console.log("getRando")
    let randomNumber = Math.floor(Math.random() * memeArray.length)
    console.log(randomNumber)
    let newUrl = memeArray[randomNumber].url 
    console.log(newUrl)
    setMemesData(prevState => {
      return {
        ...prevState,
        randomImage: newUrl
      }
    })
  }
  return (
    <div className="app--root">
        <Header />
        <Main 
          memeImage={memesData.randomImage}
          handleGetImage={getRandomImage}
        />
    </div>
  )
}
