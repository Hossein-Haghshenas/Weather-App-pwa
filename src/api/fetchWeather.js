import axios from "axios";

const URL = "";
const API_KEY = "";

export const fetchWeather = async (query) => {
  const { data } = axios.get(URL, {
    q: query,
    units: "metric",
    APPID: API_KEY,
  });

  return data;
};
