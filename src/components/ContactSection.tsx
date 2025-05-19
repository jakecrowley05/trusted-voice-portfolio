
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Calendar } from 'lucide-react';
import ConsultationCalendarDialog from './ConsultationCalendarDialog';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
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
    <section id="contact" className="py-24">
      <div className="bg-slate-900 rounded-2xl overflow-hidden">
        <div className="px-8 py-16 md:p-16 text-center md:text-left md:flex justify-between items-center gap-8">
          <div className="mb-8 md:mb-0 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to transform your product strategy?
            </h2>
            <p className="text-slate-300 mb-6">
              Schedule a free consultation to discuss your specific needs and how I can help your startup achieve product-market fit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-medium px-8 py-6"
                onClick={() => setCalendarOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                className="bg-transparent border-white/20 text-black hover:bg-white/10 hover:text-white text-lg font-medium px-8 py-6"
                onClick={handleEmailClick}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me Directly
              </Button>
            </div>
          </div>
          
          <div className="bg-slate-800 p-8 rounded-xl max-w-md w-full">
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-4 text-slate-300">
              <div>
                <p className="font-medium text-white">Email</p>
                <a href="mailto:jakecrowley05@gmail.com" className="hover:text-emerald-400 transition-colors">
                  jakecrowley05@gmail.com
                </a>
              </div>
              
              <div>
                <p className="font-medium text-white">Location</p>
                <p>Austin, TX</p>
              </div>
              
              <div>
                <p className="font-medium text-white">Availability</p>
                <p>Monday - Friday, 9am - 5pm CST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ConsultationCalendarDialog 
        open={calendarOpen}
        onOpenChange={setCalendarOpen}
      />
    </section>
  );
};

export default ContactSection;
