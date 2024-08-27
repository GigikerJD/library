import { Route, Routes } from "react-router-dom";
import { Welcome } from "./pages/Welcome.jsx";
import { Admin } from "./pages/Admin.jsx";
import { Student } from "./pages/Student.jsx";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";

const App = () => {

  return(
    <>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/login" element={<Login/>} />  
        <Route path="/register" element={<Register/>} />
        <Route path="/student/:email" element={<Student/>} />
        <Route path="/admin/:email" element={<Admin/>} />
      </Routes>
    </>
  );
};

export default App;