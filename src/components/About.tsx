
import { Button } from './ui/button';

const About = () => {
  return (
    <section id="background" className="py-20 bg-warm-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-rich-black mb-8">
            About Me
          </h2>
          
          <div className="space-y-6 text-rich-gray">
            <p className="text-lg leading-relaxed">
              With over a decade of experience in strategic advisory and innovation consulting, I've guided organizations through complex decisions in rapidly evolving markets. My approach combines deep analytical expertise with practical implementation strategies.
            </p>
            
            <p className="text-lg leading-relaxed">
              My background spans financial markets, real estate investments, and emerging technologies, allowing me to provide comprehensive insights that bridge traditional business models with innovative solutions. I specialize in helping organizations navigate digital transformation, particularly in the realms of AI and quantum computing.
            </p>
            
            <p className="text-lg leading-relaxed">
              As a trusted advisor, I work closely with executive teams to develop and implement strategies that drive sustainable growth and competitive advantage. My expertise in data analytics and supply chain optimization has helped numerous organizations improve their operational efficiency and market positioning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
