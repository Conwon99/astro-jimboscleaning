import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Droplet, Shield, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const PVCWhiteCleaning = () => {
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
    { name: "Gutter Cleaning", link: "/services/gutter-cleaning" },
    { name: "Window Cleaning", link: "/services/window-cleaning" },
    { name: "Roof Steam Cleaning", link: "/services/roof-steam-cleaning" }
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
              PVC White Cleaning in Ayrshire
            </h1>
            <p className="text-xl text-gray-600 font-manrope mb-8 leading-relaxed">
              Professional PVC white cleaning services in Ayrshire to restore the shine to your PVC fascias, soffits, and gutters. 
              Our specialist PVC fascia cleaning removes dirt, grime, and discoloration to bring back the original white finish. 
              Expert PVC cleaning across Irvine, Ayr, Kilmarnock, Troon, Prestwick, and outer Glasgow.
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
              Professional PVC White Cleaning Services in Ayrshire
            </h2>
            <p className="text-lg text-gray-600 font-manrope leading-relaxed mb-6">
              Our professional PVC white cleaning service in Ayrshire restores the original bright white appearance of your PVC fascias, soffits, and gutters. 
              Over time, PVC surfaces accumulate dirt, grime, algae, and discoloration that can make your property look neglected. Our specialist PVC fascia cleaning 
              uses techniques and solutions specifically designed for PVC materials to safely remove all buildup and restore the original white finish.
            </p>
            <p className="text-lg text-gray-600 font-manrope leading-relaxed">
              We provide comprehensive PVC white cleaning services across Ayrshire, including fascia cleaning, soffit cleaning, and gutter cleaning. 
              Our methods are safe for PVC materials and provide long-lasting results. We serve homes and businesses throughout Irvine, Ayr, Kilmarnock, 
              Troon, Prestwick, and outer Glasgow, ensuring your PVC surfaces always look their best.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-6">
                Why Choose Our PVC White Cleaning?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Specialist PVC Cleaning</h3>
                    <p className="text-gray-600 font-manrope">
                      We use specialized cleaning solutions and techniques designed specifically for PVC surfaces to restore their original white finish. 
                      Our methods effectively remove dirt, grime, algae, and discoloration without damaging the PVC material.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Surface Safe Methods</h3>
                    <p className="text-gray-600 font-manrope">
                      Our cleaning methods are safe for PVC materials and won't cause damage, discoloration, or degradation to your fascias, soffits, or gutters. 
                      We use appropriate techniques that protect your PVC while achieving excellent cleaning results.
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
                      Professional PVC cleaning removes stubborn dirt and grime, leaving your PVC surfaces looking clean and bright for longer. 
                      Our cleaning helps prevent future buildup, extending the time between cleanings.
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
                    We provide PVC white cleaning services across Ayrshire and outer Glasgow:
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
            Our PVC White Cleaning Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600 font-manrope">
                We assess your PVC surfaces to identify problem areas, determine the level of cleaning needed, and plan the best approach.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Specialist Cleaning</h3>
              <p className="text-gray-600 font-manrope">
                Our team uses specialized PVC cleaning solutions and techniques to safely remove all dirt, grime, and discoloration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Restoration</h3>
              <p className="text-gray-600 font-manrope">
                We ensure your PVC surfaces are restored to their original bright white appearance, leaving them looking like new.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            Frequently Asked Questions About PVC White Cleaning
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                Can you restore grey PVC back to white?
              </h3>
              <p className="text-gray-600 font-manrope">
                Yes, our specialist PVC cleaning can significantly improve the appearance of grey or discolored PVC. While heavily degraded PVC may not 
                return to perfect white, our cleaning removes dirt and grime buildup that causes discoloration, restoring much of the original appearance.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                Is PVC cleaning safe for the material?
              </h3>
              <p className="text-gray-600 font-manrope">
                Yes, our PVC cleaning methods are specifically designed to be safe for PVC materials. We use appropriate cleaning solutions and techniques 
                that won't cause damage, discoloration, or degradation to your fascias, soffits, or gutters.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                How often should PVC be cleaned?
              </h3>
              <p className="text-gray-600 font-manrope">
                We recommend PVC cleaning every 2-3 years to maintain appearance and prevent buildup. Properties in areas with high pollution or many trees 
                may need more frequent cleaning to keep PVC looking its best.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                Do you clean fascias, soffits, and gutters together?
              </h3>
              <p className="text-gray-600 font-manrope">
                Yes, we can clean all PVC surfaces including fascias, soffits, and gutters during the same visit. This ensures a consistent appearance 
                and is often more cost-effective than cleaning them separately.
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
              Ready to Clean Your PVC?
            </h2>
            <p className="text-xl text-gray-600 font-manrope">
              Contact us today for a free quote on PVC white cleaning services.
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

export default PVCWhiteCleaning;
