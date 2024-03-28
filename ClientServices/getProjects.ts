import { GetProjectsRequest, GetProjectsResponse } from "@/models";
import { httpClient } from "@/utils/httpClient";

export const getProjects = async (
  request: GetProjectsRequest,
): Promise<GetProjectsResponse> => {
  return await httpClient.get("/projects", {
    category_id: request.category_id,
  });
};
