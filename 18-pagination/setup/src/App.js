import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'

function App() {
  const [followers, setFollowers] = useState([])
  const [page, setPage] = useState(0)

  const { loading, data } = useFetch()

  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading, page])

  const prevPage = () => {
    setPage((oldPage) => {
      if (oldPage - 1 < 0) return 0
      return oldPage - 1
    })
  }

  const nextPage = () => {
    setPage((oldPage) => {
      if (oldPage + 1 > data.length - 1) return 0
      return oldPage + 1
    })
  }

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'Loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {followers.map((follower) => (
            <Follower key={follower.id} {...follower} />
          ))}
        </div>

        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              Prev
            </button>
            {data.map((_, index) => (
              <button
                className={`page-btn ${index === page ? 'active-btn' : null}`}
                onClick={() => setPage(index)}
              >
                {index + 1}
              </button>
            ))}
            <button className='next-btn' onClick={nextPage}>
              Next
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
