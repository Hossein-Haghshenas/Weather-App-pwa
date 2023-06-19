// ant design
import { CloudOutlined } from "@ant-design/icons";
import { Typography } from "antd";
// Components
import Container from "./Container";

const { Title } = Typography;

const Empty = ({ text }) => {
  return (
    <Container>
      <Title level={5}>
        <CloudOutlined /> {text}
      </Title>
    </Container>
  );
};

export default Empty;
