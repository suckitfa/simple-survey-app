import { useNavigate, Link } from "react-router-dom";
import { Typography, Space, Form, Input, Button, Checkbox } from "antd";
import styles from "./Login.module.scss";
import { UserAddOutlined } from "@ant-design/icons";
import { REGISTER_PATHNAME } from "../router";
import { useEffect } from "react";

const USERNAME_KEY = "USERNAME";
const PASSWORD_KEY = "PASSWORD";

function remeberUser(username: string, password: string) {
  localStorage.setItem(USERNAME_KEY, username);
  localStorage.setItem(PASSWORD_KEY, password);
}

function deleteUserFromStorage() {
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(PASSWORD_KEY);
}

function getUserInfoFromStorage() {
  return {
    username: localStorage.getItem(USERNAME_KEY),
    password: localStorage.getItem(PASSWORD_KEY),
  };
}

const { Title } = Typography;
const Login = () => {
  const nav = useNavigate();
  const clickHanlder = () => {
    nav(-1);
  };

  const onFinish = (vals: any) => {
    console.log("vals = ", vals);
    const { username, password, remember } = vals;
    if (vals.remember) {
      remeberUser(username, password);
    } else {
      deleteUserFromStorage();
    }
  };

  const [form] = Form.useForm();
  // 在组件渲染完成的时候执行
  useEffect(() => {
    const { username, password } = getUserInfoFromStorage();
    form.setFieldsValue({
      username,
      password,
    });
  });
  return (
    <>
      <div className={styles.container}>
        <div>
          <Space>
            <Title level={2}>
              <UserAddOutlined />
            </Title>
            <Title level={2}>用户登入</Title>
          </Space>
        </div>
        <Form
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          initialValues={{ remember: true, username: "", password: "" }}
        >
          <Form.Item label="用户名" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ span: 16, offset: 6 }}
          >
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 16, offset: 6 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登入
              </Button>
              <Link to={REGISTER_PATHNAME}>注册新用户</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
