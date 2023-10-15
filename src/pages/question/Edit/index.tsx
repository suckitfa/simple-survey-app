import { useParams } from "react-router-dom";

const Edit = () => {
  const { id = "" } = useParams();
  return <p>edit = {id}</p>;
};

export default Edit;
