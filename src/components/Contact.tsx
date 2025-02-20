
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Mail, Send } from 'lucide-react';
import { useToast } from './ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:jakecrowley05@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    
    toast({
      title: "Email client opened",
      description: "Your default email client has been opened with the message.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-warm-light">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-rich-black mb-4">
              Get in Touch
            </h2>
            <p className="text-rich-gray">
              Have a question or want to discuss a potential collaboration? 
              Reach out and I'll get back to you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              <Mail className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>

          <div className="mt-8 text-center text-rich-gray">
            <p>Or email me directly at:</p>
            <a 
              href="mailto:jakecrowley05@gmail.com"
              className="text-primary hover:underline"
            >
              jakecrowley05@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
