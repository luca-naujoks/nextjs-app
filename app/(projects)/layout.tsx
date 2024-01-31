import { Navigation } from "@/components/navigation.component";
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen w-screen">
      <Navigation />
      <div className="p-2 ">
        {children}
      </div>
    </div>
  );
}