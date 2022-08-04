import React, { useState, useEffect } from "react";
import { mealDbInstance } from "../apis/mealDB";

//import carousel component and styles
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 2 }}>
      {/* list Seafood Carousel*/}
      <Typography variant="h5" sx={{ ml: 2 }}>
        Seafood Meals
      </Typography>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        containerClass="container-with-dots"
        infinite
        pauseOnHover
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 6,
            partialVisibilityGutter: 40,
          },
        }}
        shouldResetAutoplay
        showDots
        slidesToSlide={1}
      >
        {seafoods?.map((food) => {
          return <CardMeal key={food.idMeal} food={food} />;
        })}
      </Carousel>

      {/* list Beef Carousel*/}
      <Typography variant="h5" sx={{ ml: 2 }}>
        Beef Meals
      </Typography>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        containerClass="container-with-dots"
        infinite
        pauseOnHover
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 6,
            partialVisibilityGutter: 40,
          },
        }}
        shouldResetAutoplay
        showDots
        slidesToSlide={1}
      >
        {beefs?.map((food) => {
          return <CardMeal key={food.idMeal} food={food} />;
        })}
      </Carousel>

      {/* list Chicken Carousel*/}
      <Typography variant="h5" sx={{ ml: 2 }}>
        Chicken Meals
      </Typography>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        containerClass="container-with-dots"
        infinite
        pauseOnHover
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 6,
            partialVisibilityGutter: 40,
          },
        }}
        shouldResetAutoplay
        showDots
        slidesToSlide={1}
      >
        {chickens?.map((food) => {
          return <CardMeal key={food.idMeal} food={food} />;
        })}
      </Carousel>
    </Box>
  );
}
