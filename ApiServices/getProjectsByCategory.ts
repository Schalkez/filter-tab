import { projects } from "@/database";
import { keyByNumberArray } from "@/utils/keyByNumberArray";

export const getProjectsByCategory = (categoryId: number) => {
  return new Promise((resolve) => {
    const categoryProjects = projects.filter((project) => {
      const categoryObject = keyByNumberArray(project.category);
      console.log(categoryObject);
      return !!categoryObject[categoryId];
    });
    resolve(categoryProjects);
  });
};
