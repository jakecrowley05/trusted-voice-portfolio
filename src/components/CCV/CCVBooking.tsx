
import React from 'react';
import { Calendar, Mail } from 'lucide-react';

const CCVBooking = () => {
  return (
    <section id="booking" className="py-32 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8 mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-black rounded-2xl shadow-xl">
            <Calendar className="h-12 w-12 text-white" />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-black tracking-tight">
              Ready to Build Smarter?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Book a 30-minute strategy session to discuss your product challenges and get immediate clarity on your next steps.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 bg-slate-100 inline-block px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Usually responds within 2 hours
            </div>
          </div>
        </div>
        
        {/* Calendly Embed */}
        <div className="bg-white rounded-3xl p-4 shadow-2xl border border-slate-200 hover:shadow-3xl transition-shadow duration-500">
          <div className="bg-slate-50 rounded-2xl p-8 mb-6">
            <h3 className="text-2xl font-semibold text-center mb-4">Schedule Your Strategy Session</h3>
            <p className="text-center text-slate-600 mb-6">
              Choose a time that works best for you. All sessions include follow-up resources and actionable next steps.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-inner">
            <iframe
              src="https://calendly.com/jakecrowley05/30min?hide_event_type_details=1&hide_gdpr_banner=1"
              width="100%"
              height="700"
              frameBorder="0"
              scrolling="no"
              className="rounded-2xl"
              title="Schedule a strategy session with Jake Crowley"
              allow="microphone; camera"
            />
          </div>
          
          {/* Fallback Contact */}
          <div className="mt-8 p-6 bg-slate-50 rounded-2xl text-center">
            <div className="flex items-center justify-center gap-3 text-slate-600">
              <Mail className="h-5 w-5" />
              <span className="text-lg">Prefer email?</span>
              <a 
                href="mailto:jakecrowley05@gmail.com" 
                className="text-black font-semibold hover:underline transition-all duration-300 hover:scale-105 inline-block"
              >
                jakecrowley05@gmail.com
              </a>
            </div>
            <p className="text-sm text-slate-500 mt-2">
              If the booking calendar doesn't load, please reach out directly and we'll schedule your session manually.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCVBooking;
