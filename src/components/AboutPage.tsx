import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const handleGetQuote = () => {
    window.location.href = '/contact';
  };

  const values = [
    {
      icon: <Shield className="w-6 h-6 text-[#526bb0]" />,
      title: "Reliable & Trusted",
      description: "Years of experience serving Ayrshire with a great reputation for quality work and customer service."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#526bb0]" />,
      title: "Quality Work",
      description: "We take pride in delivering excellent results that exceed expectations, using professional techniques and equipment."
    },
    {
      icon: <Clock className="w-6 h-6 text-[#526bb0]" />,
      title: "Professional Service",
      description: "Punctual, reliable service with minimal disruption. We respect your property and your time."
    }
  ];

  const services = [
    "Roof cleaning",
    "Softwashing",
    "Driveway cleaning",
    "Gutter cleaning",
    "Exterior whites (PVC cleaning)",
    "Window cleaning"
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
              About Jimbo's Exterior Cleaning
            </h1>
            <p className="text-xl text-gray-600 font-manrope mb-8 leading-relaxed max-w-3xl">
              Hi everyone 👋 I'm Jim Catterson, and I've had an exterior cleaning business for years. 
              I do roof cleaning, soft washing, driveways, gutters and exterior whites. Contact me if you need 
              a reliable company that's been in business for a long time, with a great reputation to get your exterior cleaning done.
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

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-manrope font-normal text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 font-manrope leading-relaxed">
                <p>
                  Jimbo's Exterior Cleaning has been serving homes and businesses across Ayrshire for years, 
                  building a reputation for reliable, professional exterior cleaning services. Based in Irvine, 
                  we're proud to be a trusted local business with a long-standing commitment to quality work and customer satisfaction.
                </p>
                <p>
                  Our business was founded on the principle of providing excellent exterior cleaning services that 
                  help property owners maintain and enhance their properties. Over the years, we've expanded our 
                  services to cover all aspects of exterior cleaning, from roof steam cleaning to window cleaning, 
                  always maintaining our high standards of quality and professionalism.
                </p>
                <p>
                  We understand that your property is important to you, and we treat it with the same care and 
                  respect we would our own. Our experienced team uses professional techniques and equipment to 
                  ensure safe, effective cleaning that protects your property while achieving excellent results.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="bg-gray-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-manrope font-normal text-gray-900 mb-6">
                    What We Do
                  </h3>
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-center text-gray-700 font-manrope">
                        <CheckCircle className="w-5 h-5 text-[#526bb0] mr-3 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-manrope font-normal text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 font-manrope max-w-2xl mx-auto">
              We're committed to providing reliable, professional exterior cleaning services with a great reputation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="bg-white h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#526bb0] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 font-manrope">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-manrope font-normal text-gray-900 mb-6">
              Service Areas
            </h2>
            <p className="text-lg text-gray-600 font-manrope mb-8 max-w-2xl mx-auto">
              We provide exterior cleaning services across Ayrshire and outer Glasgow, 
              including the following areas:
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { name: 'Irvine', link: '/locations/irvine' },
                { name: 'Ayr', link: '/locations/ayr' },
                { name: 'Kilmarnock', link: '/locations/kilmarnock' },
                { name: 'Troon', link: '/locations/troon' },
                { name: 'Prestwick', link: '/locations/prestwick' },
                { name: 'Outer Glasgow', link: '#' }
              ].map((location, index) => (
                <a
                  key={index}
                  href={location.link}
                  className={`flex items-center justify-center p-4 bg-gray-50 hover:bg-[#526bb0] hover:text-white rounded-lg transition-colors font-manrope ${location.link === '#' ? 'cursor-default' : ''}`}
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  {location.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-manrope font-normal text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 font-manrope mb-8 max-w-2xl mx-auto">
              Ready to get your exterior cleaning done? Contact us today for a free, no-obligation quote. 
              We're here to help keep your property looking its best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-600 font-manrope">
              <a href="tel:+447919270128" className="flex items-center hover:text-[#526bb0] transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                07919 270128
              </a>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                2 West Bowhouse Way, Irvine, United Kingdom
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

