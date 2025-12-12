import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Droplet, Shield, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const InteriorExteriorWindowCleaning = () => {
  const handleGetQuote = () => {
    window.location.href = '/contact';
  };

  const relatedServices = [
    { name: "Window Cleaning", link: "/services/window-cleaning" },
    { name: "Glass and Mirror Cleaning", link: "/services/glass-mirror-cleaning" },
    { name: "PVC White Cleaning", link: "/services/pvc-white-cleaning" }
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
              Interior and Exterior Window Cleaning in Ayrshire
            </h1>
            <p className="text-xl text-gray-600 font-manrope mb-8 leading-relaxed">
              Complete interior and exterior window cleaning services in Ayrshire for homes and businesses. 
              Professional cleaning for both sides of your windows across Irvine, Ayr, Kilmarnock, Troon, Prestwick, and outer Glasgow. 
              Our comprehensive window cleaning ensures crystal-clear results inside and out.
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
              Professional Interior and Exterior Window Cleaning Services in Ayrshire
            </h2>
            <p className="text-lg text-gray-600 font-manrope leading-relaxed mb-6">
              Our comprehensive interior and exterior window cleaning service in Ayrshire ensures both sides of your windows are perfectly clean and streak-free. 
              Whether you need residential or commercial window cleaning, our experienced team provides complete cleaning services that enhance your property's 
              appearance and let in maximum natural light.
            </p>
            <p className="text-lg text-gray-600 font-manrope leading-relaxed">
              We provide complete window cleaning services across Ayrshire, cleaning both interior and exterior surfaces in a single visit. 
              Our services are available throughout Irvine, Ayr, Kilmarnock, Troon, Prestwick, and outer Glasgow, ensuring your windows always look their best.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-6">Why Choose Our Interior and Exterior Window Cleaning?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Complete Service</h3>
                    <p className="text-gray-600 font-manrope">
                      We clean both interior and exterior surfaces for comprehensive window cleaning results. Our complete service ensures 
                      your windows are perfectly clean on both sides, maximizing natural light and enhancing your property's appearance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Professional Results</h3>
                    <p className="text-gray-600 font-manrope">
                      Streak-free cleaning using professional techniques and equipment ensures perfect results every time. 
                      Our experienced team delivers consistent, high-quality window cleaning services.
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
                      We offer regular cleaning schedules to keep your windows looking their best year-round. 
                      Regular maintenance ensures your windows always make a great impression and maintain your property's value.
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
                  <p className="text-gray-600 font-manrope mb-4">We provide interior and exterior window cleaning across Ayrshire:</p>
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
            Our Interior and Exterior Window Cleaning Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600 font-manrope">
                We assess your windows to determine the best cleaning approach for both interior and exterior surfaces.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Complete Cleaning</h3>
              <p className="text-gray-600 font-manrope">
                Our team cleans both interior and exterior window surfaces using professional techniques to ensure streak-free results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Final Check</h3>
              <p className="text-gray-600 font-manrope">
                We perform a final quality check to ensure all windows are perfectly clean on both sides, meeting our high standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Interior and Exterior Window Cleaning
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                Do you clean both sides in the same visit?
              </h3>
              <p className="text-gray-600 font-manrope">
                Yes, we can clean both interior and exterior window surfaces during the same visit, providing comprehensive cleaning 
                that ensures your windows are perfectly clean on both sides.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                How long does interior and exterior window cleaning take?
              </h3>
              <p className="text-gray-600 font-manrope">
                The time required depends on the number and size of windows. Most residential properties can be completed in 1-3 hours, 
                while larger commercial properties may take longer. We'll provide an estimated timeframe when we quote.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                Can you clean hard-to-reach windows?
              </h3>
              <p className="text-gray-600 font-manrope">
                Yes, our team is experienced in cleaning windows at all heights and in hard-to-reach locations. We use appropriate equipment 
                and safety measures to ensure all windows are cleaned safely and thoroughly.
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
            <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-4">Ready to Clean Your Windows?</h2>
            <p className="text-xl text-gray-600 font-manrope">Contact us today for a free quote on interior and exterior window cleaning services.</p>
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

export default InteriorExteriorWindowCleaning;


