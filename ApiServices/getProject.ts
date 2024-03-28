import { projects } from "@/database";
import { ProjectType } from "@/models";

export const getProjects = (): Promise<ProjectType[]> => {
  return new Promise((resolve) => {
    resolve(projects);
  });
};
