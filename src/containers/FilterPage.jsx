import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import NavBar from "../components/NavBar";
import StickyFooter from "../components/StickyFooter";
import FilterBar from "../components/FilterBar";
import { mealDbInstance } from "../apis/mealDB";
import CardMeal from "../components/CardMeal";

export default function FilterPage() {
  //state AreaOrCategory
  const [areaOrCategory, setAreaOrCategory] = useState("");

  //state filter bar selection
  const [filterSelected, setFilterSelected] = useState("");

  //state fetch Meals by Filter
  const [mealsByFilter, setMealsByFilter] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        if (areaOrCategory === "Area") {
          const responseMealsByArea = await mealDbInstance.get("/filter.php", {
            params: {
              a: filterSelected,
            },
          });
          setMealsByFilter(responseMealsByArea.data.meals);
        } else {
          const responseMealsByCategory = await mealDbInstance.get("/filter.php", {
            params: {
              c: filterSelected,
            },
          });
          setMealsByFilter(responseMealsByCategory.data.meals);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMeals();
  }, [filterSelected, areaOrCategory]);

  const AreaOrCategoryChange = (value) => {
    setAreaOrCategory(value);
    console.log(areaOrCategory);
    return areaOrCategory;
  };

  const filterChange = (filter) => {
    setFilterSelected(filter);
    console.log(filterSelected);
    return filterSelected;
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <NavBar searchOrFilter="filter" />
      <Container
        sx={{
          minHeight: "85vh",
          minWidth: "95%",
          mt: 10,
          // border: "1px dashed black",
        }}
      >
        <FilterBar
          filterChange={filterChange}
          areaOrCategoryChange={AreaOrCategoryChange}
          areaOrCategory={areaOrCategory}
        />
        <Box sx={{ display: "flex", flexFlow: "row wrap" }}>
          {mealsByFilter?.map((food) => {
            return <CardMeal key={food.idMeal} food={food} />;
          })}
        </Box>
      </Container>
      <StickyFooter />
    </Box>
  );
}
