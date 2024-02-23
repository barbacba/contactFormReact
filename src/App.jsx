import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <BrowserRouter basename="/contactFormReact/">
      <Routes>
        <Route path="/" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
