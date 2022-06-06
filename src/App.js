import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./components/Products/Products";
import { Routes, Route } from "react-router-dom";
import RequiredAuth from "./hoc/RequiredAuth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={
            <RequiredAuth>
              <Products />
            </RequiredAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
