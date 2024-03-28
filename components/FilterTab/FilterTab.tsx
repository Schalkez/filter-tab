import React, { FC } from "react";
import { Filters } from "./Filters";
import { FilterContent } from "./FilterContent";

export const FilterTab: FC = () => {
  return (
    <div
      className="flex flex-col items-center px-5 py-4"
      style={{ gap: 60, marginBottom: "60px" }}
    >
      <Filters />
      <FilterContent />
    </div>
  );
};

FilterTab.displayName = "FilterTab";
