import React from "react";
import { Container } from "@mui/material";
import ListMealByCategory from "../components/ListMealByCategory";
import NavBar from "../components/NavBar";
import StickyFooter from "../components/StickyFooter";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Container
        maxWidth="false"
        sx={{
          mt: 10,
          paddingLeft: 0,
          marginLeft: 0,
          minHeight: "85vh",
        }}
      >
        <ListMealByCategory />
      </Container>
      <StickyFooter />
    </>
  );
}
