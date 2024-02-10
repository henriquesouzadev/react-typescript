import React from "react"
import Button from "./Button"
import Checkbox from "./Checkbox"

function App() {
  const [total, setTotal] = React.useState(0)

  const incrementar = () => {
    setTotal(total => total + 1)
  }

  return (
    <div>
      <p>Total: {total}</p>
      <Button total={total} setTotal={setTotal} />
      <Checkbox label="Termos e condições" />
    </div>

  )
}

export default App
