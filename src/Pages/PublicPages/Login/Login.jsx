import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../../config/firebaseConfig';
import toast from 'react-hot-toast';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.log(error);
            toast.error("There was some error. Please Try again after some time")
        }
    };

    const handleSignupGoogle = async (e) => {
        e.preventDefault();
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    }

    return (
        <div className="h-[calc(100vh-60px)] bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="mail" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="mail"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-themeColor"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-themeColor"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-themeColor text-white py-2 px-4 rounded-md font-semibold hover:bg-opacity-80 transition">Login</button>
                </form>
                <div className="flex gap-2 items-center justify-center my-2">
                    <hr className="w-1/3 border-b border-gray-300 rounded-lg" />
                    <span>OR</span>
                    <hr className="w-1/3 border-b border-gray-300 rounded-lg" />
                </div>
                <div>
                    <button onClick={handleSignupGoogle} className="w-full text-themeColor border border-themeColor py-2 px-4 rounded-md font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-4"> <FcGoogle /> Sign In With Google</button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
