"use client";
import React, { FC } from "react";
import { FilterContentPresenter } from "./FilterContent.presenter";
import { useProjects } from "./useProjects";

export const FilterContent: FC = () => {
  const { isError, isPending, projects } = useProjects();

  return (
    <FilterContentPresenter
      isPending={isPending}
      projects={projects}
      isError={isError}
    />
  );
};
