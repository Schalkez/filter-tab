import { CategoryType } from "@/models";
import React, { FC, memo } from "react";

type Props = {
  isActive: boolean;
  category: CategoryType;
  handleSelect: () => void;
};

export const FilterPresenter: FC<Props> = memo(
  ({ category, isActive, handleSelect }) => {
    return (
      <div
        onClick={handleSelect}
        className={`px-5 py-3 tracking-wide rounded-md transition-all ${isActive ? "bg-amber-400" : "cursor-pointer"}`}
      >
        {category.name}
      </div>
    );
  },
);

FilterPresenter.displayName = "FilterPresenter";
