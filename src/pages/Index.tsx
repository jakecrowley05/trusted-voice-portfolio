
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Expertise />
      </main>
    </div>
  );
};

export default Index;
