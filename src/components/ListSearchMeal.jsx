import React, { useState, useEffect } from "react";
import { Container } from "@mui/system";
import { mealDbInstance } from "../apis/mealDB";
import CardMeal from "./CardMeal";

export default function ListSearchMeal({ searchValue }) {
  //state meals by search query
  const [searchMeal, setSearchMeal] = useState();

  useEffect(() => {
    const fetchSearchMeal = async () => {
      try {
        const responseSearchMeal = await mealDbInstance.get("/search.php", {
          params: {
            s: searchValue,
          },
        });
        setSearchMeal(responseSearchMeal.data.meals);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSearchMeal();
  }, [searchValue]);

  return (
    <Container
      maxWidth="false"
      sx={{
        display: "flex",
        flexFlow: "row wrap",
      }}
    >
      {searchMeal?.map((food) => {
        return <CardMeal key={food.idMeal} food={food} />;
      })}
    </Container>
  );
}
