import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ list, setIsEditing, setEditID }) => {
  return (
    <div className='grocery-list'>
      {list.map((item) => {
        const { id, title } = item
        const editItem = () => {
          setIsEditing(true)
          setEditID(id)
        }

        return (
          <article key={id} className='grocery-item'>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button type='button' className='edit-btn' onClick={editItem}>
                <FaEdit />
              </button>
              <button type='button' className='delete-btn'>
                <FaTrash />
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
