import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [coctails, setCoctails] = useState([])

  const fetchDrinks = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const { drinks } = data
      if (drinks) {
        setCoctails(
          drinks.map((item) => {
            const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
              item
            return {
              id: idDrink,
              name: strDrink,
              img: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            }
          })
        )
      } else {
        setCoctails([])
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDrinks()
  }, [searchTerm])

  return (
    <AppContext.Provider value={{ loading, coctails, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
