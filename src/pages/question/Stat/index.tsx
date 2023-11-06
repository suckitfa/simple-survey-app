import useLoadQuestionData from "../../../hooks/useLoadQuestionData";

const Stat = () => {
  const { loading, data } = useLoadQuestionData();
  return (
    <>
      <h1>Stat Page</h1>
      {loading ? <p>Loading</p> : <p>{JSON.stringify(data)}</p>}
    </>
  );
};

export default Stat;
