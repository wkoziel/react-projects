import React, { useState, useEffect } from 'react'
import data from './data'
import Buttons from './Buttons'
import Post from './Post'

function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) setIndex(lastIndex)
    if (index > lastIndex) setIndex(0)
  }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => {
      clearInterval(slider)
    }
  })

  const checkPosition = (personIndex) => {
    let position = 'nextSlide'
    if (personIndex === index) position = 'activeSlide'
    if (
      personIndex === index - 1 ||
      (index === 0 && personIndex === people.length - 1)
    )
      position = 'lastSlide'

    return position
  }

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          let position = checkPosition(personIndex)
          return <Post {...person} position={position} />
        })}
        <Buttons setIndex={setIndex} index={index} />
      </div>
    </section>
  )
}

export default App
