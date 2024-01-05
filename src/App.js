import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Login from "./components/Login";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element = {<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
