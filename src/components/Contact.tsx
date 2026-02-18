
import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

// Google Analytics type declaration
declare global {
  function gtag(...args: any[]): void;
}

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;
    
    try {
      const response = await fetch('https://formspree.io/f/movnnnry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          service,
          message,
          website: 'https://jimboscleaning.com',
        }),
      });

      if (response.ok) {
        // Track successful form submission
        if (typeof gtag !== 'undefined') {
          gtag('event', 'form_submit', {
            event_category: 'Contact',
            event_label: 'Quote Request Form',
            value: 1
          });
        }
        
        alert('Thank you! Your message has been sent successfully.');
        // Reset the form
        (e.target as HTMLFormElement).reset();
      } else {
        alert('Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    }
  };

  const handlePhoneClick = () => {
    // Track phone click event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'Contact',
        event_label: 'Phone Click',
        value: 1
      });
    }
    
    const phoneNumber = "7919270128"; // UK mobile number without country code
    
    // Check if it's a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile devices, use tel: protocol to open phone app
      window.location.href = `tel:+44${phoneNumber}`; // +44 7919 270128
    } else {
      // For desktop, open WhatsApp Web with the number
      const whatsappUrl = `https://api.whatsapp.com/send?phone=44${phoneNumber}`; // 447919270128
      window.open(whatsappUrl, '_blank');
    }
  };


  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.7 }}
            className="text-4xl md:text-5xl font-manrope font-normal text-gray-900 mb-4"
          >
            Get Your Free Quote Today
          </motion.h2>
          <p className="text-xl text-gray-600 font-manrope max-w-2xl mx-auto">
            Ready to protect your home with professional roofing? Contact us for a free consultation and quote.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-manrope font-normal text-gray-900 text-center">
                Request a Quote
              </CardTitle>
              <p className="text-gray-600 font-manrope text-center mt-2">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-manrope font-normal text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input 
                        type="text" 
                        name="firstName"
                        required 
                        className="font-manrope"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-manrope font-normal text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input 
                        type="text" 
                        name="lastName"
                        required 
                        className="font-manrope"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-manrope font-normal text-gray-700 mb-2">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      name="email"
                      required 
                      className="font-manrope"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-manrope font-normal text-gray-700 mb-2">
                      Phone
                    </label>
                    <Input 
                      type="tel" 
                      name="phone"
                      required 
                      className="font-manrope"
                      placeholder="+44 1563 555-0123"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-manrope font-normal text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select name="service" className="w-full px-3 py-2 border border-gray-300 rounded-md font-manrope">
                      <option value="">Select a service</option>
                      <option value="roof-steam-cleaning">Roof Steam Cleaning</option>
                      <option value="render-softwashing">Render Softwashing</option>
                      <option value="driveway-cleaning">Driveway Cleaning</option>
                      <option value="gutter-cleaning">Gutter Cleaning</option>
                      <option value="pvc-white-cleaning">PVC White Cleaning</option>
                      <option value="window-cleaning">Window Cleaning</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-manrope font-normal text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea 
                      name="message"
                      rows={4} 
                      className="font-manrope"
                      placeholder="Tell us about your roofing needs..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#526bb0] hover:bg-blue-700 text-white font-manrope font-normal py-3"
                  >
                    Get Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          
          {/* Contact Information Below Form */}
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600 font-manrope">
              <button 
                onClick={handlePhoneClick}
                className="flex items-center space-x-2 hover:text-[#526bb0] transition-colors cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                <span className="font-normal">07919 270128</span>
              </button>
              
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="font-normal">2 west bowhouse way, Irvine, United Kingdom</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span className="font-normal">Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
