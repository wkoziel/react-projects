import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import { reducer } from './reducer'
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const increaseAmount = (id) => {
    dispatch({ type: 'INCREASE_AMOUNT', payload: id })
  }
  const decreaseAmount = (id) => {
    dispatch({ type: 'DECREASE_AMOUNT', payload: id })
  }

  const changeAmount = (id, type) => {
    dispatch({ type: 'CHANGE_AMOUNT', payload: { id, type } })
  }

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    dispatch({ type: 'CHANGE_TOTALS' })
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{
        ...state, //spread state by ...
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
        changeAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
