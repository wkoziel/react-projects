import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { loading, coctails } = useGlobalContext()

  if (loading) return <Loading />
  if (coctails.length < 1) return <h2>no coctails</h2>

  return (
    <section className='section'>
      <h2 className='section-title'>coctails</h2>
      <div className='cocktails-center'>
        {coctails.map((item) => (
          <Cocktail key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default CocktailList
