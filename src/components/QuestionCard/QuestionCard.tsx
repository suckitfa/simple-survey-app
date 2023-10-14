import { FC } from "react";
import styles from "./Question.module.scss";
type PropsType = {
  _id: string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createdAt: string;
};

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const { _id, title, createdAt, answerCount, isPublished } = props;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <a href="#">{title}</a>
        </div>
        <div className={styles.right}>
          {isPublished ? (
            <span style={{ color: "green" }}>已发布</span>
          ) : (
            <span style={{ color: "red" }}>未发布</span>
          )}
          &nbsp;
          <span>答卷:{answerCount}</span>&nbsp;
          <span>{createdAt}</span>
        </div>
      </div>
      <div className="bottom">button</div>
    </div>
  );
};

export default QuestionCard;
