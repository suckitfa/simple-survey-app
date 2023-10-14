import { useState } from "react";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import styles from "./List.module.scss";
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
  ]);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={styles.right}>(搜索)</div>
      </div>
      <div className={styles.content}>
        {questionList.map((qes) => {
          const { _id } = qes;
          return <QuestionCard key={_id} {...qes} />;
        })}
      </div>
      <div className={styles.footer}>footer</div>
    </>
  );
};

export default List;
