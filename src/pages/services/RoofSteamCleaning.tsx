import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Droplet, Shield, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const RoofSteamCleaning = () => {
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
    { name: "Render Softwashing", link: "/services/render-softwashing" },
    { name: "Gutter Cleaning", link: "/services/gutter-cleaning" },
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
              Roof Steam Cleaning in Ayrshire
            </h1>
            <p className="text-xl text-gray-600 font-manrope mb-8 leading-relaxed">
              Professional roof steam cleaning services in Ayrshire to remove moss, algae, and dirt from your roof tiles. 
              Safe, effective, and environmentally friendly roof cleaning that protects your property's value. 
              Expert roof moss removal and roof cleaning services across Irvine, Ayr, Kilmarnock, Troon, Prestwick, and outer Glasgow.
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
              Professional Roof Steam Cleaning Services in Ayrshire
            </h2>
            <p className="text-lg text-gray-600 font-manrope leading-relaxed mb-6">
              Our professional roof steam cleaning service in Ayrshire is the safest and most effective way to remove moss, algae, lichen, and dirt buildup from your roof tiles. 
              Over time, organic growth on your roof can cause significant damage, leading to costly repairs. Regular roof cleaning not only improves your property's appearance 
              but also extends the life of your roof and protects your investment.
            </p>
            <p className="text-lg text-gray-600 font-manrope leading-relaxed">
              We provide comprehensive roof cleaning services across Ayrshire, including roof moss removal, algae treatment, and general roof maintenance. 
              Our eco-friendly steam cleaning method is safe for your roof tiles, surrounding vegetation, and the environment, making it the preferred choice for 
              residential and commercial properties throughout Irvine, Ayr, Kilmarnock, Troon, Prestwick, and outer Glasgow.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-6">
                Why Choose Our Roof Steam Cleaning?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Safe & Effective Steam Cleaning</h3>
                    <p className="text-gray-600 font-manrope">
                      Our professional steam cleaning method safely removes moss, algae, lichen, and dirt without damaging your roof tiles or the environment. 
                      Unlike high-pressure washing, steam cleaning is gentle on roof surfaces while being highly effective at removing organic growth and stains.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Property Protection & Value</h3>
                    <p className="text-gray-600 font-manrope">
                      Regular roof cleaning prevents damage from organic growth, maintains your property's curb appeal, and protects your investment. 
                      A clean roof not only looks better but also functions better, preventing water damage and extending the lifespan of your roof tiles.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Quick & Reliable Service</h3>
                    <p className="text-gray-600 font-manrope">
                      Our experienced team completes roof steam cleaning efficiently with minimal disruption to your daily routine. 
                      We work quickly and professionally, ensuring your roof is cleaned to the highest standards while respecting your property and schedule.
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
                    We provide roof steam cleaning services across Ayrshire and outer Glasgow:
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
            Our Roof Steam Cleaning Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Inspection</h3>
              <p className="text-gray-600 font-manrope">
                We begin with a thorough inspection of your roof to assess the condition, identify problem areas, and determine the best cleaning approach.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Steam Cleaning</h3>
              <p className="text-gray-600 font-manrope">
                Our professional team uses specialized steam cleaning equipment to safely remove moss, algae, and dirt from your roof tiles without causing damage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Final Inspection</h3>
              <p className="text-gray-600 font-manrope">
                We conduct a final inspection to ensure your roof is clean and in excellent condition, leaving you with a roof that looks great and is protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Roof Steam Cleaning
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                How often should I have my roof cleaned?
              </h3>
              <p className="text-gray-600 font-manrope">
                We recommend professional roof cleaning every 2-3 years, depending on your location and the amount of organic growth. 
                Properties in areas with high rainfall and humidity may need more frequent cleaning to prevent moss and algae buildup.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                Is steam cleaning safe for all roof types?
              </h3>
              <p className="text-gray-600 font-manrope">
                Yes, our steam cleaning method is safe for most roof types including slate, tile, and concrete roofs. 
                The gentle steam process effectively removes organic growth without the high pressure that can damage roof tiles.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                How much does roof cleaning cost in Ayrshire?
              </h3>
              <p className="text-gray-600 font-manrope">
                Roof cleaning costs vary depending on the size of your roof, the extent of cleaning needed, and accessibility. 
                Contact us for a free, no-obligation quote tailored to your specific property. We provide competitive pricing for roof cleaning services across Ayrshire.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                Will roof cleaning prevent future moss growth?
              </h3>
              <p className="text-gray-600 font-manrope">
                While regular cleaning significantly reduces moss and algae growth, complete prevention depends on environmental factors. 
                Our cleaning process removes existing growth and helps maintain a cleaner roof for longer periods between cleanings.
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
              Ready to Clean Your Roof?
            </h2>
            <p className="text-xl text-gray-600 font-manrope">
              Contact us today for a free quote on roof steam cleaning services.
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

export default RoofSteamCleaning;
