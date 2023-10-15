import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const nav = useNavigate()
  return (
    <Result
      status="404"
      title="404"
      subTitle="未找到对应页面"
      extra={
        <Button type="primary" onClick={() => nav("/")}>
          首页
        </Button>
      }
    />
  );
};

export default NotFound;
