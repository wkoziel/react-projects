export const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }

  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    }
  }

  if (action.type === 'INCREASE_AMOUNT') {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 }
      }
      return item
    })
    return {
      ...state,
      cart: tempCart,
    }
  }

  if (action.type === 'DECREASE_AMOUNT') {
    let tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 }
        }
        return item
      })
      .filter((item) => item.amount !== 0)
    console.log(tempCart)
    return {
      ...state,
      cart: tempCart,
    }
  }

  if (action.type === 'CHANGE_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem
        const itemTotal = price * amount

        cartTotal.total += itemTotal
        cartTotal.amount += amount
        return cartTotal
      },
      {
        total: 0,
        amount: 0,
      }
    )
    total = parseFloat(total.toFixed(2))
    return { ...state, total, amount }
  }

  if (action.type === 'CHANGE_AMOUNT') {
    let tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === '+')
            return { ...item, amount: item.amount + 1 }
          else return { ...item, amount: item.amount - 1 }
        }
        return item
      })
      .filter((item) => {
        return item.amount !== 0
      })
    return { ...state, cart: tempCart }
  }

  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }

  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload, loading: false }
  }

  throw new Error("there's no matching action")
}
