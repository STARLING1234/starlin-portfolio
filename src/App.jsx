import { useState } from 'react'
import Portfolio from './components/Portfolio'
import SingleFilePortfolio from './components/SingleFilePortfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Portfolio />
      {/* <SingleFilePortfolio /> */}
    </>
  )
}

export default App
