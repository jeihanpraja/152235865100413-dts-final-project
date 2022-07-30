import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
} from "@mui/material";

export default function CardDetailMeal({ food }) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader
        title={food.strMeal}
        subheader={`${food.strCategory} Category`}
        sx={{ textAlign: "center", p: 2 }}
      />

      <CardMedia
        component="img"
        height="450"
        image={food.strMealThumb}
        alt={food.strMeal}
        // sx={{ maxWidth: "50rem" }}
      />

      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box>
          <Typography variant="h6" gutterBottom sx={{ borderBottom: "1px solid black" }}>
            Instructions
          </Typography>
          <Typography variant="body2">{food.strInstructions}</Typography>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom sx={{ borderBottom: "1px solid black" }}>
            Ingredients
          </Typography>
          <List>
            <ListItem>{food.strIngredient1}</ListItem>
            <ListItem>{food.strIngredient2}</ListItem>
            <ListItem>{food.strIngredient3}</ListItem>
          </List>
        </Box>
      </CardContent>
    </Card>
  );
}
