import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      }
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      }
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      }
    default:
      throw new Error('Error Message : ' + action.type)
  }
}

const Users = () => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  })

  const fetchUsers = async () => {
    dispatch({ type: 'LOADING' })
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      dispatch({ type: 'SUCCESS', data: response.data })
    } catch (e) {
      dispatch({ type: 'ERROR', error: e })
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return <div></div>
}

export default Users
