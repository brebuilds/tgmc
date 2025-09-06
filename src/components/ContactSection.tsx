import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const {
        error
      } = await supabase.from('contact_messages').insert([{
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        subject: formData.subject || null,
        message: formData.message
      }]);
      if (error) throw error;
      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you soon."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Ready to be part of the future of healthcare? Get in touch with our team to learn more about partnership opportunities and how you can contribute to this transformative project. Send a message below, or reach</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-gradient hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input id="name" name="name" type="text" placeholder="Your full name" value={formData.name} onChange={handleChange} required className="border-input focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required className="border-input focus:ring-2 focus:ring-primary/20" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  
                  <div className="space-y-2">
                    
                    <Input id="subject" name="subject" type="text" placeholder="How can we help?" value={formData.subject} onChange={handleChange} className="border-input focus:ring-2 focus:ring-primary/20" />
                  </div>
                </div>

                

                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-[1.02] hover-glow">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-gradient hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
                    <p className="text-muted-foreground">info@texasgeneralmc.com</p>
                    <p className="text-muted-foreground">partnerships@texasgeneralmc.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Phone</h3>
                    <p className="text-muted-foreground">Main: (555) 123-4567</p>
                    <p className="text-muted-foreground">Partnerships: (555) 123-4568</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      Texas General Medical Center<br />
                      1234 Healthcare Blvd<br />
                      Houston, TX 77001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;