
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="sticky top-24">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">About Jake Crowley</h2>
            <div className="aspect-square rounded-lg overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
                alt="Jake Crowley, Product Coach"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="md:col-span-7">
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-slate-700 leading-relaxed">
                  With a track record of leading successful product pivots and launching AI-driven platforms like NobleLoop, I specialize in helping startups identify and achieve product-market fit.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-slate-700 leading-relaxed">
                  My approach combines data-driven analysis with hands-on coaching to ensure your product resonates with your target audience.
                </p>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="font-bold text-3xl text-emerald-600 mb-2">10+</div>
                <p className="text-slate-700">Years of product experience</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="font-bold text-3xl text-emerald-600 mb-2">20+</div>
                <p className="text-slate-700">User insight sprints completed</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="font-bold text-3xl text-emerald-600 mb-2">3</div>
                <p className="text-slate-700">Successful product pivots</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="font-bold text-3xl text-emerald-600 mb-2">$5M+</div>
                <p className="text-slate-700">Funding secured for clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
