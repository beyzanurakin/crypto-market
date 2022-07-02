import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Coin from './components/Coin'

function App() {
  const [coinsList, setCoinsList] = useState([])
  const [query, setQuery] = useState('')
  useEffect(() => {
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then((res) =>
      setCoinsList(res.data.coins)
    )
  }, [])
  const filteredCoins = coinsList.filter((coin) => {
    return coin.name.toLowerCase().includes(query.toLowerCase())
  })
  return (
    <div className='App'>
      <div className='cryptoHeader'>
        <input
          type='text'
          placeholder='Bitcoin...'
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        />
      </div>
      <div className='cryptoDisplay'>
        {filteredCoins.map((coin) => {
          return <Coin key={coin.id} {...coin} />
        })}
      </div>
    </div>
  )
}

export default App
