
const GET_PRODUCTS = 'GET_PRODUCTS'

const initialState = {
  data: [],
  loading: false
}

const example = [
  {id: 1, name: 'Pineapple', price: 10},
  {id: 2, name: 'Shirmp', price: 15},
  {id: 3, name: 'Milk', price: 2},
  {id: 4, name: 'Lightsaber', price: 100}
]

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {...state, data: example}
    default:
      return state
  }
}

export function getProducts() {
  return {type: GET_PRODUCTS}
}
