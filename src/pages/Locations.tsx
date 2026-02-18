import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Locations = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const locations = [
    {
      name: "Irvine",
      link: "/locations/irvine",
      description: "Local roof cleaning Irvine, driveway cleaning Irvine, window cleaning Irvine, and cleaning services in Irvine. Serving the historic town of Irvine and surrounding North Ayrshire areas.",
      services: ["Roof Steam Cleaning", "Driveway Cleaning", "Window Cleaning", "Gutter Cleaning"]
    },
    {
      name: "Ayr",
      link: "/locations/ayr",
      description: "Affordable roof cleaning Ayr, driveway pressure washing Ayr, residential window cleaning Ayr, PVC soffit cleaning Ayr, and cleaning services in Ayr. Serving the historic county town of Ayr.",
      services: ["Roof Cleaning", "Driveway Pressure Washing", "Residential Window Cleaning", "PVC Cleaning"]
    },
    {
      name: "Troon",
      link: "/locations/troon",
      description: "Troon window cleaners, PVC fascias cleaning Troon, and cleaning services in Troon. Expert cleaning for coastal properties in this beautiful seaside town.",
      services: ["Window Cleaning", "PVC Fascias Cleaning", "Roof Cleaning", "Render Softwashing"]
    },
    {
      name: "Prestwick",
      link: "/locations/prestwick",
      description: "Prestwick driveway cleaning and professional roof cleaning services. Expert cleaning for coastal properties with rich aviation heritage.",
      services: ["Driveway Cleaning", "Roof Cleaning", "Gutter Cleaning", "Exterior Cleaning"]
    },
    {
      name: "Kilmarnock",
      link: "/locations/kilmarnock",
      description: "Kilmarnock exterior cleaners, gutter maintenance Kilmarnock, and comprehensive cleaning solutions. Serving this vibrant community with rich industrial heritage.",
      services: ["Exterior Cleaning", "Gutter Maintenance", "Roof Cleaning", "Property Cleaning"]
    },
    {
      name: "Outer Glasgow",
      link: "#",
      description: "Professional exterior cleaning Glasgow and comprehensive cleaning services. Serving outer Glasgow areas with expert roof cleaning and exterior maintenance.",
      services: ["Professional Exterior Cleaning", "Roof Cleaning", "Gutter Cleaning", "Commercial Cleaning"]
    }
  ];

  return (
    <div className="font-manrope">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-manrope font-normal text-gray-900 mb-6">
              Service Areas - Ayrshire & Glasgow
            </h1>
            <p className="text-xl text-gray-600 font-manrope mb-8 leading-relaxed">
              Professional roof cleaning services and exterior cleaning services Ayrshire across all major towns and areas. 
              We provide cleaning services in Irvine, cleaning services in Ayr, cleaning services in Troon, and throughout Ayrshire and Glasgow cleaning areas. 
              From local roof cleaning to comprehensive property cleaning services, we're your trusted Ayrshire and Glasgow cleaning specialists.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#526bb0] hover:bg-blue-700 text-white font-manrope font-normal px-8 py-3"
              >
                Get Free Quote
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/#services'}
                className="font-manrope font-normal px-8 py-3"
              >
                Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            Our Service Area
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2280.5!2d-4.6299!3d55.4620!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDI3JzQzLjIiTiA0wrAzNyc0Ny42Ilc!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Area Map - Ayrshire and Glasgow"
              className="w-full"
            ></iframe>
          </div>
          <p className="text-sm text-gray-500 font-manrope text-center mt-2">
            <a 
              href="https://www.google.com/maps/place/Ayrshire,+UK/@55.4620,-4.6299,10z" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#526bb0] hover:underline"
            >
              View larger map
            </a>
          </p>
          <p className="text-center text-gray-600 font-manrope">
            We provide professional cleaning services across Ayrshire including Irvine, Ayr, Troon, Prestwick, Kilmarnock, and outer Glasgow areas.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-12 text-center">
            Locations We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-manrope font-normal text-gray-900">
                      {location.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-manrope mb-6 leading-relaxed">
                    {location.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-manrope font-medium text-gray-900 mb-3">
                      Popular Services:
                    </h4>
                    <ul className="space-y-2">
                      {location.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="text-sm text-gray-600 font-manrope flex items-center">
                          <ArrowRight className="w-4 h-4 mr-2 text-[#526bb0]" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {location.link !== "#" ? (
                    <a
                      href={location.link}
                      className="inline-flex items-center text-[#526bb0] hover:text-blue-700 font-manrope font-medium transition-colors"
                    >
                      Learn more about {location.name}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  ) : (
                    <Button
                      onClick={() => scrollToSection('contact')}
                      variant="outline"
                      className="w-full font-manrope font-normal"
                    >
                      Get Quote for {location.name}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 font-manrope">
              Contact us today for a free quote on cleaning services in your area.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#526bb0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-manrope font-medium text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 font-manrope">07919 270128</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#526bb0] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-manrope font-medium text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600 font-manrope">2 West Bowhouse Way<br />Irvine, Ayrshire</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#526bb0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-manrope font-medium text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600 font-manrope">Mon-Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 4:00 PM</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => window.location.href = '/#contact'}
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

export default Locations;

