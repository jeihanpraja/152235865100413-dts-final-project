import React from "react";
import { CssBaseline, Box, Typography, Container } from "@mui/material";

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
      <Container maxWidth="sm">
        <Typography variant="body1">DTS Final Project React Developer</Typography>
        <Typography variant="body2" component="span">
          Copyright © Jeihan Praja Yudanto 2022
        </Typography>
      </Container>
    </Box>
  );
}
