import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@/ClientServices/getProjects";
import { useCallback } from "react";
import { GetProjectsResponse } from "@/models";
import { useAtom } from "jotai";
import { currentActiveCategory } from "../Filters";
import { defaultCategory } from "@/components/FilterTab/Filters/useCategories";

export const useProjects = () => {
  const [currentCategoryActive] = useAtom(currentActiveCategory);

  const handleFormat = useCallback((response?: GetProjectsResponse) => {
    if (!response) return [];
    return response.data;
  }, []);

  const isDefaultCategoryActive =
    currentCategoryActive.id === defaultCategory.id;

  const { data, isError, isPending } = useQuery({
    queryKey: !isDefaultCategoryActive
      ? ["projects", `category-${currentCategoryActive.id}`]
      : ["projects"],
    queryFn: () =>
      getProjects({
        category_id: !isDefaultCategoryActive
          ? currentCategoryActive.id
          : undefined,
      }),
  });

  return { projects: handleFormat(data), isPending, isError };
};
