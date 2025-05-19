
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "Jake's insights were pivotal in helping us pivot our product strategy, leading to a 30% increase in user engagement.",
    name: "Sarah Johnson",
    title: "Founder",
    company: "TechVenture",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    quote: "The PMF Sprint completely transformed our approach to user research. We now have a clear roadmap and our customers are much more engaged.",
    name: "Michael Chen",
    title: "CEO",
    company: "Launchr",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    quote: "Jake helped us realize we were solving the wrong problem. After working with him, we secured our Series A funding within months.",
    name: "Emily Rodriguez",
    title: "Product Lead",
    company: "StartupX",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full mb-3">
          Testimonials
        </span>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">What Clients Say</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Success stories from founders who found their product-market fit.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative p-8 md:p-12">
            <Quote className="absolute top-8 left-8 h-16 w-16 text-emerald-100" />
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-medium text-slate-800 mb-8">
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
                  <h4 className="font-semibold text-slate-900">{testimonials[activeIndex].name}</h4>
                  <p className="text-slate-600">{testimonials[activeIndex].title}, {testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-4 flex justify-between items-center">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-emerald-500' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="h-8 w-8 rounded-full"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="h-8 w-8 rounded-full"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
