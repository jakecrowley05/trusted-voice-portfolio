
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CCVNewsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { name, email, role });
  };

  return (
    <section id="newsletter" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Stay Connected</h2>
        <p className="text-xl text-stone-600 mb-4">
          Join "Austin Startup Intel" and "Econ Intel Digest"
        </p>
        <p className="text-lg text-stone-500 mb-12">
          Weekly insights on the Austin tech ecosystem and economic trends
        </p>
        
        <div className="bg-stone-50 rounded-2xl p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:border-black transition-colors"
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:border-black transition-colors"
              />
            </div>
            
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:border-black transition-colors"
            >
              <option value="">Select your role</option>
              <option value="founder">Founder</option>
              <option value="investor">Investor</option>
              <option value="operator">Operator</option>
              <option value="other">Other</option>
            </select>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                type="submit"
                className="bg-black text-white hover:bg-stone-800 px-8 py-3"
              >
                Join the Brief
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                type="button"
                variant="outline"
                className="border-stone-300 text-stone-700 hover:bg-stone-50 px-8 py-3"
              >
                Request a Session
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CCVNewsletter;
