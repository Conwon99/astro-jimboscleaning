import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Droplet, MapPin, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface CleanersCategoryProps {
  city: string;
}

const CleanersCategory = ({ city }: CleanersCategoryProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { 
      name: "Interior and Exterior Window Cleaning", 
      link: `/services/interior-exterior-window-cleaning/${city.toLowerCase()}`,
      description: "Complete window cleaning services for both interior and exterior surfaces."
    },
    { 
      name: "Driveway Cleaning", 
      link: `/services/driveway-cleaning/${city.toLowerCase()}`,
      description: "Professional driveway cleaning to restore your property's entrance."
    },
    { 
      name: "Window Cleaning", 
      link: `/services/window-cleaning/${city.toLowerCase()}`,
      description: "Streak-free window cleaning for sparkling results every time."
    }
  ];

  const nearbyAreas = [
    { name: "Irvine", link: "/categories/cleaners/irvine" },
    { name: "Kilmarnock", link: "/categories/cleaners/kilmarnock" },
    { name: "Ayr", link: "/categories/cleaners/ayr" },
    { name: "Troon", link: "/categories/cleaners/troon" },
    { name: "Prestwick", link: "/categories/cleaners/prestwick" }
  ].filter(area => area.name.toLowerCase() !== city.toLowerCase());

  return (
    <div className="font-manrope">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-8">
            <a 
              href="/" 
              className="inline-flex items-center text-[#526bb0] hover:text-blue-700 font-manrope font-normal mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </a>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-manrope font-normal text-gray-900 mb-6">
              Looking For A Cleaner In {city}?
            </h1>
            <p className="text-xl text-gray-600 font-manrope mb-8 leading-relaxed">
              Professional cleaning services in {city}, Ayrshire. We provide expert interior and exterior window cleaning, 
              driveway cleaning, and comprehensive window cleaning services for homes and businesses across {city} and surrounding areas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => window.location.href = '/contact'}
                className="bg-[#526bb0] hover:bg-blue-700 text-white font-manrope font-normal px-8 py-3"
              >
                Get Free Quote
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="font-manrope font-normal px-8 py-3"
              >
                Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            Our Cleaning Services in {city}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="block p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Droplet className="w-6 h-6 text-[#526bb0]" />
                  <h3 className="text-xl font-manrope font-normal text-gray-900">
                    {service.name}
                  </h3>
                </div>
                <p className="text-gray-600 font-manrope text-sm">
                  {service.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-6">
                Why Choose Our Cleaning Services in {city}?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Professional Expertise</h3>
                    <p className="text-gray-600 font-manrope">
                      Our experienced team provides professional cleaning services using safe, effective methods and quality equipment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Reliable Service</h3>
                    <p className="text-gray-600 font-manrope">
                      We offer flexible scheduling and regular maintenance programs to keep your property looking its best year-round.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Local {city} Knowledge</h3>
                    <p className="text-gray-600 font-manrope">
                      Based in Ayrshire, we understand the unique cleaning challenges in {city} and provide tailored solutions for local properties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-manrope font-normal text-gray-900">
                    Service Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-manrope mb-4">
                    We also serve nearby areas:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {nearbyAreas.map((area, index) => (
                      <a
                        key={index}
                        href={area.link}
                        className="text-[#526bb0] hover:text-blue-700 font-manrope font-normal hover:underline"
                      >
                        <MapPin className="w-4 h-4 inline mr-1" />
                        {area.name}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-4">
              Ready to Get Started in {city}?
            </h2>
            <p className="text-xl text-gray-600 font-manrope">
              Contact us today for a free quote on professional cleaning services in {city}.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => window.location.href = '/contact'}
              className="bg-[#526bb0] hover:bg-blue-700 text-white font-manrope font-normal px-8 py-3"
            >
              Get Your Free Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CleanersCategory;


