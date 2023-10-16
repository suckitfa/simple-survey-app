import { useTitle } from "ahooks";
import { useState } from "react";
import {
  Empty,
  Table,
  Tag,
  Typography,
  Button,
  Space,
  Modal,
  message,
} from "antd";
import { data } from "./data";
import styles from "./common.module.scss";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { Title } = Typography;

const { confirm } = Modal;
// 表格 + 分页
const Trash = () => {
  useTitle("小慕问卷-回收站");
  const [questionList, setQuestionList] = useState(data);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "问卷名",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "是否发布",
      dataIndex: "isPublished",
      render: (isPublished: boolean) => (
        <Tag color={isPublished ? "processing" : ""}>
          {isPublished ? "是" : "否"}
        </Tag>
      ),
    },
    {
      title: "是否标星",
      dataIndex: "isStar",
      render: (isStar: boolean) => (
        <Tag color={isStar ? "processing" : ""}>{isStar ? "是" : "否"}</Tag>
      ),
    },
    {
      title: "答卷数",
      dataIndex: "answerCount",
      key: "answerCount",
    },
    {
      title: "创建时间",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];

  const del = () => {
    confirm({
      title: "确认彻底删除改问卷？",
      icon: <ExclamationCircleOutlined />,
      content: "删除以后将无法找回",
      onOk: () => {
        message.success(`成功删除问卷： ${JSON.stringify(selectedIds)}`);
      },
      okText: "确定",
      cancelText: "取消",
    });
  };
  //   将JSX片段定义为变量
  const TableElem = (
    <>
      <div style={{ marginBottom: "16px" }}>
        <Space>
          <Button type="primary" disabled={selectedIds.length === 0}>
            恢复
          </Button>
          <Button onClick={del} disabled={selectedIds.length === 0} danger>
            彻底删除
          </Button>
        </Space>
      </div>
      <Table
        rowKey={(q) => q._id}
        pagination={false}
        dataSource={questionList}
        columns={columns}
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys) => {
            // 断言为 string []类型
            setSelectedIds(selectedRowKeys as string[]);
            console.log("selectedRowKeys = ", selectedRowKeys);
          },
        }}
      />
    </>
  );
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>
          （搜索）{JSON.stringify(selectedIds)}{" "}
        </div>
      </div>
      <div className={styles.content}>
        {!questionList.length ? <Empty description="暂无数据" /> : TableElem}
      </div>
    </>
  );
};

export default Trash;
