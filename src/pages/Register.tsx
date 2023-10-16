import { UserAddOutlined } from "@ant-design/icons";
import styles from "./Register.module.scss";
import { Typography, Space, Form, Input, Button } from "antd";

import { Link } from "react-router-dom";
const { Title } = Typography;

const Register = () => {
  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={3}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>注册新用户</Title>
        </Space>
      </div>
      <div>
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
          <Form.Item label="用户名" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="昵称" name="nickName">
            <Input />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item label="确认密码" name="repassword">
            <Input.Password />
          </Form.Item>

          <Form.Item labelCol={{ offset: 6, span: 16 }}>
            <Space>
              <Button type="primary">注册</Button>
              <Link to="/login">已有账号，登入</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
