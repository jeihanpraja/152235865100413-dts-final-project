import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import CardDetailMeal from "../components/CardDetailMeal";
import { Container } from "@mui/system";
import NavBar from "../components/NavBar";
import StickyFooter from "../components/StickyFooter";
import ProtectedComponent from "../components/ProtectedComponent";
import { mealDbInstance } from "../apis/mealDB";

export default function DetailPage() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await mealDbInstance.get(`/lookup.php`, {
          params: { i: params.idMeal },
        });
        setFood(response.data.meals);
        // console.log(response.data.meals);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFood();
  }, []);

  let params = useParams();
  return (
    <ProtectedComponent>
      <Box>
        <NavBar />
        <Container
          sx={{
            display: "flex",
            mt: 10,
            mb: 2,
            minHeight: "85vh",
            alignItems: "center",
          }}
        >
          {food.map((food) => {
            return <CardDetailMeal key={food.idMeal} food={food} />;
          })}
        </Container>
        <StickyFooter />
      </Box>
    </ProtectedComponent>
  );
}
