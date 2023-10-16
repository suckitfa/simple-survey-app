import { useState } from "react";
import { data } from "./data";
import styles from "./common.module.scss";
import { Empty, Typography } from "antd";
import QuestionCard from "../../components/QuestionCard/QuestionCard";

const { Title } = Typography;

const Star = () => {
  const [questionList, setQuestionList] = useState(data);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>(搜索)</div>
      </div>
      <div className={styles.content}>
        {!questionList.length ? (
          <Empty description="暂无数据" />
        ) : (
          questionList.map((qes) => {
            const { _id } = qes;
            return <QuestionCard {...qes} key={_id} />;
          })
        )}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  );
};

export default Star;
