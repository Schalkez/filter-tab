import { getCategory } from "@/ApiServices/getCategory";
import { getProjects } from "@/ApiServices/getProject";
import { getProjectsByCategory } from "@/ApiServices/getProjectsByCategory";
import { AxiosError } from "axios";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const categoryId = Number(searchParams.get("category_id"));

  try {
    if (categoryId) {
      const category = await getCategory(categoryId);

      if (!category) {
        return new Response("Category not found", { status: 404 });
      }

      const projects = await getProjectsByCategory(category.id);
      return Response.json({
        message: "Get projects successfully",
        data: projects,
      });
    }

    if (!categoryId) {
      const projects = await getProjects();
      return Response.json({
        message: "Get projects successfully",
        data: projects,
      });
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      return Response.json({
        message: error.response?.data.message,
      });
    }

    throw error;
  }
}
