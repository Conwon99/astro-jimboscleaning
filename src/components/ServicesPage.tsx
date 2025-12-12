import { ArrowRight, Droplet, RefreshCw, Shield, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Google Analytics type declaration
declare global {
  function gtag(...args: any[]): void;
}

const ServicesPage = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetQuote = () => {
    window.location.href = '/contact';
  };

  const services = [
    {
      icon: <Droplet className="w-8 h-8 text-[#526bb0]" />,
      title: "Roof Steam Cleaning",
      description: "Safe and effective steam cleaning to remove moss, algae, and dirt from your roof tiles. Professional roof moss removal services across Ayrshire.",
      link: "/services/roof-steam-cleaning",
      features: ["Safe steam cleaning", "Moss & algae removal", "Environmentally friendly", "Property protection"]
    },
    {
      icon: <Droplet className="w-8 h-8 text-[#526bb0]" />,
      title: "Render Softwashing",
      description: "Gentle softwashing for render surfaces, removing stains and organic growth without damage. Eco-friendly render cleaning services.",
      link: "/services/render-softwashing",
      features: ["Low-pressure cleaning", "Safe for render", "Stain removal", "Long-lasting results"]
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-[#526bb0]" />,
      title: "Driveway Cleaning",
      description: "Professional driveway cleaning to restore the look of your property's entrance. Removes oil stains, moss, and dirt buildup.",
      link: "/services/driveway-cleaning",
      features: ["Oil stain removal", "Pressure washing", "All surface types", "Complete restoration"]
    },
    {
      icon: <Droplet className="w-8 h-8 text-[#526bb0]" />,
      title: "Gutter Cleaning",
      description: "Thorough gutter cleaning to keep your drainage systems clear and functional. Prevents water damage and blockages.",
      link: "/services/gutter-cleaning",
      features: ["Debris removal", "Downpipe clearing", "Property protection", "Regular maintenance"]
    },
    {
      icon: <Droplet className="w-8 h-8 text-[#526bb0]" />,
      title: "PVC White Cleaning",
      description: "Restore the shine to your PVC fascias, soffits, and gutters with our specialist cleaning. Brings back the original white finish.",
      link: "/services/pvc-white-cleaning",
      features: ["Specialist PVC cleaning", "Fascia & soffit cleaning", "Surface safe", "Bright white finish"]
    },
    {
      icon: <Droplet className="w-8 h-8 text-[#526bb0]" />,
      title: "Window Cleaning",
      description: "Streak-free window cleaning for sparkling results every time. Professional window cleaning for homes and businesses.",
      link: "/services/window-cleaning",
      features: ["Streak-free results", "Interior & exterior", "Regular maintenance", "Professional equipment"]
    },
    {
      icon: <Droplet className="w-8 h-8 text-[#526bb0]" />,
      title: "Glass and Mirror Cleaning",
      description: "Professional glass and mirror cleaning services for crystal-clear results. Expert cleaning for all glass surfaces.",
      link: "/services/glass-mirror-cleaning",
      features: ["Crystal-clear results", "All glass types", "Safe methods", "Professional techniques"]
    },
    {
      icon: <Droplet className="w-8 h-8 text-[#526bb0]" />,
      title: "Interior and Exterior Window Cleaning",
      description: "Complete interior and exterior window cleaning services. Professional cleaning for both sides of your windows.",
      link: "/services/interior-exterior-window-cleaning",
      features: ["Complete service", "Both sides cleaned", "Professional results", "Regular schedules"]
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-[#526bb0]" />,
      title: "Power/Pressure Washing",
      description: "Professional power washing and pressure washing services for deep cleaning of exterior surfaces. Effective cleaning for driveways, patios, and more.",
      link: "/services/power-pressure-washing",
      features: ["Deep cleaning", "Professional equipment", "All surface types", "Effective results"]
    },
    {
      icon: <Droplet className="w-8 h-8 text-[#526bb0]" />,
      title: "Rooftop/Skylight Cleaning",
      description: "Expert rooftop and skylight cleaning services for safe, effective results. Professional cleaning for hard-to-reach areas.",
      link: "/services/rooftop-skylight-cleaning",
      features: ["Safe access", "Expert cleaning", "All skylight types", "Thorough results"]
    },
    {
      icon: <Droplet className="w-8 h-8 text-[#526bb0]" />,
      title: "Window Washing",
      description: "Professional window washing services for streak-free, sparkling results. Expert cleaning for all types of windows.",
      link: "/services/window-washing",
      features: ["Streak-free results", "Professional service", "All window types", "Regular maintenance"]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-6 h-6 text-[#526bb0]" />,
      title: "Fully Insured",
      description: "We're fully insured and committed to providing safe, professional services you can trust."
    },
    {
      icon: <Clock className="w-6 h-6 text-[#526bb0]" />,
      title: "Reliable Service",
      description: "Professional, punctual service with minimal disruption to your daily routine."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#526bb0]" />,
      title: "Quality Guaranteed",
      description: "We guarantee high-quality results that meet and exceed your expectations."
    }
  ];

  return (
    <div className="font-manrope">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-manrope font-normal text-gray-900 mb-6">
              Our Exterior Cleaning Services
            </h1>
            <p className="text-xl text-gray-600 font-manrope mb-8 leading-relaxed max-w-3xl">
              Professional exterior cleaning services across Ayrshire and outer Glasgow. From roof steam cleaning to window cleaning, 
              we provide comprehensive solutions to keep your property looking its best. Expert services for homes and businesses 
              throughout Irvine, Ayr, Kilmarnock, Troon, Prestwick, and surrounding areas.
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
                onClick={() => window.location.href = '/contact'}
                className="font-manrope font-normal px-8 py-3"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="bg-white hover:shadow-lg transition-shadow duration-300 h-full border border-gray-200">
                  <CardHeader>
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-manrope text-gray-900 mb-3 font-normal">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 font-manrope mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600 font-manrope">
                          <CheckCircle className="w-4 h-4 text-[#526bb0] mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={service.link}
                      className="flex items-center text-[#526bb0] hover:text-blue-700 font-manrope font-normal transition-colors group"
                      onClick={(e) => {
                        if (typeof gtag !== 'undefined') {
                          gtag('event', 'click', {
                            event_category: 'Services',
                            event_label: `${service.title} Link`,
                            value: 1
                          });
                        }
                      }}
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-manrope font-normal text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-600 font-manrope max-w-2xl mx-auto">
              We're committed to providing professional, reliable exterior cleaning services that exceed your expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#526bb0] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-manrope">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-manrope font-normal text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 font-manrope mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation quote on any of our exterior cleaning services. 
            We're here to help keep your property looking its best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleGetQuote}
              className="bg-[#526bb0] hover:bg-blue-700 text-white font-manrope font-normal px-8 py-3"
            >
              Get Free Quote
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/contact'}
              className="font-manrope font-normal px-8 py-3"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

