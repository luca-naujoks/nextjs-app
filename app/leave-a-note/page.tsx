import { Navigation } from "@/components/Navigation";
import { PageHeadding } from "@/components/PageHeadding";
import { links } from "@/lib/constants";

export default function Page() {
  return (
    <div className="h-full flex flex-col px-12">
      <Navigation links={links} />
      <PageHeadding label="Leave a Note" />
      <PageHeadding label="coming-soon" size="text-xl" />
    </div>
  );
}
