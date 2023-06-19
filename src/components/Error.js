// ant design
import { WarningOutlined } from "@ant-design/icons";
import { Typography } from "antd";
// Components
import Container from "./Container";

const { Title } = Typography;

const Error = ({ message }) => {
  return (
    <Container className="error_Container">
      <WarningOutlined className="fs-30" />
      <Title level={5}>{message} !</Title>
    </Container>
  );
};

export default Error;
