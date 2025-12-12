import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Droplet, Shield, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface RenderSoftwashingCityProps {
  city: string;
}

const RenderSoftwashingCity = ({ city }: RenderSoftwashingCityProps) => {
  const handleGetQuote = () => {
    window.location.href = '/contact';
  };

  const relatedServices = [
    { name: "Roof Steam Cleaning", link: `/services/roof-steam-cleaning/${city.toLowerCase()}` },
    { name: "Driveway Cleaning", link: `/services/driveway-cleaning/${city.toLowerCase()}` }
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
              Looking For A Render Softwashing In {city}?
            </h1>
            <p className="text-xl text-gray-600 font-manrope mb-8 leading-relaxed">
              Professional render softwashing services in {city}, Ayrshire. Gentle softwashing for render surfaces, removing stains and organic growth without damage.
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
              <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-6">Why Choose Our Render Softwashing in {city}?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Gentle & Effective</h3>
                    <p className="text-gray-600 font-manrope">Softwashing removes stains and organic growth without damaging your render surface.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Safe Methods</h3>
                    <p className="text-gray-600 font-manrope">We use safe, effective softwashing methods that preserve your render's integrity.</p>
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
                  <p className="text-gray-600 font-manrope mb-4">We provide render softwashing in {city} and across Ayrshire:</p>
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
            <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-4">Ready to Softwash Your Render in {city}?</h2>
            <p className="text-xl text-gray-600 font-manrope">Contact us today for a free quote on render softwashing services in {city}.</p>
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

export default RenderSoftwashingCity;


