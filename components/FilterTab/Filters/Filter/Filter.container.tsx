import React, { FC, useCallback } from "react";
import { FilterPresenter } from "./Filter.presenter";
import { CategoryType } from "@/models";
import { useAtom } from "jotai";
import { currentActiveCategory } from "@/components/FilterTab/Filters";

type Props = { category: CategoryType };

export const Filter: FC<Props> = ({ category }) => {
  const [currentActive, setCurrentActive] = useAtom(currentActiveCategory);
  const isActive = currentActive.id === category.id;

  const handleSelect = useCallback(() => {
    setCurrentActive(category);
  }, [category, setCurrentActive]);

  return (
    <FilterPresenter
      category={category}
      isActive={isActive}
      handleSelect={handleSelect}
    />
  );
};
