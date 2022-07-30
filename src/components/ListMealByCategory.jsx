import React, { useState, useEffect } from "react";
import { mealDbInstance } from "../apis/mealDB";

import { Typography, Box } from "@mui/material";
import CardMeal from "./CardMeal";

export default function ListMealByCategory() {
  const [seafoods, setSeafoods] = useState([]);
  const [beefs, setBeefs] = useState([]);
  const [chickens, setChickens] = useState([]);

  useEffect(() => {
    const fetchSeafoods = async () => {
      try {
        //ambil data seafood
        const responseSeafood = await mealDbInstance.get("/filter.php", {
          params: {
            c: "Seafood",
          },
        });
        setSeafoods(responseSeafood.data.meals);

        //ambil data beef meal
        const responseBeefs = await mealDbInstance.get("/filter.php", {
          params: {
            c: "Beef",
          },
        });
        setBeefs(responseBeefs.data.meals);

        //ambil data chicken meals
        const responseChickens = await mealDbInstance.get("/filter.php", {
          params: {
            c: "Chicken",
          },
        });
        setChickens(responseChickens.data.meals);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSeafoods();
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {/* list Seafood */}
      <Typography variant="h5" sx={{ ml: 2 }}>
        Seafood Meals
      </Typography>
      <Box sx={{ display: "flex" }}>
        {seafoods?.map((food) => {
          return <CardMeal key={food.idMeal} food={food} />;
        })}
      </Box>

      {/* list Beef */}
      <Typography variant="h5" sx={{ ml: 2 }}>
        Beef Meals
      </Typography>
      <Box sx={{ display: "flex" }}>
        {beefs?.map((food) => {
          return <CardMeal key={food.idMeal} food={food} />;
        })}
      </Box>

      {/* list Chicken */}
      <Typography variant="h5" sx={{ ml: 2 }}>
        Chicken Meals
      </Typography>
      <Box sx={{ display: "flex" }}>
        {chickens?.map((food) => {
          return <CardMeal key={food.idMeal} food={food} />;
        })}
      </Box>
    </Box>
  );
}
