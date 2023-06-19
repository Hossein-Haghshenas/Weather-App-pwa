// utils
import { fetchWeather } from "./../api/fetchWeather";
// ant design
import { Input as AntdInput } from "antd";
// Components
import Container from "./Container";

const { Search } = AntdInput;

const Input = ({ setWeatherData, setIsLoading }) => {
  // search input handler
  const onSearch = async (value) => {
    setIsLoading(true);
    // get data from api
    const data = await fetchWeather(value);
    Object.keys(data).length > 0 && setIsLoading(false);
    setWeatherData(data);
  };

  return (
    <Container>
      <Search placeholder="Search..." size="large" onSearch={onSearch} enterButton />
    </Container>
  );
};

export default Input;
