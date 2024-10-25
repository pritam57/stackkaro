import Slug from "@/components/Slug";

interface SlugParams {
  slug: string;
}

const slug = ({ params }: { params: SlugParams }) => {
  const titlePromise = Promise.resolve({ slug: params.slug }); 
  return <Slug title={titlePromise} />;
};

export default slug;
