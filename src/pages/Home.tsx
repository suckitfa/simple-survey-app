import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";
import { Button, Typography } from "antd";
import { MANAGE_INDEX_PATHNAME } from "../constant/index";
// import { useEffect } from "react";
// import axios from "axios";
// import "../_mock/index";

const { Paragraph, Title } = Typography;
const Home = () => {
  const nav = useNavigate();

  // 在开发环境下会会执行两次
  // useEffect(() => {
  //   axios.get("/api/test").then((resp) => console.log("resp = ", resp.data));

  //   // fetch("/test/api")
  //   //   .then((resp) => resp.json())
  //   //   .then(console.log);
  // }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}>
          <Title>问卷调查 | 在线投票</Title>
          <Paragraph>
            已累计创建问卷 100 份，发布问卷 90 份，收到答卷 980 份
          </Paragraph>
        </div>
        <Button
          className={styles.btn}
          type="primary"
          onClick={() => nav(MANAGE_INDEX_PATHNAME)}
        >
          开始使用
        </Button>
      </div>
    </>
  );
};

export default Home;
