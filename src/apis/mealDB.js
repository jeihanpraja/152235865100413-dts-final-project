import axios from "axios";

const mealDbInstance = axios.create({
  baseURL: "https://themealdb.com/api/json/v1/1",
  // timeout: 1000,
  // headers: { "X-Custom-Header": "foobar" },
});

export { mealDbInstance };
