import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { Layout, Skeleton } from 'antd';
import { SignUpPage } from './pages/SignUpPage';
import useLocalStorage from './hooks/useLocalStorage';
import { MainPage } from './pages/MainPage';
import { MainContent } from './components/MainContent';
import { TreatmentPage } from './pages/TreatmentPage';
import SelectedRegionProvider from './components/SelectedRegionProvider';
// import { getUser } from './services/authService';
import { ProfilePage } from './pages/ProfilePage';

function App() {
  // useEffect(()=>{
  //   const getFromLocalStorage = async ()=>{
  //     const user = getUser();
  //   }
  //   getFromLocalStorage();
  // },[])
  const [datas, setDatas] = useLocalStorage('datas', []);
  // const [user, setUser] =useState<IUser>();
  return (
    <SelectedRegionProvider>
    <Layout style={{minHeight:"100vh"}}>
    <Routes>
      <Route  path='/' element={<LoginPage />}/>
      <Route path='/SignUp' element={<SignUpPage/>}/>
      <Route path='/Main' element ={<MainContent><MainPage/></MainContent>}/>
      <Route path='/Treatment' element={<MainContent><TreatmentPage/></MainContent>}/>
      <Route path='/Profile' element={<MainContent><ProfilePage/></MainContent>}/>
    </Routes>
    </Layout>
    </SelectedRegionProvider>
  );
}

export default App;
