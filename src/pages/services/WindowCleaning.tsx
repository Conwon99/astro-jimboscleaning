import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Droplet, Shield, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const WindowCleaning = () => {
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
    { name: "PVC White Cleaning", link: "/services/pvc-white-cleaning" },
    { name: "Gutter Cleaning", link: "/services/gutter-cleaning" },
    { name: "Driveway Cleaning", link: "/services/driveway-cleaning" }
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
              Window Cleaning in Ayrshire
            </h1>
            <p className="text-xl text-gray-600 font-manrope mb-8 leading-relaxed">
              Professional window cleaning services in Ayrshire for streak-free, sparkling results every time. 
              Expert window cleaning for homes and businesses across Irvine, Ayr, Kilmarnock, Troon, Prestwick, and outer Glasgow. 
              Our professional window cleaning services ensure crystal-clear windows that enhance your property's appearance.
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
              Professional Window Cleaning Services in Ayrshire
            </h2>
            <p className="text-lg text-gray-600 font-manrope leading-relaxed mb-6">
              Our professional window cleaning service in Ayrshire delivers streak-free, sparkling results that enhance your property's appearance and value. 
              Whether you need residential window cleaning or commercial window cleaning services, our experienced team uses professional techniques and equipment 
              to ensure your windows are left crystal clear without streaks, water spots, or smudges.
            </p>
            <p className="text-lg text-gray-600 font-manrope leading-relaxed">
              We provide comprehensive window cleaning services across Ayrshire, including regular maintenance cleaning, one-off deep cleans, and scheduled 
              cleaning programs for homes and businesses. Our window cleaning services are available throughout Irvine, Ayr, Kilmarnock, Troon, Prestwick, 
              and outer Glasgow, ensuring your windows always look their best.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-6">
                Why Choose Our Window Cleaning?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Streak-free Results</h3>
                    <p className="text-gray-600 font-manrope">
                      Our professional window cleaning techniques and specialized equipment ensure your windows are left sparkling clean without streaks, 
                      water spots, or smudges. We use professional-grade cleaning solutions and tools to achieve perfect results every time.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Safe & Reliable Service</h3>
                    <p className="text-gray-600 font-manrope">
                      Our experienced and fully insured team uses safe methods and professional equipment to clean your windows without risk to your property. 
                      We're committed to providing reliable, professional window cleaning services you can trust.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Regular Maintenance Programs</h3>
                    <p className="text-gray-600 font-manrope">
                      We offer flexible regular window cleaning schedules to keep your windows looking their best year-round. 
                      Choose from monthly, bi-monthly, or quarterly cleaning programs tailored to your needs and budget.
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
                    We provide window cleaning services across Ayrshire and outer Glasgow:
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
            Our Window Cleaning Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600 font-manrope">
                We assess your windows to determine the best cleaning approach, identify any special requirements, and provide an accurate quote.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Professional Cleaning</h3>
              <p className="text-gray-600 font-manrope">
                Our team uses professional techniques and equipment to clean your windows thoroughly, ensuring streak-free, sparkling results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-manrope font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">Quality Check</h3>
              <p className="text-gray-600 font-manrope">
                We perform a final quality check to ensure every window meets our high standards, leaving you with perfectly clean windows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Window Cleaning
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                How often should I have my windows cleaned?
              </h3>
              <p className="text-gray-600 font-manrope">
                For residential properties, we recommend window cleaning every 4-8 weeks to maintain a clean appearance. 
                Commercial properties may need more frequent cleaning, typically every 2-4 weeks, depending on location and requirements.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                Do you clean both interior and exterior windows?
              </h3>
              <p className="text-gray-600 font-manrope">
                Yes, we offer both interior and exterior window cleaning services. We can clean both sides during the same visit 
                or provide separate services depending on your needs. Our comprehensive window cleaning ensures all surfaces are spotless.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                What areas do you cover for window cleaning in Ayrshire?
              </h3>
              <p className="text-gray-600 font-manrope">
                We provide window cleaning services throughout Ayrshire, including Irvine, Ayr, Kilmarnock, Troon, Prestwick, 
                and outer Glasgow. Contact us to confirm we cover your specific area.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                Do you offer regular window cleaning contracts?
              </h3>
              <p className="text-gray-600 font-manrope">
                Yes, we offer flexible regular window cleaning contracts with scheduled visits. Regular cleaning programs ensure 
                your windows always look their best and can be more cost-effective than one-off cleans.
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
              Ready to Clean Your Windows?
            </h2>
            <p className="text-xl text-gray-600 font-manrope">
              Contact us today for a free quote on window cleaning services.
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

export default WindowCleaning;
