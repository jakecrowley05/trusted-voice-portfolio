
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

const CCVNewsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [interests, setInterests] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', { name, email, interests });
  };

  const handleSubstackRedirect = () => {
    window.open('https://substack.com', '_blank');
  };

  return (
    <section id="newsletter" className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8 mb-12">
          <div className="w-20 h-20 bg-black flex items-center justify-center mx-auto">
            <Mail className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-black tracking-tight">
            Weekly Intelligence
          </h2>
          <div className="space-y-4">
            <p className="text-2xl text-slate-600">
              Join "VC Intel Digest" and "Economic Brief"
            </p>
            <p className="text-lg text-slate-500">
              Weekly insights on the Austin tech ecosystem and economic trends
            </p>
            <p className="text-sm text-slate-400 bg-slate-100 inline-block px-4 py-2">
              Join 500+ founders reading this every week
            </p>
          </div>
        </div>
        
        <div className="bg-white p-12 shadow-lg border border-slate-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-6 py-4 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all text-lg rounded-none"
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all text-lg rounded-none"
              />
            </div>
            
            <select
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              className="w-full px-6 py-4 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all text-lg rounded-none"
            >
              <option value="">What interests you most?</option>
              <option value="vc-intel">VC Intel Digest</option>
              <option value="econ-brief">Economic Brief</option>
              <option value="both">Both Publications</option>
              <option value="founder-specific">Founder-Specific Content</option>
            </select>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                type="submit"
                className="bg-black text-white hover:bg-slate-800 px-8 py-4 text-lg rounded-none font-medium"
              >
                Subscribe Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                type="button"
                variant="outline"
                onClick={handleSubstackRedirect}
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg rounded-none font-medium"
              >
                View on Substack
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CCVNewsletter;
