import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged , signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeFirebase from "../Firebase/firebase.initialize";

initializeFirebase();

const useFirebase = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    
  
    const handleGoogleLogin = () => {
       return signInWithPopup(auth, provider)
       
    }
    const login =(email, password)=>{
       return signInWithEmailAndPassword(auth, email, password)
  

    }
    const createUser =(name, email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
        // Signed in 
       const user = result.user;
       user.displayName = name;
       setUser(user);
       console.log(user.displayName);
    
        // ...
      })
      .catch((error) => {
       
        // ..
      });
    }
    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setMessage('Logout Successfully');
            setUser({});
        }).catch((error)=>{
            setError(error.message);
        });
    }
    useEffect(()=>{
      const unsubscribed= onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);

            }else{
                // console.log('user in signed out');
                setUser({})
            }
        });
        return ()=>unsubscribed;
    }, [])

    return { user, error, handleGoogleLogin, logOut, message, createUser, login};
}

export default useFirebase;