import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, message: '', type: '' })

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert({ show: false })
    }, 5000)
    return () => {
      clearTimeout(timeout)
    }
  }, [alert])

  useEffect(() => {
    if (isEditing) {
      document.getElementById('name').innerText = list[editID].title
    }
  }, [editID, isEditing, list])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submited')
    if (!name) {
      setAlert({
        show: true,
        message: 'Dane nie mogą być puste',
        type: 'danger',
      })
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
        {alert.show && <Alert {...alert} />}
        <h3>Grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='e.g. eggs'
            id='name'
          />
          <button type='submit' className='submit-btn'>
            {!isEditing ? 'Submit' : 'Edit'}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List list={list} setIsEditing={setIsEditing} setEditID={setEditID} />
        <button className='clear-btn' onClick={() => setList([])}>
          Clear List
        </button>
      </div>
    </section>
  )
}

export default App
