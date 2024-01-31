import { Navigation } from "@/components/navigation.component";
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="">
      <Navigation />
      <div className="">
        {children}
      </div>
    </div>
  );
}