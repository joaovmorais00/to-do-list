import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthContext from "./context/AuthContext";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

function App() {
  const [user, setUser] = useState(null);

  // const { getAccount } = useAuthentication();

  useEffect(() => {
    if (user) console.log(user, "entrou user true");
  }, [user]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  const theme = createTheme({
    typography: {
      fontFamily: "Montserrat, sans-serif",
    },
    palette: {
      primary: {
        main: "#000",
      },
      secondary: {
        main: "#fff",
      },
    },
  });
  return (
    <>
      <AuthContext.Provider value={[user]}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/"
                element={user ? <Home /> : <Navigate to="/login" />}
              />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
