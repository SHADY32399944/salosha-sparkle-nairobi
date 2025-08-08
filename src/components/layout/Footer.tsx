import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">S</span>
              </div>
              <div>
                <span className="text-lg font-bold text-primary">Salosha</span>
                <p className="text-sm text-muted-foreground">Cleaning Services Ltd.</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional cleaning services in Nairobi and its environs. 
              Your trusted partner for a cleaner, healthier environment.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Sofa Cleaning</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Carpet Cleaning</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Mattress Cleaning</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Pest Control</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Deep Cleaning</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:0753264206" className="text-muted-foreground hover:text-primary transition-colors">
                  0753 264 206
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@saloshacleaningservices.co.ke" className="text-muted-foreground hover:text-primary transition-colors">
                  info@saloshacleaningservices.co.ke
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-primary" />
                <span className="text-muted-foreground">Nairobi & Environs</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Business Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-primary" />
                <div>
                  <p className="text-muted-foreground">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Sat: 8:00 AM - 4:00 PM</p>
                  <p className="text-muted-foreground">Sun: Emergency Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Salosha Cleaning Services Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;