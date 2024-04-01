import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    // const name = {name : 'sujon'}


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = ()=>{
        setLoading(true)
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('you observe this', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe;
    },[])


    const authInfo = ({user, loading, createUser, signInUser, logOut});
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}