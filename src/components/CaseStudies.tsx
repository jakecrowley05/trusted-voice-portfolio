
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const CaseStudyCard = ({ title, stat, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <div className="text-3xl font-bold text-lime-600 mb-3">{stat}</div>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          What Happens After We Work Together?
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Real results that translate into metrics that matter for your business.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <CaseStudyCard
          title="FinTech SaaS Startup"
          stat="32% Churn Reduction"
          description="Identified key friction points causing customer drop-off and implemented retention strategy in just 14 days."
        />
        <CaseStudyCard
          title="B2B Platform"
          stat="2× Higher Activation"
          description="Redesigned onboarding flow focusing on core value proposition, doubling new user activation rates."
        />
        <CaseStudyCard
          title="Pre-seed Startup"
          stat="$200K Funding Secured"
          description="Transformed a mediocre demo into a compelling story and product experience that convinced investors."
        />
      </div>
      
      <div className="aspect-video max-w-3xl mx-auto bg-slate-200 rounded-xl flex items-center justify-center">
        <div className="text-center p-8">
          <h3 className="text-xl font-medium mb-3">See how we find product-market fit</h3>
          <p className="text-slate-600 mb-4">90-second walkthrough of my process</p>
          <Button variant="outline" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
            Watch Video
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
