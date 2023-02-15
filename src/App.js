import './App.css';
import { Route, Routes } from "react-router-dom";
import { Home } from './home';
import { Signup } from './components/user/admin/signup.js';
import { Login } from './components/user/admin/login.js';
import { ForgotPassword } from './components/user/admin/forgotpassword';
import { Signupman } from './components/user/manager/signup.js';
import { Loginman } from './components/user/manager/login.js';
import { ForgotPasswordman } from './components/user/manager/forgotpassword';
import { Signupemp } from './components/user/employee/signup.js';
import { Loginemp } from './components/user/employee/login.js';
import { ForgotPasswordemp } from './components/user/employee/forgotpassword';
import { AddUser } from './components/admincontroll/adduser';
import { GetUser } from './components/admincontroll/getuser';
import { AddLead } from './components/admincontroll/lead';
import { Employeedashboard } from './components/user/employee/employeedashboard';
import { ManagerDashboard } from './components/user/manager/managerdashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/adminsignup" element={<Signup />} />
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/adminforgotPassword" element={<ForgotPassword />} />
        <Route path="/managersignup" element={<Signupman />} />
        <Route path="/managerlogin" element={<Loginman />} />
        <Route path="/managerforgotPassword" element={<ForgotPasswordman />} />
        <Route path="/employeesignup" element={<Signupemp />} />
        <Route path="/employeelogin" element={<Loginemp />} />
        <Route path="/employeeforgotPassword" element={<ForgotPasswordemp />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/addlead" element={<AddLead />} />
        <Route path="/getuser" element={<GetUser />} />
        <Route path="/employeedashboard" element={<Employeedashboard />} />
        <Route path="/managerdashboard" element={<ManagerDashboard />} />


      </Routes>
    </div>
  );
}

export default App;
