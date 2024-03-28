import { getProjectCategories } from "@/ClientServices/getProjectCategories";
import { CategoriesResponse, CategoryType } from "@/models";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

export const defaultCategory: CategoryType = {
  id: 0,
  name: "All",
  seoName: "All",
};

export const useCategories = () => {
  const handleFormatResponse = useCallback((response?: CategoriesResponse) => {
    if (!response) return [defaultCategory];
    return [defaultCategory, ...response.data];
  }, []);

  const { data, isPending, isError } = useQuery({
    queryKey: ["project-categories"],
    queryFn: async () => await getProjectCategories(),
  });

  return { categories: handleFormatResponse(data), isPending, isError };
};
