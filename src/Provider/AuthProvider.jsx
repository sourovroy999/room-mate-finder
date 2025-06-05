import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)

const googleProvider=new GoogleAuthProvider()    

const registerUser=(email, password)=>{
    // setLoading(true)
    return createUserWithEmailAndPassword(auth, email,password)
}

const googleSignIn=()=>{

    return signInWithPopup(auth, googleProvider)
}

const signIn=(email, password)=>{
    // setLoading(true)

    return signInWithEmailAndPassword(auth, email,password)
}

const updateUser=(name,photo)=>{
    updateProfile(auth.currentUser, {
        displayName:name,
        photoURL:photo
    })
     .then(()=>{
       console.log('profile updated');
   })
     .catch(error=>{  console.log( 'error occuerd',error);
    })

}

const logOut=()=>{
    return signOut(auth)
}

    const[theme,setTheme]=useState('light')



 const allInfo={
    registerUser,
    googleSignIn,
    signIn,
    user,
    setUser,
    logOut,
    updateUser,
    loading,
    theme,
    setTheme

    
 }

 useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })

    return(()=>{
        unsubscribe()
    })
 }, [])

    return (
        <AuthContext.Provider value={allInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;