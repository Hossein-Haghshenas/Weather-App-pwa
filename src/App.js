import { useState } from "react";
// Components
import Input from "./components/Input";
import Information from "./components/Information";

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  return (
    <section className="container">
      <Input setWeatherData={setWeatherData} setIsLoading={setIsLoading} />
      <Information weatherData={weatherData} isLoading={isLoading} />
    </section>
  );
};

export default App;
