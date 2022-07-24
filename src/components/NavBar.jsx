import * as React from "react";

import { AppBar, Box, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  let navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DTS Final Project
          </Typography>
          <Button color="inherit" onClick={handleClick}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
