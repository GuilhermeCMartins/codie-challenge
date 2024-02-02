import Header from "../components/header";
import Footer from "../components/footer";
import { PokemonProvider } from "../provider/form-provider";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <PokemonProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </PokemonProvider>
  );
}
