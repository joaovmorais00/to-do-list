import { useContext } from "react";

import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import AuthContext from "../context/AuthContext";
import { auth } from "../firebase/config";

export const useAuthentication = () => {
  const [user, setUser] = useContext(AuthContext);

  const login = async (data) => {
    try {
      // const session = await account.createEmailSession(
      //   data.email,
      //   data.password
      // );
      const response = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      return response;
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      const response = await signOut(auth);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const getAccount = async () => {
    // if (localStorage.getItem("cookieFallback").includes("session")) {
    //   console.log(
    //     "to entrando no storage",
    //     localStorage.getItem("cookieFallback")
    //   );
    //   try {
    //     const response = await account.get();
    //     setUser(response);
    //     return response;
    //   } catch (error) {
    //     throw error;
    //   }
    // } else {
    //   setUser(null);
    // }
    try {
      const response = await account.get();
      console.log(response, "response do get account");
      setUser(response);
      return response;
    } catch (error) {
      throw error;
    }
  };

  return { login, logout, getAccount };
};
