import { BrowserRouter } from "react-router-dom"
import PublicRoutes from "./RoutesPath/PublicRoutes"
import ProtectedRoutes from "./RoutesPath/ProtectedRoutes"
import Navbar from "./Pages/Components/Navbar/Navbar"
import useAuth from "./CustomHooks/useAuth"
import { Toaster } from "react-hot-toast"

const App = () => {

  const { isLogin } = useAuth()

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {isLogin ?
          <ProtectedRoutes /> :
          <PublicRoutes />
        }
        <Toaster position="top-center" reverseOrder={false} />
      </BrowserRouter>
    </>
  )
}

export default App
