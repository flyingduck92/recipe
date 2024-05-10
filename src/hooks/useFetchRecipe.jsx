import axios from 'axios'
import { useReducer } from 'react'

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
  params: { id: '8138' },
  headers: {
    'X-RapidAPI-Key': '190e27cb54msh4bc94283c5802d5p1ad9b8jsn5a6c290349c6',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  },
}

const initialState = {
  loading: false,
  data: null,
  error: null,
}

const Action = {
  FETCHING_DATA: 'FETCHING_DATA',
  FETCH_SUCCESSFULL: 'FETCH_SUCCESSFULL',
  FETCH_ERROR: 'FETCH_ERROR',
}

const reducer = (_, action) => {
  switch (action.type) {
    case Action.FETCHING_DATA:
      return {
        loading: true,
        data: null,
        error: null,
      }
    case Action.FETCH_SUCCESSFULL:
      return {
        loading: false,
        data: action.payload,
        error: null,
      }
    case Action.FETCH_ERROR:
      return {
        loading: false,
        data: null,
        error: action.payload,
      }
    default:
      return initialState
  }
}

const useFetchRecipe = () => {
  const [{ data, loading, error }, dispatch] = useReducer(reducer, initialState)

  const fetchRecipe = async (id) => {
    dispatch({ type: Action.FETCHING_DATA })

    try {
      const reqOptions = { ...options }
      reqOptions.params.id = id

      const response = await axios.request(reqOptions)
      dispatch({ type: Action.FETCH_SUCCESSFULL, payload: response.data })
    } catch (err) {
      dispatch({ type: Action.FETCH_ERROR, payload: err.message })
    }
  }

  return [fetchRecipe, { data, loading, error }]
}

export default useFetchRecipe
