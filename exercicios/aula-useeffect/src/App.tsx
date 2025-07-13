import { useEffect, useState } from "react"
import { findProduct } from "./data";

function App() {
  const [productId, setProductId] = useState(1);
  const [prod, setProd] = useState<any>();

  useEffect(()=>{
    setProd(findProduct(productId))
  }, [])

  function handleClick() {
    setProductId(2);
    setProd(findProduct(productId));
  }

  return (
    <>
     <h2>{prod?.name}</h2>
     <p>{prod?.price}</p>
     <br />
     <button onClick={handleClick}>Mudar para produto 2</button>
    </>
  )
}

export default App
