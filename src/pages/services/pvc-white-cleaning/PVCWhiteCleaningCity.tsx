import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Droplet, Shield, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface PVCWhiteCleaningCityProps {
  city: string;
}

const PVCWhiteCleaningCity = ({ city }: PVCWhiteCleaningCityProps) => {
  const handleGetQuote = () => {
    window.location.href = '/contact';
  };

  const relatedServices = [
    { name: "Window Cleaning", link: `/services/window-cleaning/${city.toLowerCase()}` },
    { name: "Gutter Cleaning", link: `/services/gutter-cleaning/${city.toLowerCase()}` }
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
              Looking For A PVC White Cleaning In {city}?
            </h1>
            <p className="text-xl text-gray-600 font-manrope mb-8 leading-relaxed">
              Professional PVC white cleaning services in {city}, Ayrshire. Restore the shine to your PVC fascias, soffits, and gutters.
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
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-6">Why Choose Our PVC White Cleaning in {city}?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Restore Brightness</h3>
                    <p className="text-gray-600 font-manrope">Specialist cleaning to restore your PVC to its original bright white appearance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Safe Methods</h3>
                    <p className="text-gray-600 font-manrope">We use safe, effective cleaning methods that won't damage your PVC surfaces.</p>
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
                  <p className="text-gray-600 font-manrope mb-4">We provide PVC white cleaning in {city} and across Ayrshire:</p>
                  <div className="space-y-2">
                    <a href={`/locations/${city.toLowerCase()}`} className="text-[#526bb0] hover:text-blue-700 font-manrope font-normal hover:underline block">
                      <MapPin className="w-4 h-4 inline mr-1" />{city}
                    </a>
                    <a href="/locations/irvine" className="text-[#526bb0] hover:text-blue-700 font-manrope font-normal hover:underline block">
                      <MapPin className="w-4 h-4 inline mr-1" />Irvine
                    </a>
                    <a href="/locations/kilmarnock" className="text-[#526bb0] hover:text-blue-700 font-manrope font-normal hover:underline block">
                      <MapPin className="w-4 h-4 inline mr-1" />Kilmarnock
                    </a>
                    <a href="/locations/ayr" className="text-[#526bb0] hover:text-blue-700 font-manrope font-normal hover:underline block">
                      <MapPin className="w-4 h-4 inline mr-1" />Ayr
                    </a>
                    <a href="/locations/troon" className="text-[#526bb0] hover:text-blue-700 font-manrope font-normal hover:underline block">
                      <MapPin className="w-4 h-4 inline mr-1" />Troon
                    </a>
                    <a href="/locations/prestwick" className="text-[#526bb0] hover:text-blue-700 font-manrope font-normal hover:underline block">
                      <MapPin className="w-4 h-4 inline mr-1" />Prestwick
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-6">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <a key={index} href={service.link} className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 font-manrope text-sm">Learn more about our {service.name.toLowerCase()} services in {city}.</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-4">Ready to Clean Your PVC in {city}?</h2>
            <p className="text-xl text-gray-600 font-manrope">Contact us today for a free quote on PVC white cleaning services in {city}.</p>
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

export default PVCWhiteCleaningCity;


