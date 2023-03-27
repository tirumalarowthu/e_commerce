import React from 'react'
import Header from './Components/Header'
import Products from './Components/Products'
import Slider from './Components/Slider'
const App = () => {
  return (
    <>
      <div style={{ marginBottom: "50px"}}>
        <Header />
      </div>
      <div >
        <Slider />
      </div>
      <div>
        <Products />
      </div>

    </>
  )
}
export default App
