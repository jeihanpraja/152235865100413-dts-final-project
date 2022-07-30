import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { mealDbInstance } from "../apis/mealDB";

export default function FilterBar() {
  // buat state untuk daftar makanan
  const [list, setList] = useState([]);

  //buat fungsi untuk fetch data dari mealDB API
  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await mealDbInstance.get("/list.php", {
          params: {
            c: "list",
          },
        });
        setList(response.data.meals);
      } catch (error) {
        console.log(error);
      }
    };
    fetchList();
  }, []);

  return (
    <Box>
      {list.map((el) => {
        return <Typography>{el.strCategory}</Typography>;
      })}
    </Box>
  );
}
