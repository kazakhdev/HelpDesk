import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";

import * as AuthService from "./services/auth.sevice";
import IUser from './types/user.type';

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import BoardUser from "./pages/BoardUser";
import BoardModerator from "./pages/BoardModerator";
import BoardAdmin from "./pages/BoardAdmin";

import EventBus from "./common/EventBus";

const App: React.FC = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState<boolean>(false);
  const [showAdminBoard, setShowAdminBoard] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", logOut);

    return () => {
      EventBus.remove("logout", logOut);
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
       
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

// import React from 'react';
// import './App.css';
// import { Routes, Route } from 'react-router-dom';
// import { LoginPage } from './pages/Login';
// import { Layout, Skeleton } from 'antd';
// // import { SignUpPage } from './pages/SignUpPage';
// import useLocalStorage from './hooks/useLocalStorage';
// // import { MainPage } from './pages/MainPage';
// import { MainContent } from './components/MainContent';
// import { TreatmentPage } from './pages/TreatmentPage';
// import SelectedRegionProvider from './components/SelectedRegionProvider';

// function App() {
//   const [datas, setDatas] = useLocalStorage('datas', []);
//   return (
//     <SelectedRegionProvider>
//     <Layout style={{minHeight:"100vh"}}>
//     <Routes>
//       <Route  path='/' element={<LoginPage />}/>
//       {/* <Route path='/SignUp' element={<SignUpPage/>}/>
//       <Route path='/Main' element ={<MainContent><MainPage/></MainContent>}/> */}
//       <Route path='/Treatment' element={<MainContent><TreatmentPage/></MainContent>}/>
//     </Routes>
//     </Layout>
//     </SelectedRegionProvider>
//   );
// }

// export default App;
