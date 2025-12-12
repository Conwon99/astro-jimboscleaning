import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "How much does exterior cleaning cost in Ayrshire?",
      answer: "The cost of exterior cleaning varies depending on the size of your property, the type of service needed, and the extent of cleaning required. We provide free, no-obligation quotes for all our services. Contact us today to get a personalized quote for your property."
    },
    {
      question: "How often should I have my roof cleaned?",
      answer: "We recommend professional roof cleaning every 2-3 years, depending on your location and the amount of organic growth. Properties in areas with high rainfall and humidity may need more frequent cleaning to prevent moss and algae buildup. Regular cleaning helps maintain your roof's condition and appearance."
    },
    {
      question: "Is roof steam cleaning safe for all roof types?",
      answer: "Yes, our steam cleaning method is safe for most roof types including slate, tile, and concrete roofs. The gentle steam process effectively removes organic growth without the high pressure that can damage roof tiles. We assess your roof type before cleaning to ensure we use the most appropriate method."
    },
    {
      question: "Do you clean both interior and exterior windows?",
      answer: "Yes, we offer both interior and exterior window cleaning services. We can clean both sides during the same visit or provide separate services depending on your needs. Our comprehensive window cleaning ensures all surfaces are spotless and streak-free."
    },
    {
      question: "How long does a typical exterior cleaning job take?",
      answer: "The time required depends on the size of your property and the services needed. Most residential properties can be completed in 1-4 hours. We'll provide an estimated timeframe when we provide your quote. Our team works efficiently to minimize disruption to your daily routine."
    },
    {
      question: "Are you insured for exterior cleaning work?",
      answer: "Yes, we are fully insured and our team is trained to work safely at height and on various surfaces. We take all necessary safety precautions to protect your property and our team during all cleaning work. You can have peace of mind knowing we're fully covered."
    },
    {
      question: "What areas do you cover in Ayrshire?",
      answer: "We provide exterior cleaning services throughout Ayrshire, including Irvine, Ayr, Kilmarnock, Troon, Prestwick, and outer Glasgow. Contact us to confirm we cover your specific area. We're happy to discuss service availability for your location."
    },
    {
      question: "Do you offer regular maintenance cleaning contracts?",
      answer: "Yes, we offer flexible regular cleaning contracts with scheduled visits. Regular maintenance programs ensure your property always looks its best and can be more cost-effective than one-off cleans. We can tailor a maintenance schedule to suit your needs and budget."
    },
    {
      question: "What's the difference between softwashing and pressure washing?",
      answer: "Softwashing uses low-pressure cleaning with specialized solutions, making it safe for delicate surfaces like render. Pressure washing uses high-pressure water which can damage render and cause water ingress. We use the appropriate method based on the surface type to ensure safe, effective cleaning."
    },
    {
      question: "Can you remove oil stains from driveways?",
      answer: "Yes, we use specialized cleaning solutions and techniques to effectively remove oil stains from driveways. While some very old or deeply embedded stains may not be completely removed, we can significantly improve their appearance. Our professional cleaning methods are highly effective at removing most stains."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.7 }}
            className="text-4xl md:text-5xl font-manrope font-normal text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-xl text-gray-600 font-manrope max-w-2xl mx-auto">
            Find answers to common questions about our exterior cleaning services in Ayrshire.
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
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
      </div>
    </section>
  );
};

export default FAQ;

