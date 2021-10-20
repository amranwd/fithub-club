import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateProfile, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializationFirebase from "../firebase/firebase.init";

initializationFirebase();

const useFirebase = () => {
    // declare of states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    // provider inits
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // email password login/ register init
    const handleName = event => {
        setName(event.target.value);
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const toggleLogin = (e) => {
        setIsLogin(e.target.checked);
    }

    // working on registration
    const handleRegistration = (event) => {
        event.preventDefault();
        // passwrod error set
        if (password.length < 6) {
            setError('Password must be 6 chracter long');
            return;
        }
        if (isLogin) {
            processLogin(email, password);
        } else {
            registerNewUser(email, password);
        }


    }
    // process login
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // user registration process
    const registerNewUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }
    // updating user displayName
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })

    }

    // process google sign in
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])
    // process log out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    return {
        user,
        error,
        signInWithGoogle,
        logOut,
        handleRegistration,
        handleName,
        handleEmail,
        handlePassword,
        toggleLogin,
        processLogin,
        isLogin
    }
}

export default useFirebase;
