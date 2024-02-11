import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Navbar';
import SubNavbar from './Pages/SubNavbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Appointment from './Pages/Appointment';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ChatApp from './Pages/ChatApp';
import BookingHours from './Pages/BookingHours';
import Profile from './Pages/Profile';
import UserProfile from './Pages/UserProfile';
// import AppBooking from './Components/AppBooking';
import Dashboard from './Pages/PagesData/Admin/Dashboard';
// import Testimonials from './Pages/Testimonials';
import LowerFooter from './Components/LowerFooter';

const App = () => {
  // const [currentUser, setCurrentUser] = useState(undefined);

  // useEffect(() => {
  //   if (localStorage.getItem('chat-app-user')) {
  //   } else {
  //     setCurrentUser(JSON.parse(localStorage.getItem('chat-app-user')));
  //   }
  // }, []);

  return (
    <>
      <Navbar />
      <SubNavbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home />
              {/* <AppBooking /> */}
              <About />
              <Services />
              <Contact />
              {/* <Testimonials /> */}
              <LowerFooter />
            </>
          }
        />
        <Route
          exact
          path="/dental-clinic/appointment"
          element={<Appointment />}
        />
        {/* <Route exact path="/dental-clinic/treatments" element={} /> */}
        {/* <Route exact path="/dental-clinic/contact" element={} /> */}
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/our-doctor" element={<Profile />} />
        <Route exact path="/login_user" element={<Login />} />
        <Route
          exact
          path="/dental-clinic/user/profile"
          element={<UserProfile />}
        />
        <Route
          exact
          path="/dental-clinic/user/chat_section"
          element={<ChatApp />}
        />
        <Route exact path="/dental-clinic/slot" element={<BookingHours />} />
        <Route
          exact
          path="/dental-clinic/admin-person"
          element={<Dashboard />}
        />
      </Routes>
    </>
  );
};

export default App;
