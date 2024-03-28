"use client";
import React, { useMemo } from "react";
import { defaultCategory, useCategories } from "./useCategories";
import { FilterPresenter } from "./Filters.presenter";
import { atom } from "jotai";

export const currentActiveCategory = atom(defaultCategory);

export const Filters = () => {
  const { categories, isError, isPending } = useCategories();

  return (
    <FilterPresenter
      isError={isError}
      isPending={isPending}
      categories={categories}
    />
  );
};
