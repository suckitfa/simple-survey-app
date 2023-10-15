import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import styles from "./MainLayout.module.scss";
const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <>
      <Layout>
        <Header className={styles.header}>
          <div className={styles.left}>Logo</div>
          <div className={styles.right}>登入</div>
        </Header>
        <Content className={styles.main}>
          <Outlet />
        </Content>
        <Footer className={styles.footer}>
          小慕问卷&copy;2023 - presetned
        </Footer>
      </Layout>
    </>
  );
};

export default MainLayout;
