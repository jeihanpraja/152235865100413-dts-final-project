import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import ListSearchMeal from "../components/ListSearchMeal";
import NavBar from "../components/NavBar";
import StickyFooter from "../components/StickyFooter";

export default function SearchPage() {
  const [searchValue, setSearchValue] = useState("");

  const changeSearchValue = (value) => {
    return setSearchValue(value);
  };
  return (
    <Box>
      <NavBar changeSearchValue={changeSearchValue} searchOrFilter="search" />
      <Container
        sx={{
          minHeight: "85vh",
          minWidth: "100%",
          alignItems: "center",
          mt: 9,
        }}
      >
        <ListSearchMeal searchValue={searchValue} />
      </Container>
      <StickyFooter />
    </Box>
  );
}
