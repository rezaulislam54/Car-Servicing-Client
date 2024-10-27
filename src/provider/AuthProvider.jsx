import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase-Config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setloading] = useState(true);
  const [user, setuser] = useState();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const emailAndPasswordLogin = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogin = () => {
    setloading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    setloading(true);
    return signOut(auth);
  };

  // update profile
  const updateUserProfile = (obj) => {
    setloading(true);
    return updateProfile(auth.currentUser, obj);
  };

  const ResetPassword = (email) => {
    setloading(true);
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsebscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setloading(false);
      const userEmail = currentUser?.email || user?.email;
      const loggedIn = { email: userEmail };
      if (currentUser) {
        axios
          .post("https://car-servicing-server-delta.vercel.app/jwt", loggedIn, {
            withCredentials: true,
          })
          .then((res) => {
            // console.log(res.data);
          });
      } else {
        axios
          .post("https://car-servicing-server-delta.vercel.app/logout", loggedIn, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });

    return () => {
      unsebscribe();
    };
  }, []);

  const Info = {
    updateUserProfile,
    ResetPassword,
    loading,
    setloading,
    user,
    createUser,
    githubLogin,
    googleLogin,
    emailAndPasswordLogin,
    logOut,
  };

  return <AuthContext.Provider value={Info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

