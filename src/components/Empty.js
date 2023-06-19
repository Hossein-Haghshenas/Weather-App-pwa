// ant design
import { CloudOutlined, WarningTwoTone } from "@ant-design/icons";
import { Space, Typography } from "antd";

const { Title, Text } = Typography;

const Empty = ({ text, preText }) => {
  return (
    <Space direction="vertical" align="center">
      <Title level={4}>
        <CloudOutlined className="fs-20" /> {text}
      </Title>
      {preText && (
        <Text>
          <WarningTwoTone /> {preText}
        </Text>
      )}
    </Space>
  );
};

export default Empty;
