import { FC } from "react";
import styles from "./Question.module.scss";
import { Button, Divider, Space, Popconfirm, Modal, message } from "antd";
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  LineChartOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { confirm } = Modal;
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

  const duplicate = () => {
    message.success("复制成功！");
  };

  function del() {
    confirm({
      title: "确定删除改问卷?",
      okText: "确定",
      cancelText: "取消",
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        message.success("删除成功！");
      },
      onCancel: () => {
        message.info("取消操作！");
      },
    });
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <a href="#">{title}</a>
        </div>
        <div className={styles.right}>
          {isPublished ? (
            <Button size="small" style={{ color: "blue" }}>
              已发布
            </Button>
          ) : (
            <Button style={{ color: "red" }} size="small">
              未发布
            </Button>
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
            <Popconfirm
              title="是否复制该问卷？"
              okText="确定"
              cancelText="取消"
              onConfirm={duplicate}
            >
              <Button icon={<CopyOutlined />} type="text" size="small">
                复制
              </Button>
            </Popconfirm>
            <Button
              type="text"
              size="small"
              onClick={del}
              icon={<DeleteOutlined />}
            >
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
