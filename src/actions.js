export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"
export const AUTHORIZE = "AUTHORIZE"
export const ADD_CARD = "ADD_CARD"
export const CARD_TO_STORE = "CARD_TO_STORE"

export const logIn = token => ({ type: LOG_IN, payload: token })
export const logOut = () => ({ type: LOG_OUT })
export const authorize = (email, password) => ({
  type: AUTHORIZE, payload: { email, password },
})
export const addCard = (cardNumber, expiryDate, cardName, cvc, token) => ({
  type: ADD_CARD, payload: { cardNumber, expiryDate, cardName, cvc, token },
})
export const cardToStore = (cardNumber, expiryDate, cardName, cvc, token) => ({
  type: CARD_TO_STORE, payload: { cardNumber, expiryDate, cardName, cvc, token },
})
