import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import {Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Jobs from "./components/Jobs";
import EditJob from "./components/EditJob";

function App() {
  const user = false;

  return (
    <div className="container mx-auto p-4 h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={user ? <Jobs /> : <Home />} />
        <Route path="/edit/:id" element={user ? <EditJob /> : <Home />} />
      </Routes>
    </div>
  );
}

export default App;
