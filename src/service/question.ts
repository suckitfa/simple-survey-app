import axios, { ResDataType, ResType } from "./axios";

type SerachOption = {
  keyword: string;
};

export async function getQuestionService(id: string): Promise<ResDataType> {
  const url = `/api/question/${id}`;
  const data = (await axios.get(url)) as ResDataType;
  return data;
}

export async function createQuestionService(): Promise<ResDataType> {
  const url = "/api/question";
  const data = (await axios.post(url)) as ResDataType;
  return data;
}

// 获取（查询）问卷列表
export async function getQuestionListService(
  queryParams: Partial<SerachOption> = {}
): Promise<ResDataType> {
  const url = "/api/question";
  const data = (await axios.get(url),
  {
    params: queryParams,
  }) as ResDataType;
  return data;
}
