import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import {Routes, Route} from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="container mx-auto p-4 h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
