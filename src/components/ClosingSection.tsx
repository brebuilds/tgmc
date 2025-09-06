import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
const ClosingSection = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email signup
    console.log('Email signup:', email);
    setEmail('');
  };
  return <>
      <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Closing Message */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-alata font-bold mb-8 leading-tight">
            The Future of{' '}
            <span className="text-gradient-primary">Healthcare</span>{' '}
            in South Texas{' '}
            <span className="text-gradient-secondary">Begins Here</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto font-lexend leading-relaxed mb-12">
            The hospital is expected to open its doors in 2028, with initial construction phases starting early next year. 
          </p>
        </div>
        
        {/* Email Signup */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="card-gradient p-8 rounded-2xl shadow-medical">
            <h3 className="text-2xl font-bold text-primary mb-4 text-center font-alata">
              Stay Updated on Progress
            </h3>
            <p className="text-muted-foreground text-center mb-6 font-lexend">
              Be the first to know about construction milestones, job opportunities, and opening updates.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input type="email" placeholder="Enter your email address" value={email} onChange={e => setEmail(e.target.value)} className="h-12 text-lg" required />
              </div>
              <Button type="submit" variant="medical" size="lg" className="h-12 px-8">
                Stay Updated
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-secondary" />
            </div>
            <h4 className="text-lg font-semibold text-primary mb-2 font-alata">Email Updates</h4>
            <p className="text-muted-foreground font-lexend">info@texasgeneralmedical.com</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-secondary" />
            </div>
            <h4 className="text-lg font-semibold text-primary mb-2 font-alata">Project Inquiries</h4>
            <p className="text-muted-foreground font-lexend">(123) 456-7890</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-secondary" />
            </div>
            <h4 className="text-lg font-semibold text-primary mb-2 font-alata">Location</h4>
            <p className="text-muted-foreground font-lexend">McAllen, Texas</p>
          </div>
        </div>
        
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    </section>
    
    {/* Footer */}
    <div className="bg-background border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <div className="text-2xl font-bold text-primary font-alata">
            Texas General Medical Center
          </div>
          <div className="text-muted-foreground font-lexend">© 2025 Texas General Medical Center. All rights reserved.</div>
        </div>
      </div>
    </div>
  </>;
};
export default ClosingSection;