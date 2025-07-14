import { useState } from "react"

type FormData = {
  salary: number;

}

function App() {

const [formData, setFormData] = useState<FormData>({});

  function handleInputChange(e: any) {
    const value = e.target.value;
    const name = e.target.name;

    setFormData({...formData, [name]: value})
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(formData.salary || Number.MAX_VALUE)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="salary" value={formData.salary || ""} onChange={handleInputChange} type="text" placeholder="Digite um número"/>
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default App
