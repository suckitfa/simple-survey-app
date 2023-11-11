import { LIST_PAGENUM_PARAM_KEY } from "./../constant/index";
import { useRequest } from "ahooks";
import { getQuestionListService } from "../service/question";
import { useSearchParams } from "react-router-dom";
import {
  LIST_SEARCH_PAEAM_KEY,
  LIST_PAGESIZE_PARAM_KEY,
  DEFAULT_LIST_PAGE_SIZE,
} from "../constant";

type OptionType = {
  isStar: boolean;
  isDeleted: boolean;
  LIST_PAGENUM_PARAM_KEY: number;
  LIST_PAGESIZE_PARAM_KEY: number;
};

function useLoadQuestionListData(opt: Partial<OptionType> = {}) {
  const { isStar = false, isDeleted = false } = opt;

  const [searchParams] = useSearchParams();

  const loadData = async () => {
    const keyword = searchParams.get(LIST_SEARCH_PAEAM_KEY) || "";
    const pageSize =
      parseInt(searchParams.get(LIST_PAGESIZE_PARAM_KEY) || "") ||
      DEFAULT_LIST_PAGE_SIZE;
    const pageNum =
      parseInt(searchParams.get(LIST_PAGENUM_PARAM_KEY) || "") || 1;

    const resData = await getQuestionListService({
      keyword,
      isStar,
      isDeleted,
      pageSize,
      pageNum,
    });
    return resData;
  };

  const { data, loading, error } = useRequest(loadData, {
    refreshDeps: [searchParams],
  });

  return { data, loading, error };
}

export default useLoadQuestionListData;
