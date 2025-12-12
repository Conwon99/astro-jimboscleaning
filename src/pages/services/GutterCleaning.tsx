import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Droplet, Shield, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const GutterCleaning = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetQuote = () => {
    window.location.href = '/contact';
  };

  const handleOurProcess = () => {
    window.location.href = '/#process';
    // Small delay to ensure the page has loaded before scrolling
    setTimeout(() => {
      const processElement = document.getElementById('process');
      if (processElement) {
        processElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const relatedServices = [
    { name: "Roof Steam Cleaning", link: "/services/roof-steam-cleaning" },
    { name: "PVC White Cleaning", link: "/services/pvc-white-cleaning" },
    { name: "Window Cleaning", link: "/services/window-cleaning" }
  ];

  const locations = [
    { name: "Irvine", link: "/locations/irvine" },
    { name: "Kilmarnock", link: "/locations/kilmarnock" },
    { name: "Ayr", link: "/locations/ayr" },
    { name: "Troon", link: "/locations/troon" },
    { name: "Prestwick", link: "/locations/prestwick" },
    { name: "Outer Glasgow", link: "#" }
  ];

  return (
    <div className="font-manrope">
      <Header />
      
      {/* Hero Section */}
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
              Gutter Cleaning in Ayrshire
            </h1>
            <p className="text-xl text-gray-600 font-manrope mb-8 leading-relaxed">
              Professional gutter cleaning services in Ayrshire to keep your drainage systems clear and functional. 
              We provide thorough gutter cleaning and gutter unblocking services, removing leaves, debris, moss, and blockages 
              to prevent water damage and maintain proper drainage. Expert gutter cleaning across Irvine, Ayr, Kilmarnock, Troon, Prestwick, and outer Glasgow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
                          <Button 
              onClick={handleGetQuote}
              className="bg-[#526bb0] hover:bg-blue-700 text-white font-manrope font-normal px-8 py-3"
            >
              Get Free Quote
            </Button>
              <Button 
                variant="outline"
                onClick={handleOurProcess}
                className="font-manrope font-normal px-8 py-3"
              >
                Our Process
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-6">
              Professional Gutter Cleaning Services in Ayrshire
            </h2>
            <p className="text-lg text-gray-600 font-manrope leading-relaxed mb-6">
              Our professional gutter cleaning service in Ayrshire ensures your drainage systems remain clear and functional year-round. 
              Blocked gutters can cause serious water damage to your property, including roof damage, wall staining, and foundation problems. 
              Regular gutter cleaning and gutter unblocking services prevent these costly issues and protect your property investment.
            </p>
            <p className="text-lg text-gray-600 font-manrope leading-relaxed">
              We provide comprehensive gutter cleaning services across Ayrshire, including debris removal, gutter unblocking, and maintenance cleaning. 
              Our experienced team uses professional equipment to safely and efficiently clean your gutters, ensuring proper drainage and protecting your property. 
              We serve homes and businesses throughout Irvine, Ayr, Kilmarnock, Troon, Prestwick, and outer Glasgow.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-6">
                Why Choose Our Gutter Cleaning?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Complete Debris Removal</h3>
                    <p className="text-gray-600 font-manrope">
                      We thoroughly remove leaves, twigs, moss, dirt, and other debris that can block your gutters and cause water damage. 
                      Our comprehensive cleaning ensures all blockages are cleared, including downpipes and drainage systems.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Property Protection</h3>
                    <p className="text-gray-600 font-manrope">
                      Regular gutter cleaning prevents water damage to your roof, walls, and foundation by ensuring proper drainage. 
                      Blocked gutters can lead to expensive repairs, making regular maintenance essential for property protection.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Professional Equipment & Safety</h3>
                    <p className="text-gray-600 font-manrope">
                      We use professional-grade equipment and safety techniques to safely and efficiently clean your gutters. 
                      Our team is fully insured and trained to work at height, ensuring safe and thorough gutter cleaning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-manrope font-normal text-gray-900">
                    Service Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-manrope mb-4">
                    We provide gutter cleaning services across Ayrshire and outer Glasgow:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {locations.map((location, index) => (
                      <a
                        key={index}
                        href={location.link}
                        className="text-[#526bb0] hover:text-blue-700 font-manrope font-normal hover:underline"
                      >
                        <MapPin className="w-4 h-4 inline mr-1" />
                        {location.name}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            Our Gutter Cleaning Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Inspection</h3>
              <p className="text-gray-600 font-manrope">
                We inspect your gutters to assess the level of blockage, identify any damage, and determine the best cleaning approach.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Thorough Cleaning</h3>
              <p className="text-gray-600 font-manrope">
                Our team removes all debris, unblocks downpipes, and ensures your entire gutter system is clear and functional.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Final Check</h3>
              <p className="text-gray-600 font-manrope">
                We test water flow through your gutters and downpipes to ensure everything is working correctly and provide a final inspection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Gutter Cleaning
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                How often should gutters be cleaned?
              </h3>
              <p className="text-gray-600 font-manrope">
                We recommend gutter cleaning at least twice a year, typically in spring and autumn. Properties with many trees nearby may need 
                more frequent cleaning, while others may only need annual cleaning. Regular maintenance prevents blockages and protects your property.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                What happens if gutters aren't cleaned regularly?
              </h3>
              <p className="text-gray-600 font-manrope">
                Blocked gutters can cause water overflow, leading to roof damage, wall staining, foundation problems, and even interior water damage. 
                Regular gutter cleaning prevents these costly issues and protects your property investment.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                Do you clean downpipes as well?
              </h3>
              <p className="text-gray-600 font-manrope">
                Yes, our gutter cleaning service includes clearing downpipes and ensuring proper water flow through your entire drainage system. 
                We ensure all blockages are removed from gutters, downpipes, and drainage outlets.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                Are you insured for gutter cleaning work?
              </h3>
              <p className="text-gray-600 font-manrope">
                Yes, we are fully insured and our team is trained to work safely at height. We take all necessary safety precautions to protect 
                your property and our team during gutter cleaning work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 font-manrope text-sm">
                  Learn more about our {service.name.toLowerCase()} services.
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-4">
              Ready to Clean Your Gutters?
            </h2>
            <p className="text-xl text-gray-600 font-manrope">
              Contact us today for a free quote on gutter cleaning services.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={handleGetQuote}
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

export default GutterCleaning;
