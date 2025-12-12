
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import LazyImage from "@/components/ui/lazy-image";
import { Star, Facebook } from "lucide-react";

// Google Analytics type declaration
declare global {
  function gtag(...args: any[]): void;
}

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section 
        id="home" 
        className="relative h-screen flex items-center justify-start bg-cover bg-center"
        style={{
          backgroundImage: 'url("/BackRoof.webp"), url("/BackRoof.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        aria-label="Hero section with background image of a clean roof"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto max-w-5xl py-8 relative z-10 mt-20">
          <div className="max-w-2xl text-left">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.7 }}
              className="text-5xl md:text-6xl font-manrope text-white mb-6 leading-tight"
            >
              Roof Cleaning in Ayrshire
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true, amount: 0.7 }}
              className="text-base text-white/90 mb-8 font-manrope max-w-md"
            >
              Transform your property's appearance with Ayrshire's trusted exterior cleaning specialists. From <a href="/services/roof-steam-cleaning" className="text-white underline hover:text-blue-200">roof steam cleaning</a> to <a href="/services/driveway-cleaning" className="text-white underline hover:text-blue-200">driveway cleaning</a>, we deliver outstanding results every time. Serving <a href="/locations/irvine" className="text-white underline hover:text-blue-200">Irvine</a>, <a href="/locations/ayr" className="text-white underline hover:text-blue-200">Ayr</a>, <a href="/locations/troon" className="text-white underline hover:text-blue-200">Troon</a>, <a href="/locations/prestwick" className="text-white underline hover:text-blue-200">Prestwick</a>, <a href="/locations/kilmarnock" className="text-white underline hover:text-blue-200">Kilmarnock</a> & outer Glasgow.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.7 }}
              className="flex flex-col gap-4"
            >
              <Button 
                onClick={() => {
                  // Track CTA button click
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                      event_category: 'CTA',
                      event_label: 'Hero Get Quote Button',
                      value: 1
                    });
                  }
                  window.location.href = '/contact';
                }}
                className="bg-[#526bb0] hover:bg-blue-700 text-white font-manrope font-normal text-lg px-8 py-6 rounded-none w-fit"
              >
                Get a free quote
              </Button>
              
              {/* 5-Star Review Component */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
                viewport={{ once: true, amount: 0.7 }}
                className="flex items-center gap-3"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-white font-manrope font-normal text-sm">
                  42+ reviews
                </span>
                <a
                  href="https://www.facebook.com/jimbosexteriorcleaning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 transition-colors"
                  aria-label="Visit our Facebook page"
                  onClick={() => {
                    if (typeof gtag !== 'undefined') {
                      gtag('event', 'click', {
                        event_category: 'Social',
                        event_label: 'Facebook Link',
                        value: 1
                      });
                    }
                  }}
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before and After Slider Section */}
      <section className="py-20 bg-white" id="before-after">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <BeforeAfterSlider 
              beforeImg="/lovable-uploads/bef1.jpg" 
              afterImg="/lovable-uploads/after1.jpg"
              beforeWebp="/lovable-uploads/bef1.webp"
              afterWebp="/lovable-uploads/after1.webp"
            />
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
              <LazyImage
                src="/jm1.jpg"
                alt="Exterior cleaning result"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
              <LazyImage
                src="/jm2.jpg"
                alt="Exterior cleaning result"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
              <LazyImage
                src="/jm3.jpg"
                alt="Exterior cleaning result"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

// BeforeAfterSlider component for before/after image comparison
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
  beforeWebp?: string;
  afterWebp?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImg, afterImg, beforeWebp, afterWebp }) => {
  const [value, setValue] = useState([50]);

  return (
    <div className="relative w-full max-w-xl mx-auto aspect-video overflow-hidden rounded-lg shadow-lg">
      {/* Before image (always fully visible) */}
      <picture>
        {beforeWebp && <source srcSet={beforeWebp} type="image/webp" />}
        <img
          src={beforeImg}
          alt="Before cleaning"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 1 }}
        />
      </picture>
      {/* After image (revealed from left to right) */}
      <picture>
        {afterWebp && <source srcSet={afterWebp} type="image/webp" />}
        <img
          src={afterImg}
          alt="After cleaning"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            clipPath: `inset(0 ${100 - value[0]}% 0 0)`,
            zIndex: 2,
          }}
        />
      </picture>
      
      {/* BEFORE text overlay - top left */}
      <div className="absolute top-4 left-4 z-20">
        <div className="bg-black/70 text-white px-3 py-1 rounded font-manrope font-bold text-sm">
          BEFORE
        </div>
      </div>
      
      {/* AFTER text overlay - top right */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-black/70 text-white px-3 py-1 rounded font-manrope font-bold text-sm">
          AFTER
        </div>
      </div>
      
      {/* Slider handle */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>
        <div
          className="h-full border-l-4 border-[#526bb0]"
          style={{ left: `${value[0]}%`, position: "absolute" }}
        ></div>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 px-8 z-10">
        <Slider
          min={0}
          max={100}
          step={1}
          value={value}
          onValueChange={setValue}
          aria-label="Before and after slider"
        />
      </div>
      
      {/* Drag instruction text */}
      <div className="absolute -bottom-8 left-0 right-0 text-center z-10">
        <p className="text-gray-600 font-manrope text-sm">
          Drag the slider to reveal
        </p>
      </div>
    </div>
  );
};
