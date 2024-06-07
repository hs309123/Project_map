import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../config/firebaseConfig"

const useAuth = () => {

  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true)
        setUser(user.toJSON())
      }
      else if (!user) {
        setIsLogin(false)
        setUser(null)
      }
    })

    return () => unsubscribe()


  }, [auth?.currentUser, setIsLogin, setUser])

  return { isLogin, user }
}

export default useAuth
