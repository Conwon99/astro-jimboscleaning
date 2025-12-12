import { Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

// Google Analytics type declaration
declare global {
  function gtag(...args: any[]): void;
}

const ContactDetails = () => {
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
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl font-manrope font-normal text-gray-900">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <button 
                onClick={handlePhoneClick}
                className="flex items-center space-x-4 w-full text-left hover:opacity-80 transition-opacity cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-manrope font-normal text-gray-900">Phone</h4>
                  <p className="text-gray-600 font-manrope">07919 270128</p>
                </div>
              </button>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-manrope font-normal text-gray-900">Address</h4>
                  <p className="text-gray-600 font-manrope">2 West Bowhouse Way, Irvine, United Kingdom</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-manrope font-normal text-gray-900">Hours</h4>
                  <p className="text-gray-600 font-manrope">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600 font-manrope">Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactDetails;

