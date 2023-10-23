import useLoadQuestionData from "../../../hooks/useLoadQuestionData";
const Edit = () => {
  const { loading, questionData } = useLoadQuestionData();
  return (
    <>
      <h2>Edit Quesiton</h2>
      {loading ? <p>loading</p> : <p>{JSON.stringify(questionData)}</p>}
    </>
  );
};

export default Edit;
