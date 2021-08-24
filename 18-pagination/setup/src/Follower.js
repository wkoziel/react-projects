import React from 'react'

const Follower = ({ avatar_url: av, html_url: url, login }) => {
  return (
    <article className='card'>
      <img src={av} alt={login} />
      <h4>{login}</h4>
      <a href={url} className='btn'>
        view profile
      </a>
    </article>
  )
}

export default Follower
