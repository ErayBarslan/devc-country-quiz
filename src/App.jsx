import React, { useEffect, useState, useRef } from 'react'
import GlobalStyles from './styles/Global'
import Group from './components/Group'

const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCountries = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://restcountries.com/v3.1/all')
      const data = await response.json()
      setData(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return (<>
    <GlobalStyles />
    {!loading && <Group data={data} setLoading={setLoading} loading={loading} />}
  </>)
}

export default App