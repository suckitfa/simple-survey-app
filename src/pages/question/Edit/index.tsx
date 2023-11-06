import useLoadQuestionData from "../../../hooks/useLoadQuestionData";
const Edit = () => {
  const { loading, data } = useLoadQuestionData();
  return (
    <>
      <h2>Edit Quesiton</h2>
      {loading ? <p>loading</p> : <p>{JSON.stringify(data)}</p>}
    </>
  );
};

export default Edit;
