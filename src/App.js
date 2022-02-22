import React, { Suspense } from "react";
import Loader from "./components/Loader";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import HomeComponent from "./components/pageScreen/home";

import { GlobalStyle } from "./globalStyle";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <GlobalStyle />
        <Navbar />
        <HomeComponent />
        <Routes>
          <Route path="/" component={HomeComponent} />
          <Route path="/loader" component={Loader} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
