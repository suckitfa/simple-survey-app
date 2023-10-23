import useLoadQuestionData from "../../../hooks/useLoadQuestionData";

const Stat = () => {
  const { loading, questionData } = useLoadQuestionData();
  return (
    <>
      <h1>Stat Page</h1>
      {loading ? <p>Loading</p> : <p>{JSON.stringify(questionData)}</p>}
    </>
  );
};

export default Stat;
