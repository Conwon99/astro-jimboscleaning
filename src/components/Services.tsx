
import { ArrowRight, Home, Wrench, Eye, Droplet, RefreshCw, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

// Google Analytics type declaration
declare global {
  function gtag(...args: any[]): void;
}

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Droplet className="w-8 h-8 text-gray-600" />,
      title: "Roof Steam Cleaning",
      description: "Safe roof steam cleaning and Ayrshire roof cleaning services. Professional roof steam cleaning Ayrshire with moss removal from roof and algae removal from roof tiles. Roof cleaning and moss treatment for lasting results.",
      link: "Get a free quote",
      serviceLink: "/services/roof-steam-cleaning"
    },
    {
      icon: <Droplet className="w-8 h-8 text-gray-600" />,
      title: "Render Softwashing",
      description: "Render softwashing specialists providing render cleaning Ayrshire and softwash render cleaning Ayr. Expert stain removal from render surfaces without damage.",
      link: "Get a free quote",
      serviceLink: "/services/render-softwashing"
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-gray-600" />,
      title: "Driveway Cleaning",
      description: "Driveway cleaning Irvine, driveway pressure washing Ayr, and driveway restoration service. Professional patio and driveway cleaning with pressure washing services.",
      link: "Get a free quote",
      serviceLink: "/services/driveway-cleaning"
    },
    {
      icon: <Droplet className="w-8 h-8 text-gray-600" />,
      title: "Gutter Cleaning",
      description: "Gutter cleaning Ayrshire and gutter maintenance Kilmarnock. Expert gutter clearing service and gutter inspection and cleaning by Ayrshire gutter cleaners.",
      link: "Get a free quote",
      serviceLink: "/services/gutter-cleaning"
    },
    {
      icon: <Droplet className="w-8 h-8 text-gray-600" />,
      title: "PVC White Cleaning",
      description: "PVC white cleaning specialists offering PVC fascias cleaning Troon, PVC soffit cleaning Ayr, and PVC gutters cleaning. Professional fascia and soffit cleaning and PVC restoration service.",
      link: "Get a free quote",
      serviceLink: "/services/pvc-white-cleaning"
    },
    {
      icon: <Droplet className="w-8 h-8 text-gray-600" />,
      title: "Window Cleaning",
      description: "Window cleaning Irvine, residential window cleaning Ayr, and Troon window cleaners. Professional window washing for sparkling results every time.",
      link: "Get a free quote",
      serviceLink: "/services/window-cleaning"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.7 }}
            className="text-4xl md:text-5xl font-manrope text-gray-900 mb-4 font-normal"
          >
            Professional and quality<br />
            roof cleaning services.
          </motion.h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a 
              key={index}
              href={service.serviceLink}
              className="block"
              onClick={() => {
                // Track service card click
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'click', {
                    event_category: 'Services',
                    event_label: `${service.title} Card Click`,
                    value: 1
                  });
                }
              }}
            >
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300 h-full cursor-pointer">
                <CardHeader>
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-manrope text-gray-900 mb-3 font-normal hover:text-[#526bb0] transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-manrope mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      // Track service quote button click
                      if (typeof gtag !== 'undefined') {
                        gtag('event', 'click', {
                          event_category: 'Services',
                          event_label: `${service.title} Quote Button`,
                          value: 1
                        });
                      }
                      scrollToSection('contact');
                    }}
                    className="flex items-center text-gray-700 hover:text-gray-900 font-manrope font-normal transition-colors group"
                  >
                    {service.link}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
