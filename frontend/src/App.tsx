import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { Layout } from 'antd';
import { SignUpPage } from './pages/SignUpPage';

function App() {
  return (
    <Layout style={{minHeight:"100vh"}}>
    <Routes>
      <Route  path='/' element={<LoginPage />}/>
      <Route path='/SignUp' element={<SignUpPage/>}/>
    </Routes>
    </Layout>
  );
}

export default App;
