import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ipstackToken = process.env.GATSBY_IPSTACK_TOKEN

export default () => {
  const [geoData, setGeoData] = useState({})

  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get(`http://api.ipstack.com/check?access_key=${ipstackToken}`)
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
