// ant design
import { EnvironmentOutlined } from "@ant-design/icons";
import { Space, Typography } from "antd";
// Components
import Container from "./Container";
import Empty from "./Empty";
import Loading from "./Loading";
import Error from "./Error";

const { Title, Text } = Typography;

const Information = ({ weatherData, isLoading }) => {
  // loading situation
  if (isLoading) {
    return (
      <Container className="mt-5">
        <Loading />
      </Container>
    );
  }
  // error situation
  if (typeof weatherData === "string") {
    return (
      <Container className="mt-5 fs-30">
        <Error message={weatherData} />
      </Container>
    );
  }

  // no data situation
  if (Object.keys(weatherData).length === 0) {
    return (
      <Container className="mt-5">
        <Empty text="Enter Your City !" />
      </Container>
    );
  } else {
    // show weather data
    return (
      <Space direction="vertical" align="center">
        {/* city information */}
        <Space className="mt-2">
          <Title level={4}>
            <EnvironmentOutlined className="fs-22 mr-05" />
            {weatherData?.location?.name}
            <sup className="badge">{weatherData?.location?.country.slice(0, 2).toUpperCase()}</sup>
          </Title>
        </Space>

        {/* temp information */}
        <Space>
          <Text className="fs-30" strong>
            {weatherData?.current?.temp_c}
            <sup className="fs-24 mt-05">C</sup>
          </Text>
        </Space>

        {/* weather condition information */}
        <Space direction="vertical" align="center" size={1}>
          <img src={weatherData?.current?.condition.icon} alt="" />
          <Text className="fs-18" italic>
            {weatherData?.current?.condition.text}
          </Text>
        </Space>
      </Space>
    );
  }
};

export default Information;
