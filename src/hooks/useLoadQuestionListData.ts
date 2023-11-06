import { useRequest } from "ahooks";
import { getQuestionListService } from "../service/question";
import { useSearchParams } from "react-router-dom";
import { LIST_SEARCH_PAEAM_KEY } from "../constant";
function useLoadQuestionListData() {
  const [searchParams] = useSearchParams();

  const { data, loading, error } = useRequest(
    async () => {
      const keyword = searchParams.get(LIST_SEARCH_PAEAM_KEY) || "";
      const data = await getQuestionListService({ keyword });
      return data;
    },
    {
      refreshDeps: [searchParams],
    }
  );

  return { data, loading, error };
}

export default useLoadQuestionListData;
