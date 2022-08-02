import React from "react";
import { auth, logOut } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { AppBar, Box, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { SearchBar, SearchIconWrapper, StyledInputBase } from "./SearchBar";
import FilterBar from "./FilterBar";

export default function NavBar({ searchOrFilter, changeSearchValue }) {
  let navigate = useNavigate();

  //ambil state user, ada atau null
  const [user] = useAuthState(auth);

  const handleClickLogin = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  const handleClickLogout = (event) => {
    event.preventDefault();
    logOut();
  };

  const handleSearchChange = (event) => {
    event.preventDefault();
    changeSearchValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
      <AppBar position="fixed" component="nav">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/search")}>
              Search
            </Button>
            <Button color="inherit" onClick={() => navigate("/filter")}>
              Filter
            </Button>
          </Box>

          <Typography
            variant="body1"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center", ml: 4 }}
          >
            DTS Final Project
          </Typography>

          {/* tampilkan kotak search apabila di halaman /search */}
          {searchOrFilter === "search" ? (
            <SearchBar>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
                onChange={(event) => handleSearchChange(event)}
                autoFocus
              />
            </SearchBar>
          ) : (
            ""
          )}

          <Typography variant="body2" sx={{ mr: 4 }}>
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
