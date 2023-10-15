import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import DescriptionEn from './Pages/DescriptionEn/DescriptionEn';
import HomeEn from './Pages/HomeEn/HomeEn';
import RoomsEn from './Pages/RoomsEn/RoomsEn';
import LoginSignUpE from './Pages/LoginSignUpEn/LoginSignUpEn';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";

function App({ Component, pageProps }) {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomeEn />} path="/homeen" />
          <Route element={<HomeEn />} path="/" />
          <Route element={<RoomsEn />} path="/roomsen"/>
          <Route element={<DescriptionEn {...pageProps}/>} path="/description" />
          <Route element={<LoginSignUpE />} path="/login"/>
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;
