import Footer from "@/src/components/shared/Footer";
import { Navbar } from "@/src/components/shared/navbar";

const commonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl pt-8 px-6 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default commonLayout;
