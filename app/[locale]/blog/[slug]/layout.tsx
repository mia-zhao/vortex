import BreadCrumb from "../breadcrumb";
import "./blog.css";

export const runtime = "edge";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 my-8 sm:px-6 lg:px-8">
      <div className="my-8 ml">
        <BreadCrumb title={params.slug} />
      </div>
      <article className="blog max-w-3xl mx-auto p-6 rounded-lg shadow-md">
        {children}
      </article>
    </div>
  );
}
