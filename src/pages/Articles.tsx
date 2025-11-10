import React from 'react';
import CCVNavbar from '@/components/CCV/CCVNavbar';
import CCVFooter from '@/components/CCV/CCVFooter';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const Articles = () => {
  return (
    <div className="min-h-screen bg-white">
      <CCVNavbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => window.location.href = '/'}
            className="mb-8 text-slate-600 hover:text-black"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-light mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Latest from Future Cash-Flow
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Strategic insights, tactical frameworks, and real-world case studies from the Austin tech ecosystem. Join 500+ founders reading PMF insights 2x/month.
            </p>
          </div>

          {/* Substack Embed */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-slate-200">
            <div className="prose prose-lg max-w-none">
              <iframe 
                src="https://jakecrowley05.substack.com/embed" 
                width="100%" 
                height="320" 
                style={{ border: '1px solid #EEE', background: 'white', borderRadius: '8px' }}
                frameBorder="0" 
                scrolling="no"
                title="Substack Newsletter Embed"
              />
            </div>
          </div>

          {/* CTA to View All Articles */}
          <div className="text-center">
            <Button
              onClick={() => window.open('https://jakecrowley05.substack.com/', '_blank')}
              className="bg-black text-white hover:bg-slate-800 px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-[1.02] shadow-lg"
            >
              Read All Articles on Substack
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Featured Topics */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-slate-200 rounded-xl p-8 hover:border-slate-300 transition-colors">
              <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
                Product Strategy & PMF
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Deep dives into finding product-market fit, validating ideas, and building products that customers love.
              </p>
            </div>
            
            <div className="border border-slate-200 rounded-xl p-8 hover:border-slate-300 transition-colors">
              <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
                Fundraising & Capital
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Practical advice on raising capital, investor relations, and navigating the funding landscape.
              </p>
            </div>
            
            <div className="border border-slate-200 rounded-xl p-8 hover:border-slate-300 transition-colors">
              <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
                Growth & Scaling
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Strategies for scaling your startup, building teams, and navigating hyper-growth challenges.
              </p>
            </div>
            
            <div className="border border-slate-200 rounded-xl p-8 hover:border-slate-300 transition-colors">
              <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
                Austin Tech Ecosystem
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Local intelligence on Austin's startup scene, ecosystem updates, and community insights.
              </p>
            </div>
          </div>
        </div>
      </main>
      <CCVFooter />
    </div>
  );
};

export default Articles;
