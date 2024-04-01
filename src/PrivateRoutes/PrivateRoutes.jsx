import { useContext } from "react";
import { AuthContext } from "../assets/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <p className="py-20">Loading...</p>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'}></Navigate>;
};

export default PrivateRoutes;