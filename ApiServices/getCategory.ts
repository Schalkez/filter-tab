import { categories } from "@/database";
import { CategoryType } from "@/models";

export const getCategory = (
  id: string | number,
): Promise<CategoryType | undefined> => {
  return new Promise((resolve) => {
    const category = categories.find(
      (category) => category.id === id || category.name === id,
    );
    resolve(category);
  });
};
