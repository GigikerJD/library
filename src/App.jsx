import { Route, Routes } from "react-router-dom";
import { Welcome } from "./pages/Welcome.jsx";
import { Admin } from "./pages/Admin.jsx";
import { Student } from "./pages/Student.jsx";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import { StudentSettings } from './pages/StudentSettings.jsx'
import { AdminSettings } from './pages/AdminSettings.jsx' 

const App = () => {

  return(
    <>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/login" element={<Login/>} />  
        <Route path="/register" element={<Register/>} />
        <Route path="/student/:email" element={<Student/>} />
        <Route path="/admin/:email" element={<Admin/>} />
        <Route path="/student/:email/settings" element={<StudentSettings/>} />
        <Route path="/admin/:email/settings" element={<AdminSettings/>} />
      </Routes>
    </>
  );
};

export default App;