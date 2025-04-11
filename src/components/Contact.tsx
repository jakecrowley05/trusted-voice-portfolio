
import { useState } from 'react';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { useToast } from './ui/use-toast';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock, SendIcon } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM"
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>('');
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [timeOpen, setTimeOpen] = useState(false);
  
  const { toast } = useToast();
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would usually send the data to your backend or email service
    // For now, we'll just show a success toast
    
    toast({
      title: "Consultation Request Sent",
      description: "We'll reach out to you shortly to confirm your appointment.",
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    });
    setDate(undefined);
    setTime('');
  };
  
  return (
    <section id="contact" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-gray-600">
            Schedule a personalized demo and consultation to see how MarketMind AI 
            can work for your business.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 bg-primary">
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-white/90 mb-8">
                Our team of experts is ready to show you how MarketMind AI can transform your marketing operations and drive sustainable growth.
              </p>
              
              <div className="space-y-6 text-white/90">
                <div>
                  <h4 className="font-semibold mb-1">What to expect:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Personalized platform demonstration</li>
                    <li>Analysis of your current marketing challenges</li>
                    <li>Custom implementation strategy</li>
                    <li>Pricing and timeline discussion</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-1">Contact information:</h4>
                  <p>support@marketmindai.com</p>
                  <p>(555) 123-4567</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Preferred Date</Label>
                    <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, 'PPP') : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={(date) => {
                            setDate(date);
                            setCalendarOpen(false);
                          }}
                          initialFocus
                          disabled={(date) => {
                            // Disable dates in the past and weekends
                            const now = new Date();
                            now.setHours(0, 0, 0, 0);
                            const day = date.getDay();
                            return date < now || day === 0 || day === 6;
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <Label>Preferred Time</Label>
                    <Select value={time} onValueChange={(value) => setTime(value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time">
                          {time ? (
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4" />
                              {time}
                            </div>
                          ) : (
                            <span>Select time</span>
                          )}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message">Message (Optional)</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  <SendIcon className="mr-2 h-4 w-4" />
                  Schedule Consultation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
