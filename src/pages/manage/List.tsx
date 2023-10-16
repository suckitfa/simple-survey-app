import { useState } from "react";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import styles from "./common.module.scss";
import { useSearchParams } from "react-router-dom";
import { Typography } from "antd";
import { useTitle } from "ahooks";

const { Title } = Typography;
const List = () => {
  const [questionList, setQuestionList] = useState([
    {
      _id: "q1",
      title: "buy coffee",
      isPublished: false,
      isStar: true,
      answerCount: 4,
      createdAt: "2023-11-23",
    },
    {
      _id: "q2",
      title: "buy coffee2",
      isPublished: true,
      isStar: true,
      answerCount: 4,
      createdAt: "2023-11-23",
    },
    {
      _id: "q3",
      title: "buy coffee",
      isPublished: false,
      isStar: true,
      answerCount: 4,
      createdAt: "2023-11-23",
    },
    {
      _id: "q4",
      title: "buy coffee2",
      isPublished: true,
      isStar: true,
      answerCount: 4,
      createdAt: "2023-11-23",
    },
  ]);

  // 获取参数 react-router
  const [searchParams] = useSearchParams();
  console.log("keyword = ", searchParams.get("keyword"));
  useTitle("小慕问卷-我的问卷");
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>(搜索)</div>
      </div>

      <div className={styles.content}>
        {/* 问卷列表 */}
        {questionList.length > 0 &&
          questionList.map((qes) => {
            const { _id } = qes;
            return <QuestionCard key={_id} {...qes} />;
          })}
      </div>

      <div className={styles.footer}>loadMore...上划加载更多</div>
    </>
  );
};

export default List;
