
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Calendar } from 'lucide-react';
import ConsultationCalendarDialog from './ConsultationCalendarDialog';
import { useToast } from '@/hooks/use-toast';

const FinalCTA = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const { toast } = useToast();

  const handleEmailClick = () => {
    window.location.href = "mailto:jakecrowley05@gmail.com?subject=Product%20Strategy%20Inquiry";
    toast({
      title: "Email client opened",
      description: "Sending an email to Jake"
    });
  };

  return (
    <section id="final-cta" className="py-20">
      <div className="bg-slate-900 rounded-lg overflow-hidden">
        <div className="px-6 py-16 md:p-16 text-center md:text-left md:flex justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simplify Complex Technology.<br/>
              <span className="text-emerald-400">Build Deeper Connections.</span>
            </h2>
            <p className="text-slate-300 max-w-xl">
              Stop struggling with technology barriers. Our approach demystifies complex systems, creating custom automations that foster authentic user connections within Apple's ecosystem and beyond.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-4">
            <Button 
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-medium px-8 py-6 rounded-md w-full md:w-auto"
              onClick={() => setCalendarOpen(true)}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule My Product Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-transparent border-white/20 text-black bg-white/80 hover:bg-white hover:text-slate-900 w-full md:w-auto"
              onClick={handleEmailClick}
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Me Directly
            </Button>
            
            <span className="text-slate-400 text-sm">
              jakecrowley05@gmail.com
            </span>
          </div>
        </div>
      </div>
      
      <ConsultationCalendarDialog 
        open={calendarOpen}
        onOpenChange={setCalendarOpen}
        calendarUrl="https://calendly.com/jakecrowley05/30min"
      />
    </section>
  );
};

export default FinalCTA;
