import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './Pages/Login';
import LoginAdmin from './Pages/LoginAdmin';
import Signup from './Pages/Signup';
import SignupAdmin from './Pages/SignupAdmin';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import Services from './components/Services';
import Dashboard from './Admin/Dashboard';
import Createtrip from './Admin/Createtrip';
import Viewtrip from './Admin/Viewtrip';
import Updatetrip from './Admin/Updatetrip';
import Deletetrip from './Admin/Deletetrip';
import Update from './Admin/Update';
import ViewtripDetail from './Admin/ViewtripDetail';
import Userdashboard from './Users/Userdashboard';
import ViewtripUser from './Users/ViewtripUser';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/review" element={<Reviews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginadmin" element={<LoginAdmin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupadmin" element={<SignupAdmin />} />
          <Route path="/adminDashboard" element={<Dashboard />} />
          <Route path="/admin/createtrip" element={<Createtrip />} />
          <Route path="/admin/viewtrip" element={<Viewtrip />} />
          <Route path="/admin/updatetrip" element={<Updatetrip />} />
          <Route path="/admin/deletetrip" element={<Deletetrip />} />
          <Route path="/admin/update/:id" element={<Update />} />
          <Route path="/user/dashboard" element={<Userdashboard />} />
          <Route path="/viewtrip/detail/:id" element={<ViewtripDetail />} />
          <Route path="/viewtripuser/detail/:id" element={<ViewtripUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;