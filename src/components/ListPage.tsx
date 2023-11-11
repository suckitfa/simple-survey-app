import { Pagination } from "antd";
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  DEFAULT_LIST_PAGE_SIZE,
  LIST_PAGENUM_PARAM_KEY,
  LIST_PAGESIZE_PARAM_KEY,
} from "../constant";
type PropsType = {
  total: number;
};

const ListPage: FC<PropsType> = (props: PropsType) => {
  const { total } = props;
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_LIST_PAGE_SIZE);
  const [searchParams] = useSearchParams();

  const nav = useNavigate();
  const { pathname } = useLocation();
  const handleChange = (page: number, pageSize: number) => {
    // 同步到URL参数中
    searchParams.set(LIST_PAGESIZE_PARAM_KEY, pageSize.toString());
    searchParams.set(LIST_PAGENUM_PARAM_KEY, page.toString());
    nav({
      pathname,
      search: searchParams.toString(), // a=1&b=2
    });
  };

  // 从URL参数中找到pageSize，pageNum同步到组件中
  useEffect(() => {
    const pageNum =
      parseInt(searchParams.get(LIST_PAGENUM_PARAM_KEY) || "") || 1;
    const pageSize =
      parseInt(searchParams.get(LIST_PAGESIZE_PARAM_KEY) || "") ||
      DEFAULT_LIST_PAGE_SIZE;
    setCurrent(pageNum);
    setPageSize(pageSize);
  }, [searchParams]);

  return (
    <Pagination
      current={current}
      total={total}
      pageSize={pageSize}
      onChange={handleChange}
    />
  );
};

export default ListPage;
