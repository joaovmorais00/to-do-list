import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuthentication } from "../../hooks/useAuthentication";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, getAccount } = useAuthentication();

  const handleLogin = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      rowSpacing={5}
      sx={{ padding: "10rem" }}
    >
      <Grid item>
        <Typography variant="h3">Login</Typography>
      </Grid>
      <Grid item sx={{ width: "100%" }}>
        <Box component="form" onSubmit={handleLogin}>
          <Grid container direction="column" alignItems="center" rowSpacing={3}>
            <Grid item sx={{ width: "25%" }}>
              <TextField
                sx={{ width: "100%" }}
                required
                variant="standard"
                label="E-mail"
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item sx={{ width: "25%" }}>
              <TextField
                sx={{ width: "100%" }}
                required
                variant="standard"
                label="Senha"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained">
                Entrar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
