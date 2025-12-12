import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Droplet, Shield, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const RenderSoftwashing = () => {
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
    { name: "Driveway Cleaning", link: "/services/driveway-cleaning" },
    { name: "PVC White Cleaning", link: "/services/pvc-white-cleaning" }
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
              Render Softwashing in Ayrshire
            </h1>
            <p className="text-xl text-gray-600 font-manrope mb-8 leading-relaxed">
              Professional render softwashing services in Ayrshire for gentle, effective cleaning of render surfaces. 
              Our softwashing technique removes stains, algae, and organic growth without damage, restoring your property's appearance safely. 
              Expert render cleaning across Irvine, Ayr, Kilmarnock, Troon, Prestwick, and outer Glasgow.
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
              Professional Render Softwashing Services in Ayrshire
            </h2>
            <p className="text-lg text-gray-600 font-manrope leading-relaxed mb-6">
              Our professional render softwashing service in Ayrshire provides gentle, effective cleaning for render surfaces without the risk of damage 
              associated with high-pressure washing. Render surfaces are particularly vulnerable to algae, moss, and dirt buildup, which can make your 
              property look neglected and reduce its value. Our eco-friendly softwashing technique safely removes all organic growth and stains, 
              restoring your render to its original clean appearance.
            </p>
            <p className="text-lg text-gray-600 font-manrope leading-relaxed">
              We provide comprehensive render softwashing services across Ayrshire using specialized low-pressure cleaning techniques and eco-friendly solutions. 
              Our softwashing method is safe for all render types and provides long-lasting results. We serve homes and businesses throughout Irvine, Ayr, 
              Kilmarnock, Troon, Prestwick, and outer Glasgow, ensuring your render always looks its best.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-6">
                Why Choose Our Render Softwashing?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Gentle & Safe Softwashing</h3>
                    <p className="text-gray-600 font-manrope">
                      Our softwashing technique uses low-pressure cleaning that's gentle on render surfaces while effectively removing stains, algae, 
                      and organic growth. Unlike high-pressure washing, softwashing won't damage your render or cause water ingress.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Surface Protection</h3>
                    <p className="text-gray-600 font-manrope">
                      Specialized eco-friendly cleaning solutions remove dirt, stains, and organic growth without damaging the render or surrounding areas. 
                      Our methods protect your property while achieving excellent cleaning results.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Long-lasting Results</h3>
                    <p className="text-gray-600 font-manrope">
                      Professional softwashing treatment provides lasting results, keeping your render looking clean and fresh for longer. 
                      Our cleaning solutions help prevent future organic growth, extending the time between cleanings.
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
                    We provide render softwashing services across Ayrshire and outer Glasgow:
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
            Our Render Softwashing Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600 font-manrope">
                We assess your render to identify problem areas, determine the best softwashing approach, and protect surrounding areas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Softwashing Treatment</h3>
              <p className="text-gray-600 font-manrope">
                Our team applies specialized eco-friendly cleaning solutions using low-pressure techniques to safely remove all organic growth and stains.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Final Rinse</h3>
              <p className="text-gray-600 font-manrope">
                We gently rinse the render to remove all cleaning solutions and debris, leaving your render clean and protected for longer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Render Softwashing
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                What is the difference between softwashing and pressure washing?
              </h3>
              <p className="text-gray-600 font-manrope">
                Softwashing uses low-pressure cleaning with specialized solutions, making it safe for delicate surfaces like render. 
                Pressure washing uses high-pressure water which can damage render and cause water ingress. Softwashing is the recommended method for render cleaning.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                How often should render be softwashed?
              </h3>
              <p className="text-gray-600 font-manrope">
                We recommend render softwashing every 2-3 years to maintain appearance and prevent organic growth buildup. 
                Properties in areas with high humidity or many trees may need more frequent cleaning.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                Is softwashing safe for all render types?
              </h3>
              <p className="text-gray-600 font-manrope">
                Yes, our softwashing technique is safe for all render types including monocouche, pebbledash, and smooth render. 
                We adjust our cleaning solutions and techniques based on your specific render type to ensure optimal results.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                Will softwashing prevent future algae growth?
              </h3>
              <p className="text-gray-600 font-manrope">
                While softwashing removes existing growth and helps prevent future buildup, complete prevention depends on environmental factors. 
                Our cleaning solutions provide some protection, but regular maintenance is recommended to keep render looking its best.
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
              Ready to Clean Your Render?
            </h2>
            <p className="text-xl text-gray-600 font-manrope">
              Contact us today for a free quote on render softwashing services.
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

export default RenderSoftwashing;
