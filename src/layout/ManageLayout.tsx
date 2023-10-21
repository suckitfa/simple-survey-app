import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./ManageLayout.module.scss";
import { Button, Space, Divider, message } from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  BarsOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { createQuestionService } from "../service/question";
import { useState } from "react";
const ManageLayout = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  console.log("pathname = ", pathname);

  const [loading, setLoading] = useState(false);
  const handleAdd = async () => {
    setLoading(true);
    const data = await createQuestionService();
    const { id } = data;
    if (id) {
      nav(`/question/edit/${id}`);
      message.success("创建成功！");
    }
    setLoading(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button
            type="primary"
            onClick={handleAdd}
            size="large"
            icon={<PlusOutlined />}
            disabled={loading}
          >
            创建问卷
          </Button>
          <Divider style={{ borderTop: "transparent" }} />
          <Button
            type={pathname.startsWith("/manage/list") ? "default" : "text"}
            size="large"
            icon={<BarsOutlined />}
            onClick={() => nav("/manage/list")}
          >
            我的问卷
          </Button>
          <Button
            type={pathname.startsWith("/manage/star") ? "default" : "text"}
            size="large"
            icon={<StarOutlined />}
            onClick={() => nav("/manage/star")}
          >
            星标问卷
          </Button>
          <Button
            type={pathname.startsWith("/manage/trash") ? "default" : "text"}
            size="large"
            icon={<DeleteOutlined />}
            onClick={() => nav("/manage/trash")}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  );
};

export default ManageLayout;
