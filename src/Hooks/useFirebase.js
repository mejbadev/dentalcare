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
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user);
            }).catch((error) => {
                setError(error.message);
            });
    }
    const login =(email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
        // Signed in 
        const user = result.user;
        setUser(user);
        // ...
    })
    .catch((error) => {
       
    });

    }
    const createUser =(name, email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
        // Signed in 
       const user = result.user;
       user.displayName = name;
       setUser(user);
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
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);

            }else{
                // console.log('user in signed out');
            }
        })
    }, [])

    return { user, error, handleGoogleLogin, logOut, message, createUser, login};
}

export default useFirebase;