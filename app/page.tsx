import { getProjectCategories } from "@/ClientServices/getProjectCategories";
import { getProjects } from "@/ClientServices/getProjects";
import { FilterTab } from "@/components/FilterTab";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

const getHomeData = async (queryClient: QueryClient) => {
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["project-categories"],
      queryFn: getProjectCategories,
    }),
    queryClient.prefetchQuery({
      queryKey: ["projects"],
      queryFn: () => getProjects({}),
    }),
  ]);
};

const Home = async () => {
  const queryClient = new QueryClient();
  await getHomeData(queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FilterTab />
    </HydrationBoundary>
  );
};

export default Home;
