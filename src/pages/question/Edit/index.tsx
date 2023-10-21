import { useParams } from "react-router-dom";
import { getQuestionService } from "../../../service/question";
import { useEffect, useState } from "react";
const Edit = () => {
  const { id = "" } = useParams();
  const [loading, setLoading] = useState(false);
  const [questionData, setQuestionData] = useState({});
  useEffect(() => {
    async function fn() {
      setLoading(true);
      const data = await getQuestionService(id);
      console.log("edit page data = ", data);
      setQuestionData(data);
      setLoading(false);
    }
    fn();
  });
  return <p>edit = {id}</p>;
};

export default Edit;
