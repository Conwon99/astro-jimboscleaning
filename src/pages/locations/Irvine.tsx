import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Phone, Clock, Droplet } from "lucide-react";
import { motion } from "framer-motion";

const Irvine = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { name: "Roof Steam Cleaning", link: "/services/roof-steam-cleaning" },
    { name: "Render Softwashing", link: "/services/render-softwashing" },
    { name: "Driveway Cleaning", link: "/services/driveway-cleaning" },
    { name: "Gutter Cleaning", link: "/services/gutter-cleaning" },
    { name: "PVC White Cleaning", link: "/services/pvc-white-cleaning" },
    { name: "Window Cleaning", link: "/services/window-cleaning" }
  ];

  const nearbyAreas = [
    { name: "Kilmarnock", link: "/locations/kilmarnock" },
    { name: "Ayr", link: "/locations/ayr" },
    { name: "Troon", link: "/locations/troon" },
    { name: "Prestwick", link: "/locations/prestwick" }
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
              Roof Cleaning Services in Irvine
            </h1>
            <p className="text-xl text-gray-600 font-manrope mb-8 leading-relaxed">
              Professional roof cleaning services in Irvine, Ayrshire. Local roof cleaning Irvine, driveway cleaning Irvine, window cleaning Irvine, and cleaning services in Irvine. 
              From roof steam cleaning to driveway cleaning, we provide comprehensive cleaning solutions for homes and businesses across Irvine, outer Glasgow, and surrounding areas. 
              As your local Irvine-based cleaning specialists, we understand the unique challenges of maintaining properties in this historic town.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#526bb0] hover:bg-blue-700 text-white font-manrope font-normal px-8 py-3"
              >
                Get Free Quote
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="font-manrope font-normal px-8 py-3"
              >
                Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-6">
                About Irvine, Ayrshire
              </h2>
              <div className="space-y-6 text-gray-600 font-manrope leading-relaxed">
                <p>
                  Irvine is a historic town located in North Ayrshire, Scotland, with a rich heritage dating back to the 12th century. 
                  As the administrative center of North Ayrshire, Irvine combines traditional Scottish architecture with modern 
                  developments, creating a diverse range of properties that require specialized cleaning approaches. The town's 
                  location on the River Irvine and proximity to the coast presents unique maintenance challenges for property owners.
                </p>
                <p>
                  The town's industrial heritage, including the former Irvine Royal Academy and the historic Irvine Harbour, 
                  has left a legacy of traditional stone buildings and Victorian architecture. These historic properties, 
                  particularly in areas like the Old Town and Fullarton, require careful cleaning methods that preserve 
                  their character while maintaining their appearance. Modern developments in areas like Bourtreehill, 
                  Girdle Toll, and Dreghorn present different cleaning challenges with contemporary materials and designs.
                </p>
                <p>
                  Irvine's position as a commuter town for Glasgow, combined with its growing retail and business sectors, 
                  means many properties experience high foot traffic and environmental pollution. The town's proximity to 
                  major transport links, including the A78 and A71 roads, contributes to increased dirt and grime buildup 
                  on exterior surfaces, making regular professional cleaning essential for maintaining property values.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-manrope font-normal text-gray-900 mb-6">
                Key Areas We Serve in Irvine
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Town Center</h4>
                    <p className="text-sm text-gray-600 font-manrope">Historic core with traditional buildings</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Bourtreehill</h4>
                    <p className="text-sm text-gray-600 font-manrope">Modern residential developments</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Girdle Toll</h4>
                    <p className="text-sm text-gray-600 font-manrope">Mixed residential and commercial area</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Dreghorn</h4>
                    <p className="text-sm text-gray-600 font-manrope">Suburban residential area</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Fullarton</h4>
                    <p className="text-sm text-gray-600 font-manrope">Historic residential district</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Irvine Harbour</h4>
                    <p className="text-sm text-gray-600 font-manrope">Coastal properties and heritage buildings</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Outer Glasgow</h4>
                    <p className="text-sm text-gray-600 font-manrope">Extended service area coverage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-6">
                Why Choose Us in Irvine?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Local Irvine Expertise</h3>
                    <p className="text-gray-600 font-manrope">
                      Based right here in Irvine at 2 West Bowhouse Way, we understand the local climate, 
                      building materials, and cleaning challenges specific to our hometown. Our team knows 
                      Irvine's diverse neighborhoods, from the historic town center to modern developments 
                      like Bourtreehill and Dreghorn.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Immediate Response</h3>
                    <p className="text-gray-600 font-manrope">
                      As a local Irvine business, we provide the fastest response times in the area. 
                      Whether you're in the town center, Girdle Toll, or Fullarton, we can be at your 
                      property quickly with flexible scheduling that works around your busy lifestyle.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Trusted Local Service</h3>
                    <p className="text-gray-600 font-manrope">
                      We've built our reputation serving Irvine residents and businesses with consistent, 
                      high-quality results. From historic properties near Irvine Harbour to modern homes 
                      in Bourtreehill, our local knowledge ensures the best cleaning approach for your property.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Heritage Property Specialists</h3>
                    <p className="text-gray-600 font-manrope">
                      Irvine's rich history means many properties require specialized care. We understand 
                      the delicate nature of traditional stone buildings, Victorian architecture, and 
                      heritage properties, using appropriate cleaning methods that preserve their character.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-manrope font-normal text-gray-900">
                    Our Irvine Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-[#526bb0]" />
                      <div>
                        <p className="font-manrope font-normal text-gray-900">Address</p>
                        <p className="text-gray-600 font-manrope">2 West Bowhouse Way, Irvine</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-[#526bb0]" />
                      <div>
                        <p className="font-manrope font-normal text-gray-900">Phone</p>
                        <p className="text-gray-600 font-manrope">07919 270128</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-[#526bb0]" />
                      <div>
                        <p className="font-manrope font-normal text-gray-900">Hours</p>
                        <p className="text-gray-600 font-manrope">Mon-Fri: 8:00 AM - 6:00 PM</p>
                        <p className="text-gray-600 font-manrope">Sat: 9:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Local Landmarks & Attractions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            Irvine's Local Landmarks & Our Service Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-manrope font-normal text-gray-900 mb-4">
                Historic Landmarks We Serve
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Irvine Harbour</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Properties near this historic harbour require specialized cleaning due to salt air exposure. 
                    We provide gentle cleaning methods suitable for the traditional buildings in this heritage area.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Irvine Royal Academy</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    The historic academy area features traditional stone buildings that require careful maintenance. 
                    Our heritage cleaning expertise ensures these properties maintain their historic character.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Old Town Conservation Area</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Properties in Irvine's conservation area need specialized care to preserve their historic 
                    appearance. We use appropriate cleaning methods that respect the area's heritage status.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-manrope font-normal text-gray-900 mb-4">
                Modern Development Areas
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Bourtreehill</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Modern residential developments with contemporary materials. We provide comprehensive 
                    cleaning services for these newer properties, ensuring they maintain their pristine appearance.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Girdle Toll Business District</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Commercial properties in this busy area benefit from our professional cleaning services, 
                    helping maintain Irvine's attractive business environment for residents and visitors.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Dreghorn & Surrounding Areas</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Suburban residential areas with mixed property types. Our flexible approach ensures 
                    we can handle everything from traditional homes to modern developments in these areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            Services in Irvine
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Droplet className="w-6 h-6 text-[#526bb0]" />
                  <h3 className="text-xl font-manrope font-normal text-gray-900">
                    {service.name}
                  </h3>
                </div>
                <p className="text-gray-600 font-manrope text-sm">
                  Professional {service.name.toLowerCase()} services in Irvine and surrounding areas. 
                  {service.name === "Roof Steam Cleaning" && " Essential for Irvine's mix of traditional and modern properties."}
                  {service.name === "Render Softwashing" && " Perfect for both historic and contemporary rendered buildings in Irvine."}
                  {service.name === "Driveway Cleaning" && " Ideal for properties in busy areas like Girdle Toll and the town center."}
                  {service.name === "Gutter Cleaning" && " Crucial maintenance for Irvine's variable weather conditions."}
                  {service.name === "PVC White Cleaning" && " Restores the bright appearance of windows and doors in all Irvine areas."}
                  {service.name === "Window Cleaning" && " Essential for both heritage properties and modern developments."}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            We Also Serve Nearby Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {nearbyAreas.map((area, index) => (
              <a
                key={index}
                href={area.link}
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-center"
              >
                <MapPin className="w-5 h-5 text-[#526bb0] mx-auto mb-2" />
                <p className="font-manrope font-normal text-gray-900">{area.name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Climate & Cleaning Challenges */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            Irvine's Climate & Cleaning Challenges
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-manrope font-normal text-gray-900 mb-4">
                Local Weather Impact
              </h3>
              <div className="space-y-4 text-gray-600 font-manrope leading-relaxed">
                <p>
                  Irvine's location in North Ayrshire creates unique cleaning challenges. The town experiences 
                  moderate coastal influences from the Firth of Clyde, with higher humidity levels and frequent 
                  sea mists that can accelerate the growth of algae and moss on exterior surfaces. The River Irvine 
                  also contributes to local moisture levels, particularly affecting properties in the town center 
                  and harbour area.
                </p>
                <p>
                  The town's position as a commuter hub means increased traffic pollution from the A78 and A71 roads, 
                  leading to faster buildup of dirt and grime on properties near these major routes. Areas like 
                  Girdle Toll and the town center experience higher levels of environmental pollution, requiring 
                  more frequent cleaning to maintain property appearance.
                </p>
                <p>
                  Irvine's mix of historic and modern properties presents different challenges. Traditional stone 
                  buildings in the Old Town and Fullarton areas are more susceptible to weathering and organic 
                  growth, while modern developments in Bourtreehill and Dreghorn may have different material 
                  requirements and cleaning needs.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-manrope font-normal text-gray-900 mb-4">
                Our Specialized Solutions
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Heritage Property Care</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Specialized cleaning methods for Irvine's historic buildings, preserving their character 
                    while maintaining their appearance and structural integrity.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Traffic Pollution Treatment</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Effective cleaning solutions for properties affected by road traffic pollution, 
                    particularly in busy areas like Girdle Toll and the town center.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Coastal Environment Care</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Appropriate cleaning methods for properties affected by coastal influences, 
                    including those near Irvine Harbour and the River Irvine.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Mixed Property Expertise</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Experience with both traditional and modern building materials, ensuring the right 
                    cleaning approach for every type of property in Irvine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-4">
              Ready to Get Started in Irvine?
            </h2>
            <p className="text-xl text-gray-600 font-manrope">
              Contact us today for a free quote on roof cleaning services in Irvine.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => window.location.href = '/#contact'}
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

export default Irvine;
