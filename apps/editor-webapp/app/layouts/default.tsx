import { Footer } from '~/components/footer';
import { Header } from '~/components/header';

export type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
