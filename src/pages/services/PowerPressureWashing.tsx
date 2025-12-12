import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Droplet, Shield, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const PowerPressureWashing = () => {
  const handleGetQuote = () => {
    window.location.href = '/contact';
  };

  const relatedServices = [
    { name: "Driveway Cleaning", link: "/services/driveway-cleaning" },
    { name: "Gutter Cleaning", link: "/services/gutter-cleaning" },
    { name: "Rooftop/Skylight Cleaning", link: "/services/rooftop-skylight-cleaning" }
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
              Power/Pressure Washing in Ayrshire
            </h1>
            <p className="text-xl text-gray-600 font-manrope mb-8 leading-relaxed">
              Professional power washing and pressure washing services in Ayrshire for deep cleaning of exterior surfaces. 
              Our commercial and residential pressure washing services effectively clean driveways, patios, paths, and more. 
              Expert pressure washing across Irvine, Ayr, Kilmarnock, Troon, Prestwick, and outer Glasgow.
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
              Professional Power/Pressure Washing Services in Ayrshire
            </h2>
            <p className="text-lg text-gray-600 font-manrope leading-relaxed mb-6">
              Our professional power washing and pressure washing service in Ayrshire provides deep cleaning for exterior surfaces, removing years of dirt, 
              grime, algae, and stains. Whether you need residential pressure washing or commercial pressure washing services, our experienced team uses 
              professional-grade equipment to restore your surfaces to their original clean appearance.
            </p>
            <p className="text-lg text-gray-600 font-manrope leading-relaxed">
              We provide comprehensive pressure washing services across Ayrshire for driveways, patios, paths, walls, and other exterior surfaces. 
              Our services are available throughout Irvine, Ayr, Kilmarnock, Troon, Prestwick, and outer Glasgow, ensuring your property always looks its best.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-6">Why Choose Our Power/Pressure Washing?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Deep Cleaning Power</h3>
                    <p className="text-gray-600 font-manrope">
                      Professional power washing effectively removes dirt, grime, algae, moss, and stubborn stains from exterior surfaces that regular cleaning cannot remove.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Professional Equipment</h3>
                    <p className="text-gray-600 font-manrope">
                      We use professional-grade pressure washing equipment with adjustable pressure settings to ensure safe, effective results for all surface types.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Efficient Service</h3>
                    <p className="text-gray-600 font-manrope">
                      Our experienced team works efficiently to complete pressure washing jobs quickly while maintaining the highest quality standards.
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
                  <p className="text-gray-600 font-manrope mb-4">We provide power/pressure washing across Ayrshire:</p>
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
            Our Pressure Washing Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Surface Assessment</h3>
              <p className="text-gray-600 font-manrope">
                We assess your surfaces to determine the appropriate pressure level and cleaning approach for optimal results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Professional Cleaning</h3>
              <p className="text-gray-600 font-manrope">
                Our team uses professional pressure washing equipment to deep clean your surfaces, removing all dirt, grime, and stains.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Final Inspection</h3>
              <p className="text-gray-600 font-manrope">
                We perform a final inspection to ensure all surfaces are thoroughly cleaned and meet our high quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Pressure Washing
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                What surfaces can be pressure washed?
              </h3>
              <p className="text-gray-600 font-manrope">
                Pressure washing is suitable for hard surfaces including driveways, patios, paths, walls, and concrete. 
                We adjust pressure levels based on surface type to ensure safe, effective cleaning without damage.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                Is pressure washing safe for all surfaces?
              </h3>
              <p className="text-gray-600 font-manrope">
                We adjust our pressure washing techniques based on surface type. While suitable for hard surfaces, we use lower pressure 
                or alternative methods for delicate surfaces like render or certain types of paving.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                How often should I have pressure washing done?
              </h3>
              <p className="text-gray-600 font-manrope">
                We recommend pressure washing every 1-2 years for most surfaces. High-traffic areas or properties with heavy organic growth 
                may need more frequent cleaning to maintain appearance.
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
            <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-4">Ready for Power Washing?</h2>
            <p className="text-xl text-gray-600 font-manrope">Contact us today for a free quote on power/pressure washing services.</p>
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

export default PowerPressureWashing;


