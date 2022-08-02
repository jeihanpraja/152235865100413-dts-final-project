import React from "react";
import { TextField, Autocomplete } from "@mui/material";

export default function FilterBar({ filterChange }) {
  //fungsi ketika filter dipilih dan value diganti
  const FilterOnChangeHandler = (event, value) => {
    event.preventDefault();
    if (value) {
      filterChange(value);
    } else {
      return;
    }
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box"
      options={Category}
      sx={{
        width: 250,
        mt: 2,
        mb: 2,
      }}
      renderInput={(params) => <TextField {...params} label="Category" />}
      onInputChange={(event, value) => FilterOnChangeHandler(event, value)}
    />
  );
}

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
