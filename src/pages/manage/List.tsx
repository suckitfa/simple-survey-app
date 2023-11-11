import QuestionCard from "../../components/QuestionCard/QuestionCard";
import styles from "./common.module.scss";
import { Typography, Spin, Empty } from "antd";
import { useTitle } from "ahooks";
import ListSearch from "../../components/ListSearch";
import useLoadQuestionListData from "../../hooks/useLoadQuestionListData";
const { Title } = Typography;
const List = () => {
  const { data = {}, loading } = useLoadQuestionListData();
  const { list = [], total = 0 } = data;

  useTitle("小慕问卷-我的问卷");
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>

      <div className={styles.content}>
        {/* 问卷列表 */}
        {loading ? (
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Spin />
          </div>
        ) : list.length > 0 ? (
          list.map((qes: any) => {
            const { _id } = qes;
            return <QuestionCard key={_id} {...qes} />;
          })
        ) : (
          <Empty />
        )}
      </div>

      <div className={styles.footer}>
        <span className={styles.footerBtn}>loadMore...上划加载更多</span>
      </div>
    </>
  );
};

export default List;
