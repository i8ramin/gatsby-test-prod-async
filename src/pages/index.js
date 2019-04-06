import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default () => {
  const [geoData, setGeoData] = useState({})

  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
      setGeoData(resp.data)
    }

    fetchData()
  }, [])

	return (
    <React.Fragment>
      <div>Hello world!</div>
      <pre>{JSON.stringify(geoData, null, 2)}</pre>
    </React.Fragment>
  )
}
