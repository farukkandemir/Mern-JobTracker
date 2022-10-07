import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import {Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Jobs from "./components/Jobs";
import EditJob from "./components/EditJob";
import NotFound from "./components/NotFound";
import {useContext} from "react";
import {Context} from "./context/Context";

function App() {
  const {user} = useContext(Context);

  return (
    <div className="container mx-auto p-4 h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {user && (
          <>
            <Route path="/dashboard" element={<Jobs />} />
            <Route path="/edit/:id" element={<EditJob />} />
          </>
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
