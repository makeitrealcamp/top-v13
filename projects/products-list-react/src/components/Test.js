
import { useState } from 'react'

const Test = () => {
    const [count, setCount] = useState(0)
    const aumentar = () => {
      setCount((oldCount) => oldCount + 1)
    }

    const disminuir = () => {
      setCount((oldCount) => oldCount - 1)
    }

    return (
        <div>
          <p> Counter: {count}</p>
          <button onClick={aumentar}>
            Aumentar
          </button>
          <button onClick={disminuir}>
            Disminuir
          </button>
        </div>
    )
}

export default Test