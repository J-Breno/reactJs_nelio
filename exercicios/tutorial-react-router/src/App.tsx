import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <nav 
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem"
      }}>
        <Link to="/expenses">Expenses</Link> |{" "}
        <Link to="/invoices">Invoices</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
