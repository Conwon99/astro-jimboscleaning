import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FAQPage = () => {
  const handleGetQuote = () => {
    window.location.href = '/contact';
  };

  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          question: "How much does exterior cleaning cost in Ayrshire?",
          answer: "The cost of exterior cleaning varies depending on the size of your property, the type of service needed, and the extent of cleaning required. We provide free, no-obligation quotes for all our services. Contact us today to get a personalized quote for your property."
        },
        {
          question: "What areas do you cover in Ayrshire?",
          answer: "We provide exterior cleaning services throughout Ayrshire, including Irvine, Ayr, Kilmarnock, Troon, Prestwick, and outer Glasgow. Contact us to confirm we cover your specific area. We're happy to discuss service availability for your location."
        },
        {
          question: "Are you insured for exterior cleaning work?",
          answer: "Yes, we are fully insured and our team is trained to work safely at height and on various surfaces. We take all necessary safety precautions to protect your property and our team during all cleaning work. You can have peace of mind knowing we're fully covered."
        },
        {
          question: "How long does a typical exterior cleaning job take?",
          answer: "The time required depends on the size of your property and the services needed. Most residential properties can be completed in 1-4 hours. We'll provide an estimated timeframe when we provide your quote. Our team works efficiently to minimize disruption to your daily routine."
        }
      ]
    },
    {
      category: "Roof Cleaning",
      questions: [
        {
          question: "How often should I have my roof cleaned?",
          answer: "We recommend professional roof cleaning every 2-3 years, depending on your location and the amount of organic growth. Properties in areas with high rainfall and humidity may need more frequent cleaning to prevent moss and algae buildup. Regular cleaning helps maintain your roof's condition and appearance."
        },
        {
          question: "Is roof steam cleaning safe for all roof types?",
          answer: "Yes, our steam cleaning method is safe for most roof types including slate, tile, and concrete roofs. The gentle steam process effectively removes organic growth without the high pressure that can damage roof tiles. We assess your roof type before cleaning to ensure we use the most appropriate method."
        },
        {
          question: "Will roof cleaning prevent future moss growth?",
          answer: "While regular cleaning significantly reduces moss and algae growth, complete prevention depends on environmental factors. Our cleaning process removes existing growth and helps maintain a cleaner roof for longer periods between cleanings. Regular maintenance is key to keeping your roof in good condition."
        },
        {
          question: "How much does roof cleaning cost in Ayrshire?",
          answer: "Roof cleaning costs vary depending on the size of your roof, the extent of cleaning needed, and accessibility. Contact us for a free, no-obligation quote tailored to your specific property. We provide competitive pricing for roof cleaning services across Ayrshire."
        }
      ]
    },
    {
      category: "Window Cleaning",
      questions: [
        {
          question: "Do you clean both interior and exterior windows?",
          answer: "Yes, we offer both interior and exterior window cleaning services. We can clean both sides during the same visit or provide separate services depending on your needs. Our comprehensive window cleaning ensures all surfaces are spotless and streak-free."
        },
        {
          question: "How often should windows be professionally cleaned?",
          answer: "For residential properties, we recommend window cleaning every 4-8 weeks to maintain a clean appearance. Commercial properties may need more frequent cleaning, typically every 2-4 weeks, depending on location and requirements. Regular cleaning maintains appearance and prevents buildup."
        },
        {
          question: "Do you offer regular window cleaning contracts?",
          answer: "Yes, we offer flexible regular window cleaning contracts with scheduled visits. Regular cleaning programs ensure your windows always look their best and can be more cost-effective than one-off cleans. We can tailor a maintenance schedule to suit your needs and budget."
        },
        {
          question: "Can you clean hard-to-reach windows?",
          answer: "Yes, our team is experienced in cleaning windows at all heights and in hard-to-reach locations. We use appropriate equipment and safety measures to ensure all windows are cleaned safely and thoroughly, including upper floors and conservatory windows."
        }
      ]
    },
    {
      category: "Gutter Cleaning",
      questions: [
        {
          question: "How often should gutters be cleaned?",
          answer: "We recommend gutter cleaning at least twice a year, typically in spring and autumn. Properties with many trees nearby may need more frequent cleaning, while others may only need annual cleaning. Regular maintenance prevents blockages and protects your property."
        },
        {
          question: "What happens if gutters aren't cleaned regularly?",
          answer: "Blocked gutters can cause water overflow, leading to roof damage, wall staining, foundation problems, and even interior water damage. Regular gutter cleaning prevents these costly issues and protects your property investment."
        },
        {
          question: "Do you clean downpipes as well?",
          answer: "Yes, our gutter cleaning service includes clearing downpipes and ensuring proper water flow through your entire drainage system. We ensure all blockages are removed from gutters, downpipes, and drainage outlets."
        }
      ]
    },
    {
      category: "Driveway & Pressure Washing",
      questions: [
        {
          question: "Can you remove oil stains from driveways?",
          answer: "Yes, we use specialized cleaning solutions and techniques to effectively remove oil stains from driveways. While some very old or deeply embedded stains may not be completely removed, we can significantly improve their appearance. Our professional cleaning methods are highly effective at removing most stains."
        },
        {
          question: "Is pressure washing safe for all driveway types?",
          answer: "We adjust our pressure washing techniques based on your driveway material. While suitable for hard surfaces, we use lower pressure or alternative methods for delicate surfaces like render or certain types of paving. We ensure safe, effective cleaning without damage."
        },
        {
          question: "What's the difference between softwashing and pressure washing?",
          answer: "Softwashing uses low-pressure cleaning with specialized solutions, making it safe for delicate surfaces like render. Pressure washing uses high-pressure water which can damage render and cause water ingress. We use the appropriate method based on the surface type to ensure safe, effective cleaning."
        }
      ]
    },
    {
      category: "Service & Booking",
      questions: [
        {
          question: "Do you offer regular maintenance cleaning contracts?",
          answer: "Yes, we offer flexible regular cleaning contracts with scheduled visits. Regular maintenance programs ensure your property always looks its best and can be more cost-effective than one-off cleans. We can tailor a maintenance schedule to suit your needs and budget."
        },
        {
          question: "How do I book a service?",
          answer: "You can book a service by contacting us via phone at 07919 270128, filling out our contact form on the website, or visiting our contact page. We'll arrange a convenient time to provide a free quote and discuss your cleaning needs."
        },
        {
          question: "Do you work on weekends?",
          answer: "Our standard hours are Monday to Friday 8:00 AM - 6:00 PM and Saturday 9:00 AM - 4:00 PM. We may be able to accommodate weekend work depending on availability. Contact us to discuss your preferred scheduling options."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept various payment methods including cash, bank transfer, and card payments. Payment terms will be discussed when we provide your quote. We aim to make the payment process as convenient as possible for our customers."
        }
      ]
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 font-manrope mb-8 leading-relaxed max-w-3xl">
              Find answers to common questions about our exterior cleaning services in Ayrshire. 
              If you can't find what you're looking for, please don't hesitate to contact us.
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

      {/* FAQ Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-manrope font-normal text-gray-900 mb-6">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${categoryIndex}-${index}`} 
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left font-manrope font-normal text-gray-900 hover:text-[#526bb0] py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 font-manrope leading-relaxed pt-2 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-manrope font-normal text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 font-manrope mb-8 max-w-2xl mx-auto">
              If you can't find the answer you're looking for, please get in touch. 
              We're here to help and happy to answer any questions about our services.
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;

