import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

// Google Analytics type declaration
declare global {
  function gtag(...args: any[]): void;
}

const ContactForm = () => {
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

  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-manrope font-normal text-gray-900 mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 font-manrope max-w-2xl mx-auto"
          >
            Get your free quote today. Fill out the form below and we'll get back to you as soon as possible.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-manrope font-normal text-gray-900">
                Request a Quote
              </CardTitle>
              <p className="text-gray-600 font-manrope text-sm mt-2">
                Send us a message and we'll get back to you as soon as possible
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
                    <option value="glass-mirror-cleaning">Glass and Mirror Cleaning</option>
                    <option value="interior-exterior-window-cleaning">Interior and Exterior Window Cleaning</option>
                    <option value="power-pressure-washing">Power/Pressure Washing</option>
                    <option value="rooftop-skylight-cleaning">Rooftop/Skylight Cleaning</option>
                    <option value="window-washing">Window Washing</option>
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
                    placeholder="Tell us about your exterior cleaning needs..."
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
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;

