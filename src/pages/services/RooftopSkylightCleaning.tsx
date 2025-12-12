import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Droplet, Shield, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const RooftopSkylightCleaning = () => {
  const handleGetQuote = () => {
    window.location.href = '/contact';
  };

  const relatedServices = [
    { name: "Roof Steam Cleaning", link: "/services/roof-steam-cleaning" },
    { name: "Gutter Cleaning", link: "/services/gutter-cleaning" },
    { name: "Power/Pressure Washing", link: "/services/power-pressure-washing" }
  ];

  const locations = [
    { name: "Irvine", link: "/locations/irvine" },
    { name: "Kilmarnock", link: "/locations/kilmarnock" },
    { name: "Ayr", link: "/locations/ayr" },
    { name: "Troon", link: "/locations/troon" },
    { name: "Prestwick", link: "/locations/prestwick" }
  ];

  return (
    <div className="font-manrope">
      <Header />
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-8">
            <a href="/" className="inline-flex items-center text-[#526bb0] hover:text-blue-700 font-manrope font-normal mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Home
            </a>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-manrope font-normal text-gray-900 mb-6">
              Rooftop/Skylight Cleaning in Ayrshire
            </h1>
            <p className="text-xl text-gray-600 font-manrope mb-8 leading-relaxed">
              Expert rooftop and skylight cleaning services in Ayrshire for safe, effective results. 
              Professional cleaning for roofs and skylights across Irvine, Ayr, Kilmarnock, Troon, Prestwick, and outer Glasgow. 
              Our specialist cleaning ensures safe access and thorough cleaning of hard-to-reach areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleGetQuote} className="bg-[#526bb0] hover:bg-blue-700 text-white font-manrope font-normal px-8 py-3">
                Get Free Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-6">
              Professional Rooftop and Skylight Cleaning Services in Ayrshire
            </h2>
            <p className="text-lg text-gray-600 font-manrope leading-relaxed mb-6">
              Our professional rooftop and skylight cleaning service in Ayrshire provides safe, effective cleaning for hard-to-reach areas. 
              Rooftops and skylights accumulate dirt, moss, and debris that can affect appearance and functionality. Our experienced team uses 
              safe access methods and professional cleaning techniques to ensure thorough cleaning while protecting your property.
            </p>
            <p className="text-lg text-gray-600 font-manrope leading-relaxed">
              We provide comprehensive rooftop and skylight cleaning services across Ayrshire for homes and businesses. Our services are available 
              throughout Irvine, Ayr, Kilmarnock, Troon, Prestwick, and outer Glasgow, ensuring your rooftop areas are always clean and well-maintained.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-6">Why Choose Our Rooftop/Skylight Cleaning?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Safe & Effective Cleaning</h3>
                    <p className="text-gray-600 font-manrope">
                      Expert cleaning for rooftops and skylights using safe, professional methods. Our team is trained in safe access techniques 
                      and uses appropriate equipment to ensure safe, thorough cleaning.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Professional Service</h3>
                    <p className="text-gray-600 font-manrope">
                      Our experienced and fully insured team ensures safe, thorough cleaning of your rooftop and skylight areas. 
                      We take all necessary safety precautions to protect your property and our team.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Thorough Results</h3>
                    <p className="text-gray-600 font-manrope">
                      We ensure all rooftop and skylight areas are thoroughly cleaned, removing dirt, moss, and debris to restore appearance 
                      and maintain functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-manrope font-normal text-gray-900">Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-manrope mb-4">We provide rooftop/skylight cleaning across Ayrshire:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {locations.map((location, index) => (
                      <a key={index} href={location.link} className="text-[#526bb0] hover:text-blue-700 font-manrope font-normal hover:underline">
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
            Our Rooftop and Skylight Cleaning Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Safety Assessment</h3>
              <p className="text-gray-600 font-manrope">
                We assess access requirements and safety considerations to plan the safest and most effective cleaning approach.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Safe Cleaning</h3>
              <p className="text-gray-600 font-manrope">
                Our team uses safe access methods and professional cleaning techniques to thoroughly clean rooftops and skylights.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Final Inspection</h3>
              <p className="text-gray-600 font-manrope">
                We perform a final inspection to ensure all areas are thoroughly cleaned and meet our high quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Rooftop and Skylight Cleaning
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                Is rooftop and skylight cleaning safe?
              </h3>
              <p className="text-gray-600 font-manrope">
                Yes, our team is fully trained in safe access techniques and uses appropriate safety equipment. We're fully insured and take all 
                necessary precautions to ensure safe, professional cleaning of rooftop and skylight areas.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                How often should rooftops and skylights be cleaned?
              </h3>
              <p className="text-gray-600 font-manrope">
                We recommend rooftop and skylight cleaning every 2-3 years, depending on location and environmental factors. 
                Properties in areas with heavy rainfall or many trees may need more frequent cleaning.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                Can you clean all types of skylights?
              </h3>
              <p className="text-gray-600 font-manrope">
                Yes, we can clean all types of skylights including flat roof skylights, pitched roof skylights, and roof windows. 
                We adjust our cleaning methods based on skylight type to ensure safe, effective cleaning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <a key={index} href={service.link} className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 font-manrope text-sm">Learn more about our {service.name.toLowerCase()} services.</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-4">Ready to Clean Your Rooftop or Skylight?</h2>
            <p className="text-xl text-gray-600 font-manrope">Contact us today for a free quote on rooftop/skylight cleaning services.</p>
          </div>
          <div className="text-center">
            <Button onClick={handleGetQuote} className="bg-[#526bb0] hover:bg-blue-700 text-white font-manrope font-normal px-8 py-3">
              Get Your Free Quote
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RooftopSkylightCleaning;


