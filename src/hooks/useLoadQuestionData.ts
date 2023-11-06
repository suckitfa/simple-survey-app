//  useLoadQuestionData.ts
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestionService } from "../service/question";
import { useRequest } from "ahooks";
function useLoadQuestionData() {
  // const { id = "" } = useParams();
  // const [loading, setLoading] = useState(false);
  // const [questionData, setQuestionData] = useState({});
  // useEffect(() => {
  //   const fn = async () => {
  //     setLoading(true);
  //     const data = await getQuestionService(id);
  //     setQuestionData(data);
  //     setLoading(false);
  //   };
  //   fn();
  // }, []);
  // return {
  //   loading,
  //   questionData,
  // };
  const { id = "" } = useParams();
  async function load() {
    const data = await getQuestionService(id);
    return data;
  }
  const { loading, data, error } = useRequest(load);
  return { loading, data, error };
}

export default useLoadQuestionData;
