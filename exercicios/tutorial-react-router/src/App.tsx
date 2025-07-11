
import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <nav>
        <Link to="/expenses">Expenses</Link>
        <Link to="/invoices">Invoices</Link> |{" "}
      </nav>
    </>
  )
}

export default App
