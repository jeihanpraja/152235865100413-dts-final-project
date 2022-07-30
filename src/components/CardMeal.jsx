import React from "react";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CardMeal({ food }) {
  let navigate = useNavigate();

  function handlerClick(event, idMeal) {
    event.preventDefault();
    const urlForDetailPage = `/detail/${idMeal}`;
    navigate(urlForDetailPage);
  }

  return (
    <Card sx={{ minWidth: 250, width: 250, m: 2 }}>
      <CardActionArea onClick={(event) => handlerClick(event, food.idMeal)}>
        <CardMedia component="img" height="145" image={food.strMealThumb} alt={food.strMeal} />
        <CardContent>
          <Typography variant="body1" component="div">
            {food.strMeal}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
