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
          <Form.Item
            label="用户名"
            name="name"
            rules={[
              { required: true, message: "请输入用户名" },
              {
                type: "string",
                min: 5,
                max: 20,
                message: "字符长度在5-20之间",
              },
              {
                pattern: /^\w+$/,
                message: "只能是数字，字母，下划线_",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="昵称" name="nickName">
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="确认密码"
            name="repassword"
            dependencies={["password"]} // password变化
            rules={[
              { required: true, message: "请输入密码" },
              ({ getFieldValue }) => {
                return {
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject(new Error("两次密码不一致！"));
                    }
                  },
                };
              },
            ]}
          >
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
