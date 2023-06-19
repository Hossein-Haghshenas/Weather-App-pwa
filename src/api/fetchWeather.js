import axios from "axios";

const URL = "http://api.weatherapi.com/v1";
const API_KEY = "70c87a1f99af4e288c774749231706";

export const fetchWeather = (query) => {
  const axiosConfig = {
    method: "GET",
    baseURL: URL,
    url: "/current.json",
    params: { key: API_KEY, q: query },
  };

  return axios({ ...axiosConfig })
    .then((res) => res.data)
    .catch((err) => err.message);
};
