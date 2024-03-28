import { CategoryType } from "@/models";
import React, { FC } from "react";
import { Filter } from "./Filter";

type Props = {
  isPending: boolean;
  isError: boolean;
  categories: CategoryType[];
};

export const FilterPresenter: FC<Props> = ({
  isError,
  isPending,
  categories,
}) => {
  if (isError) {
    return <>Error</>;
  }

  if (isPending) {
    return <>Loading</>;
  }

  return (
    <div className="flex gap-2 barlow-semibold">
      {categories.map((category) => (
        <Filter key={category.id} category={category} />
      ))}
    </div>
  );
};
