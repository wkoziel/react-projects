import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, message: '', type: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submited')
    if (!name) {
      //alert
      console.log('alert')
    } else if (name && isEditing) {
      //editing
      console.log('edytowanie')
    } else {
      //alert
      console.log('dodawanie')
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>Grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='e.g. eggs'
          />
          <button type='submit' className='submit-btn'>
            {!isEditing ? 'Submit' : 'Edit'}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List list={list} />
        <button className='clear-btn'>Clear List</button>
      </div>
    </section>
  )
}

export default App
