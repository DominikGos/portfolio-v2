import { use, useState } from 'react'

function App() {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount((prevCount) => prevCount + 1);
  }
  
  return (

    <>
      <h1 className="font-bold">Portfolio</h1>
      <button onClick={increment}>
        count is {count}
      </button>
    </>
  )
}

export default App
