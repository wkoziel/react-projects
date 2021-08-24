import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()

  const [loading, setLoading] = React.useState(false)
  const [cocktail, setcocktail] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        if (data.drinks) {
        } else {
          setcocktail([])
        }
        setLoading(false)
      } catch (error) {}
    }
    getCocktail()
  }, [id])

  return (
    <div>
      <h2>single cocktail page </h2>
    </div>
  )
}

export default SingleCocktail
