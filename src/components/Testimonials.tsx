
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    quote: "MarketMind AI has completely transformed our approach to marketing. It's like having an entire marketing team that works 24/7 without adding to our headcount.",
    name: "Sarah Johnson",
    title: "CEO, Heritage Manufacturing",
    company: "Heritage Manufacturing",
    image: "/placeholder.svg"
  },
  {
    quote: "As a 50-year-old insurance company, we were hesitant about AI solutions. The team at MarketMind made the transition seamless, and our customer acquisition costs have dropped by 40%.",
    name: "Robert Chen",
    title: "Marketing Director",
    company: "Reliable Insurance Group",
    image: "/placeholder.svg"
  },
  {
    quote: "The automated follow-up sequences alone have increased our conversion rates by 28%. It's like the system knows exactly when and how to reach out to prospects.",
    name: "Patricia Rodriguez",
    title: "Sales Director",
    company: "Cornerstone Financial",
    image: "/placeholder.svg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Legacy Businesses
          </h2>
          <p className="text-xl text-gray-600">
            See how established companies are transforming their marketing with MarketMind AI.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="absolute top-8 left-8">
            <Quote className="h-16 w-16 text-primary/10" />
          </div>
          
          <div className="px-8 pt-20 pb-12 md:p-16 md:pt-24">
            <p className="text-xl md:text-2xl text-gray-700 mb-8 relative z-10">
              "{testimonials[activeIndex].quote}"
            </p>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonials[activeIndex].name}</h4>
                <p className="text-gray-600">{testimonials[activeIndex].title}, {testimonials[activeIndex].company}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center px-8 pb-8 md:px-16 md:pb-16">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
