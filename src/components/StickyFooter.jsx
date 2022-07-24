import React from "react";
import { CssBaseline, Box, Typography, Container } from "@mui/material";
import CopyrightJeihan from "./CopyrightJeihan";

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        py: 2,
        px: 2,
        backgroundColor: "#1976d2",
        color: "white",
      }}
    >
      <CssBaseline />
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography variant="body1" component="div">
          DTS Final Project React Developer
        </Typography>
        <CopyrightJeihan />
      </Container>
    </Box>
  );
}
