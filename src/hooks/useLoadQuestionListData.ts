import { useRequest } from "ahooks";
import { getQuestionListService } from "../service/question";
import { useSearchParams } from "react-router-dom";
import { LIST_SEARCH_PAEAM_KEY } from "../constant";

type OptionType = {
  isStar: boolean;
  isDeleted: boolean;
};

function useLoadQuestionListData(opt: Partial<OptionType> = {}) {
  const { isStar = false, isDeleted = false } = opt;

  const [searchParams] = useSearchParams();

  const loadData = async () => {
    const keyword = searchParams.get(LIST_SEARCH_PAEAM_KEY) || "";
    const resData = await getQuestionListService({
      keyword,
      isStar,
      isDeleted,
    });
    return resData;
  };

  const { data, loading, error } = useRequest(loadData, {
    refreshDeps: [searchParams],
  });

  return { data, loading, error };
}

export default useLoadQuestionListData;
