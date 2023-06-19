import { Col } from "antd";

const Container = ({ children, className }) => {
  return (
    <Col className={className && className}>
      <Col>{children}</Col>
    </Col>
  );
};

export default Container;
