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
  Grid,
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
          <Typography variant="body1">{food.strInstructions}</Typography>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom sx={{ borderBottom: "1px solid black" }}>
            Ingredients
          </Typography>

          {/* <Grid container spacing={2}>
            <Grid item xs={6} sx={{ border: "1px solid black" }}>
              <Typography>xs=8</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>xs=4</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>xs=4</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>xs=8</Typography>
            </Grid>
          </Grid> */}

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <ListItem>{`- ${food.strIngredient1} : ${food.strMeasure1}`}</ListItem>
              <ListItem>{`- ${food.strIngredient2} : ${food.strMeasure2}`}</ListItem>
              <ListItem>{`- ${food.strIngredient3} : ${food.strMeasure3}`}</ListItem>
              <ListItem>{`- ${food.strIngredient4} : ${food.strMeasure4}`}</ListItem>
              <ListItem>{`- ${food.strIngredient5} : ${food.strMeasure5}`}</ListItem>
            </Grid>

            <Grid item xs={6}>
              <ListItem>{`- ${food.strIngredient6} : ${food.strMeasure6}`}</ListItem>
              <ListItem>{`- ${food.strIngredient7} : ${food.strMeasure7}`}</ListItem>
              <ListItem>{`- ${food.strIngredient8} : ${food.strMeasure8}`}</ListItem>
              <ListItem>{`- ${food.strIngredient9} : ${food.strMeasure9}`}</ListItem>
              <ListItem>{`- ${food.strIngredient10} : ${food.strMeasure10}`}</ListItem>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
