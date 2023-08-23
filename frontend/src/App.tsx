import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { Layout } from 'antd';
import { SignUpPage } from './pages/SignUpPage';
import useLocalStorage from './hooks/useLocalStorage';
import { MainPage } from './pages/MainPage';
import { MainContent } from './components/MainContent';
import { TreatmentPage } from './pages/TreatmentPage';

function App() {
  const [datas, setDatas] = useLocalStorage('datas', []);
  return (
    <Layout style={{minHeight:"100vh"}}>
    <Routes>
      <Route  path='/' element={<LoginPage />}/>
      <Route path='/SignUp' element={<SignUpPage/>}/>
      <Route path='/Main' element ={<MainContent><MainPage/></MainContent>}/>
      <Route path='/Treatment' element={<MainContent><TreatmentPage/></MainContent>}/>
    </Routes>
    </Layout>
  );
}

export default App;
