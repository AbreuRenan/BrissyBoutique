import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contato from "./components/Contato";
import Loja from "./components/Loja";
import "./App.css";
import AuthFeedPlugin from "./components/InstaFeed/AuthFeedPlugin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/auth" element={<AuthFeedPlugin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
