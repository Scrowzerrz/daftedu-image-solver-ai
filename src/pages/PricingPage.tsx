
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Preços Simples</span> para Todos
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Escolha o plano que funciona para suas necessidades. Comece gratuitamente ou faça upgrade para mais recursos.
            </p>
          </div>
        </div>
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
