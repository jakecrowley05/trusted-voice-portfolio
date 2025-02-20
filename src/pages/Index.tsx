
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import About from '@/components/About';
import Insights from '@/components/Insights';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Expertise />
        <About />
        <Insights />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
