import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { auth, googleProvider } from "../../../config/firebaseConfig"
import toast from 'react-hot-toast';
function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const [validPassword, setValidPassword] = useState({
        length: null,
        lowercase: null,
        uppercase: null,
        number: null,
        specialChar: null,
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
        const isValid = passwordRegex.test(password)

        if (isValid) {
            if (password === confirmPassword) {
                try {
                    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
                    await sendEmailVerification(userCredential.user)
                    toast.success("Email verification link has been sent to your mail. Please verify your mail")
                } catch (error) {
                    console.log(error);
                    toast.error("There was some Error")
                }
            }
            else {
                toast.error("Confirm your password")
            }
        }

    };


    useEffect(() => {
        if (password) {
            setValidPassword({
                length: password.length >= 12,
                lowercase: /[a-z]/.test(password),
                uppercase: /[A-Z]/.test(password),
                number: /\d/.test(password),
                specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
            })
        }
    }, [password])

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
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-themeColor"
                            placeholder="Enter your email address"
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
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-themeColor"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <p className="text-xs text-red-500">{!(password === confirmPassword) && "Password doesn't match"}</p>
                    <button type="submit" className="w-full bg-themeColor text-white py-2 px-4 rounded-md font-semibold hover:bg-opacity-80 transition">Sign Up</button>
                </form>
                <div className="flex gap-2 items-center justify-center my-2">
                    <hr className="w-1/3 border-b border-gray-300 rounded-lg" />
                    <span>OR</span>
                    <hr className="w-1/3 border-b border-gray-300 rounded-lg" />
                </div>
                <div>
                    <button onClick={handleSignupGoogle} className="w-full text-themeColor border border-themeColor py-2 px-4 rounded-md font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-4"> <FcGoogle /> Sign In With Google</button>
                </div>
                <div className="">
                    <p className="text-center text-xs text-red-700 mt-1">{validPassword.length === false && "Password Too Short. Password must be 12 characters long."}</p>
                    <p className="text-center text-xs text-red-700 mt-1">{validPassword.lowercase === false && "Password must contain at least one lowercase letter."}</p>
                    <p className="text-center text-xs text-red-700 mt-1">{validPassword.uppercase === false && "Password must contain at least one uppercase letter."}</p>
                    <p className="text-center text-xs text-red-700 mt-1">{validPassword.number === false && "Password must contain at least one number."}</p>
                    <p className="text-center text-xs text-red-700 mt-1">{validPassword.specialChar === false && "Password must contain at least one special character."}</p>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
