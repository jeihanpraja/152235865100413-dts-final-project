import React from "react";
import { TextField, Autocomplete, Box } from "@mui/material";

export default function FilterBar({ areaOrCategory, areaOrCategoryChange, filterChange }) {
  //fungsi utk memilih Area atau Category
  const filterOptionHandler = (event, value) => {
    event.preventDefault();
    if (value) {
      areaOrCategoryChange(value);
    } else {
      return;
    }
  };

  //fungsi ketika filter dipilih dan value diganti
  const filterOnChangeHandler = (event, value) => {
    event.preventDefault();
    if (value) {
      filterChange(value);
    } else {
      return;
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
      <Autocomplete
        disablePortal
        id="combo-box1"
        options={FilterOption}
        sx={{
          width: 250,
          mt: 2,
          mb: 2,
        }}
        renderInput={(params) => <TextField {...params} label="Filter By" />}
        onInputChange={(event, value) => filterOptionHandler(event, value)}
      />
      <Autocomplete
        disablePortal
        id="combo-box2"
        options={areaOrCategory === "Area" ? Area : Category}
        sx={{
          width: 250,
          mt: 2,
          mb: 2,
        }}
        renderInput={(params) => <TextField {...params} label={areaOrCategory} />}
        onInputChange={(event, value) => filterOnChangeHandler(event, value)}
      />
    </Box>
  );
}

const FilterOption = [{ label: "Area" }, { label: "Category" }];

const Category = [
  { label: "Beef" },
  { label: "Breakfast" },
  { label: "Chicken" },
  { label: "Dessert" },
  { label: "Goat" },
  { label: "Lamb" },
  { label: "Miscellaneous" },
  { label: "Pasta" },
  { label: "Pork" },
  { label: "Seafood" },
  { label: "Side" },
  { label: "Starter" },
  { label: "Vegan" },
  { label: "Vegetarian" },
];

const Area = [
  {
    label: "American",
  },
  {
    label: "British",
  },
  {
    label: "Canadian",
  },
  {
    label: "Chinese",
  },
  {
    label: "Croatian",
  },
  {
    label: "Dutch",
  },
  {
    label: "Egyptian",
  },
  {
    label: "French",
  },
  {
    label: "Greek",
  },
  {
    label: "Indian",
  },
  {
    label: "Irish",
  },
  {
    label: "Italian",
  },
  {
    label: "Jamaican",
  },
  {
    label: "Japanese",
  },
  {
    label: "Kenyan",
  },
  {
    label: "Malaysian",
  },
  {
    label: "Mexican",
  },
  {
    label: "Moroccan",
  },
  {
    label: "Polish",
  },
  {
    label: "Portuguese",
  },
  {
    label: "Russian",
  },
  {
    label: "Spanish",
  },
  {
    label: "Thai",
  },
  {
    label: "Tunisian",
  },
  {
    label: "Turkish",
  },
  {
    label: "Unknown",
  },
  {
    label: "Vietnamese",
  },
];
