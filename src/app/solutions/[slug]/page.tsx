import { detailRoute } from "@/lib/detailRoute";

const route = detailRoute("solutions");
export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
