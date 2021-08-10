import React, { useState } from 'react'
import data from './data'
import Question from './Question'
import SingleQuestion from './Question'

function App() {
  return (
    <main>
      <section className='container'>
        <h3>Question and answers</h3>
        <section className='info'>
          {data.map((question) => (
            <Question {...question} />
          ))}
        </section>
      </section>
    </main>
  )
}

export default App
