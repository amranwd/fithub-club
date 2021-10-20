import { useContext } from "react"
import { AuthContext } from "../Componnets/Context/AuthProvider"

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;