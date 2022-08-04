import React from "react";
import { CssBaseline, Box, Typography, Container, Toolbar } from "@mui/material";
import CopyrightJeihan from "./CopyrightJeihan";

export default function StickyFooter() {
  return (
    <Box
      // position="sticky"
      component="footer"
      sx={{
        bottom: 0,
        left: 0,
        right: 0,
        // py: 2,
        // px: 2,
        backgroundColor: "#1976d2",
        color: "white",
      }}
    >
      <Toolbar>
        <CssBaseline />
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography variant="body1" component="div">
            DTS Final Project React Developer
          </Typography>
          <CopyrightJeihan />
        </Container>
      </Toolbar>
    </Box>
  );
}
