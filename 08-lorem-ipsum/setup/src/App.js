import React, { useState } from 'react'
import data from './data'
function App() {
  const [lorem, setLorem] = useState([])
  const [count, setCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    amount = amount <= 0 ? 1 : amount
    amount = amount > data.length - 1 ? 8 : amount
    console.log(amount)
    setLorem(data.slice(0, amount))
  }

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
          min={1}
          max={data.length - 1}
        />
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {lorem.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  )
}

export default App
