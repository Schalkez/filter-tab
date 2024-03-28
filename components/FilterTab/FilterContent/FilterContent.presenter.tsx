import { ProjectType } from "@/models";
import { Card } from "@/ui/Card";
import React, { FC, memo } from "react";

type Props = {
  isError: boolean;
  isPending: boolean;
  projects: ProjectType[];
};

export const FilterContentPresenter: FC<Props> = memo(
  ({ isError, isPending, projects }) => {
    if (isError) {
      return <>Error</>;
    }

    if (isPending) {
      return <>Loading</>;
    }

    return (
      <div className="grid grid-cols-3 gap-7">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    );
  },
);

FilterContentPresenter.displayName = "FilterContentPresenter";
