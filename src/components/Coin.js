import React from 'react'

const Coin = ({ ...coin }) => {
  const { icon, name, price, symbol } = coin
  console.log(coin)
  return (
    <div className='coin'>
      <h1>Name : {name}</h1>
      <img src={icon} alt='logo-coin' />
      <h3>Price : {price}</h3>
      <h3>Symbol : {symbol}</h3>
    </div>
  )
}

export default Coin
