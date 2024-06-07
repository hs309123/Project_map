import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../Pages/PublicPages/Home/Home'
import About from '../Pages/PublicPages/About/About'
import LoginPage from '../Pages/PublicPages/Login/Login'
import SignupPage from '../Pages/PublicPages/Signup/Signup'

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default PublicRoutes
