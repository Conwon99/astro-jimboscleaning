import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Droplet, Sparkles, Wrench } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      icon: <Sparkles className="w-8 h-8 text-gray-600" />,
      title: "Cleaners",
      description: "Professional cleaning services including interior and exterior window cleaning, driveway cleaning, and window cleaning.",
      link: "/categories/cleaners/ayr"
    },
    {
      icon: <Droplet className="w-8 h-8 text-gray-600" />,
      title: "Gutter Cleaning Service",
      description: "Expert gutter cleaning services including glass cleaning, gutter cleaning, window cleaning, power washing, and rooftop cleaning.",
      link: "/categories/gutter-cleaning-service/ayr"
    },
    {
      icon: <Wrench className="w-8 h-8 text-gray-600" />,
      title: "Window Cleaning Service",
      description: "Professional window cleaning services including glass cleaning, gutter cleaning, window cleaning, power washing, and rooftop cleaning.",
      link: "/categories/window-cleaning-service/ayr"
    }
  ];

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.7 }}
            className="text-4xl md:text-5xl font-manrope text-gray-900 mb-4 font-normal"
          >
            Our Service Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.7 }}
            className="text-lg text-gray-600 font-manrope"
          >
            Explore our comprehensive cleaning service categories across Ayrshire
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="bg-gray-50 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-manrope text-gray-900 mb-3 font-normal">
                  <a 
                    href={category.link}
                    className="hover:text-[#526bb0] transition-colors"
                  >
                    {category.title}
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-manrope mb-6 leading-relaxed">
                  {category.description}
                </p>
                <a 
                  href={category.link}
                  className="inline-flex items-center text-[#526bb0] hover:text-blue-700 font-manrope font-normal transition-colors"
                >
                  View {category.title}
                  <span className="ml-2">→</span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;


