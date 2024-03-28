export type CategoryType = {
  id: number;
  name: string;
  seoName: string;
};

export type ProjectType = {
  id: number;
  category: number[];
  name: string;
  image: string;
  link: string;
};

export type GetProjectsRequest = {
  category_id?: string | number;
};

export type CategoriesResponse = {
  message: string;
  data: CategoryType[];
};

export type GetProjectsResponse = {
  message: string;
  data: ProjectType[];
};
