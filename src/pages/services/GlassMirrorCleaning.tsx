import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Droplet, Shield, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const GlassMirrorCleaning = () => {
  const handleGetQuote = () => {
    window.location.href = '/contact';
  };

  const relatedServices = [
    { name: "Window Cleaning", link: "/services/window-cleaning" },
    { name: "Interior and Exterior Window Cleaning", link: "/services/interior-exterior-window-cleaning" },
    { name: "Window Washing", link: "/services/window-washing" }
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
              Glass and Mirror Cleaning in Ayrshire
            </h1>
            <p className="text-xl text-gray-600 font-manrope mb-8 leading-relaxed">
              Professional glass and mirror cleaning services in Ayrshire for crystal-clear results. 
              Expert cleaning for windows, mirrors, and glass surfaces across Irvine, Ayr, Kilmarnock, Troon, Prestwick, and outer Glasgow. 
              Our specialist glass cleaning ensures streak-free, sparkling results every time.
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
              Professional Glass and Mirror Cleaning Services in Ayrshire
            </h2>
            <p className="text-lg text-gray-600 font-manrope leading-relaxed mb-6">
              Our professional glass and mirror cleaning service in Ayrshire delivers crystal-clear, streak-free results for all glass surfaces. 
              Whether you need window cleaning, mirror cleaning, or glass surface cleaning, our experienced team uses specialist techniques and equipment 
              to ensure perfect results every time.
            </p>
            <p className="text-lg text-gray-600 font-manrope leading-relaxed">
              We provide comprehensive glass and mirror cleaning services across Ayrshire for homes and businesses. Our services are available throughout 
              Irvine, Ayr, Kilmarnock, Troon, Prestwick, and outer Glasgow, ensuring your glass surfaces always look their best.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-6">Why Choose Our Glass and Mirror Cleaning?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Crystal-Clear Results</h3>
                    <p className="text-gray-600 font-manrope">
                      Professional cleaning techniques and specialist equipment ensure streak-free, sparkling glass and mirrors. 
                      We achieve perfect results that enhance your property's appearance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Safe Methods</h3>
                    <p className="text-gray-600 font-manrope">
                      We use safe, effective cleaning methods and solutions that won't damage your glass or mirror surfaces. 
                      Our techniques protect your property while achieving excellent results.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Regular Maintenance</h3>
                    <p className="text-gray-600 font-manrope">
                      We offer regular glass and mirror cleaning schedules to keep your surfaces looking their best year-round, 
                      ensuring your property always makes a great impression.
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
                  <p className="text-gray-600 font-manrope mb-4">We provide glass and mirror cleaning across Ayrshire:</p>
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
            Our Glass and Mirror Cleaning Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600 font-manrope">
                We assess your glass and mirror surfaces to determine the best cleaning approach and identify any special requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Specialist Cleaning</h3>
              <p className="text-gray-600 font-manrope">
                Our team uses specialist techniques and equipment to clean your glass and mirrors, ensuring streak-free, crystal-clear results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Quality Check</h3>
              <p className="text-gray-600 font-manrope">
                We perform a final quality check to ensure all glass and mirror surfaces are perfectly clean and meet our high standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Glass and Mirror Cleaning
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                What types of glass surfaces do you clean?
              </h3>
              <p className="text-gray-600 font-manrope">
                We clean all types of glass surfaces including windows, mirrors, glass doors, conservatory glass, and commercial glass facades. 
                Our techniques are suitable for all glass types and sizes.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                Do you clean both sides of windows?
              </h3>
              <p className="text-gray-600 font-manrope">
                Yes, we can clean both interior and exterior glass surfaces. We offer comprehensive cleaning services to ensure all glass surfaces 
                are perfectly clean and streak-free.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                How often should glass and mirrors be professionally cleaned?
              </h3>
              <p className="text-gray-600 font-manrope">
                We recommend professional glass and mirror cleaning every 4-8 weeks for residential properties and more frequently for commercial properties. 
                Regular cleaning maintains appearance and prevents buildup.
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
            <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-4">Ready to Clean Your Glass and Mirrors?</h2>
            <p className="text-xl text-gray-600 font-manrope">Contact us today for a free quote on glass and mirror cleaning services.</p>
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

export default GlassMirrorCleaning;


