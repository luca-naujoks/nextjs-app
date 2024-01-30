import { Navigation } from "@/components/navigation.component";
export default function Layout({
    children,
  }:{
    children: React.ReactNode
  }) {
    return (
        <div className="h-screen w-screen">
            <Navigation />
            {children}
        </div>
    );
  }