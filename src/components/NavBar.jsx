import React from "react";
import { auth, logOut } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { AppBar, Box, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  let navigate = useNavigate();

  //status user ada atau null
  const [user] = useAuthState(auth);

  const handleClickLogin = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  const handleClickLogout = (event) => {
    event.preventDefault();
    logOut();
  };

  return (
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "left" }}>
            DTS Final Project
          </Typography>
          <Typography variant="body1" sx={{ mr: 4 }}>
            {user ? user.email : "Anda Belum Login"}
          </Typography>
          {user ? (
            <Button color="inherit" onClick={(event) => handleClickLogout(event)}>
              Log out
            </Button>
          ) : (
            <Button color="inherit" onClick={(event) => handleClickLogin(event)}>
              Log in
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
