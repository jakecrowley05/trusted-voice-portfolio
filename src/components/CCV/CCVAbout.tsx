
import React from 'react';
import { Linkedin, Twitter, BookOpen, MessageSquare } from 'lucide-react';

const CCVAbout = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-12 shadow-sm border border-stone-200">
          <h2 className="text-4xl font-bold text-black mb-8 text-center">About Jake</h2>
          
          <blockquote className="text-2xl font-medium text-center text-stone-700 mb-8 leading-relaxed">
            "I help founders build the right thing faster — with clarity, GTM alignment, and smart capital strategy."
          </blockquote>
          
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Experience</h3>
              <p className="text-stone-600">Former product lead & advisor across AI, SaaS, and fintech</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Expertise</h3>
              <p className="text-stone-600">Operator with technical background + investor readiness skills</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-stone-600">Based in Austin, working nationally</p>
            </div>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="#" className="flex items-center gap-2 text-stone-600 hover:text-black transition-colors">
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-stone-600 hover:text-black transition-colors">
              <Twitter className="h-5 w-5" />
              <span>X</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-stone-600 hover:text-black transition-colors">
              <BookOpen className="h-5 w-5" />
              <span>Substack</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-stone-600 hover:text-black transition-colors">
              <MessageSquare className="h-5 w-5" />
              <span>Bluesky</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCVAbout;
