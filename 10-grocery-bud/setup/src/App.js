import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () =>
  localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, message: '', type: '' })

  const showAlert = (show = false, type = '', message = '') => {
    setAlert({
      show,
      message,
      type,
    })
  }

  const clearList = () => {
    showAlert(true, 'danger', 'Usunięto wszystkie pozycje')
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'Usunięto pozycje')
    const newList = list.filter((item) => item.id !== id)
    setList(newList)
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submited')
    if (!name) {
      showAlert(true, 'danger', 'Pole nie może być puste')
    } else if (name && isEditing) {
      setList(
        list.map((item) =>
          item.id === editID ? { ...item, title: name } : item
        )
      )
      setName('')
      setIsEditing(false)
      setEditID(null)
      showAlert(true, 'success', 'Dane zostały zmienione')
    } else {
      showAlert(true, 'success', 'Dodano do listy')
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
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
        <List
          list={list}
          setIsEditing={setIsEditing}
          setEditID={setEditID}
          removeItem={removeItem}
          editItem={editItem}
        />
        <button className='clear-btn' onClick={() => clearList()}>
          Clear List
        </button>
      </div>
    </section>
  )
}

export default App
