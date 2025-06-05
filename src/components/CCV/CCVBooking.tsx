
import React from 'react';
import { Calendar } from 'lucide-react';

const CCVBooking = () => {
  return (
    <section id="booking" className="py-32 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-5xl mx-auto text-center">
        <div className="space-y-8 mb-12">
          <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center mx-auto">
            <Calendar className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl font-light text-black tracking-tight">
            Book Your Session
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose a time that works for you. All sessions include follow-up resources and actionable next steps.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl p-2 shadow-lg">
          <iframe
            src="https://calendly.com/jakecrowley05/30min"
            width="100%"
            height="700"
            frameBorder="0"
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CCVBooking;
