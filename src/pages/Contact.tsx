
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We've received your message and will get back to you soon.",
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl">
          Reach out with questions, feedback, or support requests.
          </p>
        </div>
      </div>
      
      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-gray-600">
                      123 Nehru Place<br />
                      B 400, Top Floor<br />
                      New Delhi, Pin Code-110036
                    </p>
                    
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">
                    Customer Service: 98765 43210 <br />
        WhatsApp Support: +91 98765 43210
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">
                      General Inquiries: info@sparkleshop.com<br />
                      Support: support@sparkleshop.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 8:00 PM IST<br />
                      Saturday: 10:00 AM - 6:00 PM IST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
             
            </div>
            
            {/* Contact Form */}
            {/*<div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <Input id="first-name" type="text" required />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <Input id="last-name" type="text" required />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input id="email" type="email" required />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <Input id="subject" type="text" required />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea id="message" rows={5} required />
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-start">
                      <input 
                        id="terms" 
                        type="checkbox" 
                        className="mt-1 form-checkbox h-4 w-4 text-primary"
                        required 
                      />
                      <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                        I agree to the <a href="#" className="text-primary hover:underline">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                      </label>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full py-6">Send Message</Button>
                </form>
              </div>
  </div>*/}
          </div>
        </div>
      </section>
      
      {/* Map */}
     {/* <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
          <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-600">Map Placeholder - Google Maps would be integrated here</p>
            </div>
          </div>
        </div>
</section>  
*/}
    </div>
  );
};

export default Contact;
