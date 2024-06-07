import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../Pages/PublicPages/Home/Home'
import About from '../Pages/PublicPages/About/About'
import ProductPage from '../Pages/ProtectedPages/ProductsPage/ProductPage'
import useAuth from '../CustomHooks/useAuth'
import { reload } from 'firebase/auth'
import { auth } from '../config/firebaseConfig'

const ProtectedRoutes = () => {
    const { user } = useAuth()

    return (
        user?.emailVerified ?
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes> :
            <div className="h-[calc(100vh-60px)] flex flex-col justify-center items-center">
                <p className="text-red-500 text-2xl font-semibold">Email Not Verified. Please Verify Your Email.</p>
                <button onClick={() => { reload(auth.currentUser) }} className="bg-white text-themeColor py-2 px-4 rounded shadow-lg font-semibold hover:scale-105 transition">Check Verification Status</button>
            </div>
    )
}

export default ProtectedRoutes
