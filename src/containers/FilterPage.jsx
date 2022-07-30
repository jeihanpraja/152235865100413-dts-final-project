import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import FilterBar from "../components/FilterBar";
import NavBar from "../components/NavBar";
import StickyFooter from "../components/StickyFooter";

export default function FilterPage() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <NavBar />
      <Container sx={{ minHeight: "85vh", mt: 9 }}>
        <FilterBar />
      </Container>
      <StickyFooter />
    </Box>
  );
}
