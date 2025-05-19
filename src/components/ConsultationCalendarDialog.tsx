
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { Calendar } from 'lucide-react';

interface ConsultationCalendarDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConsultationCalendarDialog = ({ open, onOpenChange }: ConsultationCalendarDialogProps) => {
  const { toast } = useToast();
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>Schedule a Free Consultation</DialogTitle>
          <DialogDescription>
            Select a date and time that works for you.
          </DialogDescription>
        </DialogHeader>
        
        <div className="h-[600px] w-full">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=jakecrowley05%40gmail.com&ctz=America%2FChicago"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="Google Calendar"
            className="w-full h-full"
          />
        </div>
        
        <div className="p-6 bg-slate-50">
          <p className="text-sm text-slate-500 mb-4">
            Not seeing what you need? Email me directly to find a time that works for you.
          </p>
          <Button 
            onClick={() => {
              window.location.href = "mailto:jakecrowley05@gmail.com?subject=Consultation%20Request";
              toast({
                title: "Email client opened",
                description: "Sending an email to schedule your consultation."
              });
              onOpenChange(false);
            }}
            variant="outline"
            className="w-full"
          >
            <Calendar className="mr-2 h-4 w-4" /> Email Me Directly
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationCalendarDialog;
