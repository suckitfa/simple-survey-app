import axios from "axios";
import { message } from "antd";
const instance = axios.create({
  timeout: 10 * 1000,
});

// 统一拦截响应 response errno,msg
instance.interceptors.response.use((res) => {
  const respData = (res.data || {}) as ResType;
  const { errno, data, msg } = respData;

  if (errno !== 0) {
    // 错误提示
    if (msg) {
      message.error(msg);
    }
    throw new Error(msg)
  }
  return data as any;
});

export default instance;

export type ResType = {
  errno: number;
  data?: ResDataType;
  msg?: string;
};

export type ResDataType = {
  [key: string]: any;
};
