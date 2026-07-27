import React, { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function getUsers() {

      try {
        setLoading(true)
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) {
          throw new Error("Network Error")
        }
        console.log(response)
        const data = await response.json()
        setData(data)
        console.log(data)
        setLoading(false)
      }
      catch (er) {
        console.log(er.message)
        setError(true)
        setMessage(er.message)
        setLoading(false)
      }

    }
    getUsers()
    // 663809
  }, [])
  return (
    <div>
      {error && <h1>{message}</h1>}
      {loading && <h1>Loading ...</h1>}
      {data.map((usr) => (
        <div>
          <h1>{usr.name}</h1>
          <p>{usr.email}</p>
          <p>{usr.phone}</p>
          <p><i><b>{usr.address.street}</b></i></p>
          <p>{usr.address.geo.lat}</p>
        </div>
      ))}

    </div>
  )
}

export default App