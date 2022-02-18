
import React, {useState} from 'react'
import Board from "./body";
import dragon from './images/dragon.png'
import cat from './images/cat.png'
import camel from './images/camel.png'
import dogs from './images/dogs.png'
import lion from './images/lion.png'
import snake from './images/snake.png'
import bird from './images/bird.png'
import backImg from './images/square.png'
import eagle from './images/eagle.png'


function App() {
  const cards = buildCards()
  return (
      <div className="App">
        <Board cards={cards} />
      </div>
  )
}

export default App

function buildCards() {
  let id = 0
  const images = {dragon, eagle, camel, cat, dogs, lion, snake, bird}
  const cards = Object.keys(images).reduce((result, item) => {
    const getCard = () => ({
      id: id++,
      type: item,
      backImg,
      frontImg: images[item],
      flipped: false,
    })
    return [...result, getCard(), getCard()]
  }, [])
  return shuffle(cards)
}

function shuffle(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let randomIdx = Math.floor(Math.random() * len)
    let copyCurrent = {...arr[i]}
    let copyRandom = {...arr[randomIdx]}
    arr[i] = copyRandom
    arr[randomIdx] = copyCurrent
  }
  return arr
}