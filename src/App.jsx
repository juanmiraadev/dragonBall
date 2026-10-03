import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/pages/Home";
import CharactersDashboard from "./components/pages/CharactersDashboard";
import Login from "./components/pages/Login";
import CharacterDetails from "./components/pages/CharacterDetails";
import Error404 from "./components/pages/Error404"
import ProtectedRoute from "./components/ui/ProtectedRoute";


export default function App() {

  const [isLogged, setIsLogged] = useState(() => {
    return sessionStorage.getItem("isLogged") === "true"
  })

  const handleLogin = () => {
    sessionStorage.setItem("isLogged", "true");
    setIsLogged(true)
  }

  const handleLogout = () => {
    sessionStorage.removeItem("isLogged");
    setIsLogged(false)
  }

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home handleLogin={handleLogin} />} />
        <Route path="/characters" element={
          <ProtectedRoute isLogged={isLogged}>
            <CharactersDashboard handleLogout={handleLogout}/>
          </ProtectedRoute>
        } />
        <Route path="/character/:id" element={
          <ProtectedRoute isLogged={isLogged}>
            <CharacterDetails />
          </ProtectedRoute>
        } />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}