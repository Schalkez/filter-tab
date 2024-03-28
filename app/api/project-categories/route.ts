import { getCategories } from "@/ApiServices/getCategories";

export async function GET() {
  const categories = await getCategories();

  return Response.json({
    message: "Get categories successfully",
    data: categories,
  });
}
