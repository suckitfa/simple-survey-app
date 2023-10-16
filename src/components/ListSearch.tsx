import { Input } from "antd";
import { ChangeEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LIST_SEARCH_PAEAM_KEY } from "../constant/index";
const { Search } = Input;
const ListSearch = () => {
  const [val, setVal] = useState("");
  const nav = useNavigate();
  const { pathname } = useLocation();

  const handleSearch = (val: string) => {
    // 跳转页面，增加URL参数
    nav({
      pathname,
      search: `${LIST_SEARCH_PAEAM_KEY}=${val}`,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  return (
    <>
      <Search
        placeholder="输入关键字"
        onSearch={handleSearch}
        style={{ width: "200px" }}
        value={val}
        onChange={handleChange}
        size="large"
        allowClear
      />
    </>
  );
};

export default ListSearch;
