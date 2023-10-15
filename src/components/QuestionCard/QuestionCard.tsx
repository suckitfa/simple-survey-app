import { FC } from "react";
import styles from "./Question.module.scss";
import { Button, Divider, Space } from "antd";
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

type PropsType = {
  _id: string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createdAt: string;
};

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const { _id, title, createdAt, answerCount, isStar, isPublished } = props;

  const nav = useNavigate();
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
      <Divider />
      {/* 下部分 */}
      <div className={styles["button-container"]}>
        <div className={styles.left}>
          <Space>
            <Button
              icon={<EditOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`/question/edit/${_id}`)}
              disabled={isPublished}
            >
              编辑问卷
            </Button>
            <Button
              onClick={() => nav(`/question/stat/${_id}`)}
              icon={<LineChartOutlined />}
              type="text"
              size="small"
              disabled={!isPublished}
            >
              数据统计
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Button
              onClick={() => nav(`/question/star/${_id}`)}
              icon={<StarOutlined />}
              type="text"
              size="small"
            >
              {isStar ? "取消星标" : "标星"}
            </Button>
            <Button icon={<CopyOutlined />} type="text" size="small">
              复制
            </Button>
            <Button type="text" size="small" icon={<DeleteOutlined />}>
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
