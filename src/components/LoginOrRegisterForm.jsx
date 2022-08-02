import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  CssBaseline,
  Avatar,
  TextField,
  Link,
  Grid,
  Button,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CopyrightJeihan from "./CopyrightJeihan";
import { auth, registerEmailPassword, loginEmailPassword } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function LoginOrRegisterForm({ loginOrRegister }) {
  const theme = createTheme();
  let navigate = useNavigate();

  const handleSubmit = (event, loginOrRegister) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email = data.get("email");
    let password = data.get("password");

    if (loginOrRegister === "login") {
      loginEmailPassword(email, password);
    } else if (loginOrRegister === "register") {
      registerEmailPassword(email, password);
    } else {
      console.log("bukan login atau register");
    }
  };

  //state dari user yg sedang login
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      console.log("loading");
      // return ;
    }
    if (user) {
      navigate("/");
    }
    if (error) {
      console.log(error);
    }
  }, [user, loading, error, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {loginOrRegister === "login" ? "Log in" : "Register"}
          </Typography>

          {/* email & password input area */}
          <Box
            component="form"
            onSubmit={(event) => handleSubmit(event, loginOrRegister)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="current-password"
              type="password"
            />

            {/* untuk tampilkan pesan error */}
            <Typography variant="body1">{error ? { error } : ""}</Typography>

            {loginOrRegister === "login" ? (
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 3 }}>
                Log in
              </Button>
            ) : (
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 3 }}>
                Register
              </Button>
            )}

            {loginOrRegister === "login" ? (
              <Grid container sx={{ mb: 3 }}>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    {`Forgot Password?`}
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link href="/register" variant="body2">
                    {`Don't have an account? Register Now`}
                  </Link>
                </Grid>
              </Grid>
            ) : (
              <Grid container sx={{ mb: 3 }}>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Back to log in"}
                  </Link>
                </Grid>
              </Grid>
            )}
          </Box>
          <IconButton onClick={() => navigate("/")} sx={{ alignItems: "center", margin: "auto" }}>
            <HomeIcon fontSize="large" />
            <Typography>Home</Typography>
          </IconButton>
          <CopyrightJeihan />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
