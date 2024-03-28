import { CategoriesResponse, CategoryType } from "@/models";
import { httpClient } from "@/utils/httpClient";

export const getProjectCategories = async (): Promise<CategoriesResponse> => {
  return await httpClient.get("/project-categories");
};
