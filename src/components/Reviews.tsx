import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      text: "Just had my roof cleaned, what a difference. Fantastic job done by friendly, hard working people",
      author: "Marianne Brown",
      rating: 5
    },
    {
      text: "Had to get Jim to clean our roof after I seen what an amazing job he did to a neighbour's roof! Did not disappoint! He also steam cleaned the driveway, fantastic job.",
      author: "Ashley Harries",
      rating: 5
    },
    {
      text: "Fantastic job cleaning 14 years worth of moss from our roof! Would 100% recommend!",
      author: "Gillian Cameron",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.7 }}
            className="text-4xl md:text-5xl font-manrope text-gray-900 mb-4 font-normal"
          >
            Customer Reviews
          </motion.h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.7 }}
            >
              <Card className="bg-gray-50 hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-6">
                  {renderStars(review.rating)}
                  <p className="text-gray-700 font-manrope mb-6 leading-relaxed">
                    "{review.text}"
                  </p>
                  <p className="text-gray-600 font-manrope font-normal">
                    - {review.author}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;


