import QuestionCard from "../../components/QuestionCard/QuestionCard";
import styles from "./common.module.scss";
import { useSearchParams } from "react-router-dom";
import { Typography, Spin } from "antd";
import { useTitle } from "ahooks";
import ListSearch from "../../components/ListSearch";
import useLoadQuestionListData from "../../hooks/useLoadQuestionListData";

const { Title } = Typography;
const List = () => {
  const { data = {}, loading } = useLoadQuestionListData({
    isStar: true,
  });
  const { list = [], total = 0 } = data;

  // 获取参数 react-router
  useTitle("小慕问卷-我的问卷");
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>

      <div className={styles.content}>
        {/* 问卷列表 */}
        {loading && (
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Spin />
          </div>
        )}
        {list.length > 0 &&
          list.map((qes: any) => {
            const { _id } = qes;
            return <QuestionCard key={_id} {...qes} />;
          })}
      </div>

      <div className={styles.footer}>loadMore...上划加载更多</div>
    </>
  );
};

export default List;
