import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
};

function App() {

  const [fullName, setFullName] = useState<string>();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement> ) {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFullName(formData.firstName + " " + formData.lastName)
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            name="firstName"
            value={formData.firstName}
            type="text"
            placeholder="Digite seu nome"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            name="lastName"
            value={formData.lastName}
            type="text"
            placeholder="Digite seu sobrenome"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Mostrar nome completo</button>
      </form>
      <h2>{fullName}</h2>
    </>
  );
}

export default App;
