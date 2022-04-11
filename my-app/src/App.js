import React from "react";
import Header from "./Components/Header"
import Main from "./Components/Main"
import Memes from "./Components/Memes"

export default function App() {
  let [memesData, setMemesData] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  let [memeArray, setMemeImage] = React.useState([])

  //Fetches the memes data from api and creates an array
  React.useEffect(function () {
      console.log("UseEffect")
      fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(item => setMemeImage(item.data.memes))
  }, [])


  function  getRandomImage() {
    console.log("getRandom")
    let randomNumber = Math.floor(Math.random() * memeArray.length)
    //console.log(randomNumber)
    let newUrl = memeArray[randomNumber].url 
    //console.log(newUrl)
    setMemesData(prevState => {
      return {
        ...prevState,
        randomImage: newUrl
      }
    })
  }

//  let [randomListOfMemesUrls, setRandomListOfMemeUrls] = React.useState([]);
//     setRandomListOfMemeUrls(() => {
//       let urlArray = [];
//       for (let i = 0; i < 7; i++) {
//           let randomArrayNumber =  Math.floor(Math.random() * memeArray.length)
//           urlArray.push(memeArray[randomArrayNumber].url)
//       }
//       return urlArray
//     })
//     console.log(randomListOfMemesUrls)

  let randomListOfMemeImages = function() {
      let urlArray = [];
      for (let i = 0; i < 4; i++) {
          let randomArrayNumber =  Math.floor(Math.random() * memeArray.length)
          urlArray.push(memeArray[randomArrayNumber])
      }
      //console.log(urlArray)
      return urlArray;
  }
  let memeList = randomListOfMemeImages().map(item => {
    console.log("The below,  I see u")
    console.log(item.url)
    return  <img 
              src={item.url} 

            />    
  })
  
  //----------------------------------------------------\\
  return (
    <div className="app--root" >
        <Header />
        <Main 
          memeImage={memesData.randomImage}
          handleGetImage={getRandomImage}
        />
        <Memes 
          image={memesData.randomImage}
        />
        {memeList}
    </div>
  )
}
