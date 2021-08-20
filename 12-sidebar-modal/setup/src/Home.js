import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContex } from './context'

const Home = () => {
  const { openSidebar, openModal } = useGlobalContex()
  return (
    <main>
      <button className='sidebar-toggle'>
        <FaBars onClick={() => openSidebar()} />
      </button>
      <button onClick={() => openModal()} className='btn'>
        show modal
      </button>
    </main>
  )
}

export default Home
