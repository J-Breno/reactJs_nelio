import { useState } from "react";

function App() {

  const [cont, setCont] = useState(0);

  function handleClick() {
    setCont(cont + 1)
  }

  return (
    <>
      <h1>Contagem = {cont}</h1>
      <button onClick={handleClick}>Incrementar</button>
    </>
  )
}

export default App
