
import LazyImage from "@/components/ui/lazy-image";
import { MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <LazyImage 
                src="/lovable-uploads/logo.png" 
                webpSrc="/lovable-uploads/logo.webp"
                alt="Jimbo's Exterior Cleaning Logo" 
                className="h-8 w-auto"
                loading="eager"
              />
            </div>
            <p className="text-gray-400 font-manrope">
              Expert exterior cleaning services across Ayrshire and outer Glasgow. Roofs, render, driveways, gutters, PVC, and more—safe, effective, and reliable.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-manrope font-normal mb-4">Pages</h4>
            <ul className="space-y-2 text-gray-400 font-manrope">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-manrope font-normal mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 font-manrope">
              <li><a href="/services/roof-steam-cleaning" className="hover:text-white transition-colors">Roof Steam Cleaning</a></li>
              <li><a href="/services/render-softwashing" className="hover:text-white transition-colors">Render Softwashing</a></li>
              <li><a href="/services/driveway-cleaning" className="hover:text-white transition-colors">Driveway Cleaning</a></li>
              <li><a href="/services/gutter-cleaning" className="hover:text-white transition-colors">Gutter Cleaning</a></li>
              <li><a href="/services/pvc-white-cleaning" className="hover:text-white transition-colors">PVC White Cleaning</a></li>
              <li><a href="/services/window-cleaning" className="hover:text-white transition-colors">Window Cleaning</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-manrope font-normal mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-400 font-manrope">
              <li><a href="/locations/irvine" className="hover:text-white transition-colors">Irvine</a></li>
              <li><a href="/locations/ayr" className="hover:text-white transition-colors">Ayr</a></li>
              <li><a href="/locations/troon" className="hover:text-white transition-colors">Troon</a></li>
              <li><a href="/locations/prestwick" className="hover:text-white transition-colors">Prestwick</a></li>
              <li><a href="/locations/kilmarnock" className="hover:text-white transition-colors">Kilmarnock</a></li>
              <li className="text-gray-400">Outer Glasgow</li>
              <li className="text-gray-500">Mon-Fri: 8:00 AM - 6:00 PM</li>
              <li className="text-gray-500">Sat: 9:00 AM - 4:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Google Business Profile & Map Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Google Business Profile Link */}
            <div>
              <h4 className="text-lg font-manrope font-normal mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Find Us Online
              </h4>
              <div className="space-y-3">
                <a 
                  href="https://share.google/bukhq5GaYzrgiqBIQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#4285F4] hover:bg-[#357AE8] text-white font-manrope font-normal rounded-md transition-colors"
                >
                  View Google Business Profile
                  <ExternalLink className="w-4 h-4" />
                </a>
                <div className="flex flex-wrap gap-3 mt-3">
                  <a 
                    href="https://www.facebook.com/profile.php?id=100076596473868" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#1877F2] hover:bg-[#166FE5] text-white font-manrope font-normal rounded-md transition-colors text-sm"
                  >
                    Facebook
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a 
                    href="https://nextdoor.co.uk/pages/jimbos-exterior-cleaning-irvine-gb-sct/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B04F] hover:bg-[#009944] text-white font-manrope font-normal rounded-md transition-colors text-sm"
                  >
                    Nextdoor
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a 
                    href="https://www.yell.com/biz/jimbos-exterior-cleaning-irvine-10910599/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD700] hover:bg-[#FFC700] text-gray-900 font-manrope font-normal rounded-md transition-colors text-sm"
                  >
                    Yell.com
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <p className="text-gray-400 font-manrope text-sm mt-4">
                2 West Bowhouse Way, Irvine, United Kingdom
              </p>
            </div>

            {/* Google Maps Embed */}
            <div>
              <h4 className="text-lg font-manrope font-normal mb-4">Location</h4>
              <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-700">
                <iframe
                  src="https://www.google.com/maps?q=2+West+Bowhouse+Way,+Irvine,+United+Kingdom&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jimbo's Exterior Cleaning Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 font-manrope">
            © 2024 Jimbo's Exterior Cleaning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
