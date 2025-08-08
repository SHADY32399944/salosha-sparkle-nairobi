import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceCard from "@/components/ui/service-card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Sofa, 
  Home, 
  Bed, 
  Bug, 
  Sparkles, 
  Package, 
  Hammer,
  CheckCircle,
  Star,
  Phone,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";
import sofaImage from "@/assets/sofa-cleaning.jpg";
import carpetImage from "@/assets/carpet-cleaning.jpg";
import pestImage from "@/assets/pest-control.jpg";

const Index = () => {
  const services = [
    {
      title: "Sofa Cleaning",
      description: "Professional upholstery cleaning to restore your furniture's original beauty and freshness.",
      icon: Sofa,
      image: sofaImage
    },
    {
      title: "Carpet Cleaning",
      description: "Deep cleaning services that remove stains, dirt, and allergens from your carpets.",
      icon: Home,
      image: carpetImage
    },
    {
      title: "Mattress Cleaning",
      description: "Thorough sanitization and cleaning for a healthier sleeping environment.",
      icon: Bed
    },
    {
      title: "Fumigation & Pest Control",
      description: "Complete pest elimination and prevention services for your home or office.",
      icon: Bug,
      image: pestImage
    },
    {
      title: "Deep Cleaning",
      description: "Comprehensive cleaning services that reach every corner of your space.",
      icon: Sparkles
    },
    {
      title: "Move In/Move Out Cleaning",
      description: "Make your transition smooth with our thorough move-in and move-out cleaning.",
      icon: Package
    },
    {
      title: "Post-Construction Cleaning",
      description: "Specialized cleaning after renovations or construction work.",
      icon: Hammer
    }
  ];

  const features = [
    "Professional & Trained Staff",
    "Eco-Friendly Products",
    "Fully Insured Services",
    "Flexible Scheduling",
    "Satisfaction Guaranteed",
    "Competitive Pricing"
  ];

  const testimonials = [
    {
      name: "Mary Wanjiku",
      location: "Karen, Nairobi",
      rating: 5,
      comment: "Excellent service! My carpets look brand new after their deep cleaning. Very professional team."
    },
    {
      name: "James Kimani",
      location: "Westlands, Nairobi",
      rating: 5,
      comment: "Reliable and thorough. They helped us with post-construction cleaning and did an amazing job."
    },
    {
      name: "Grace Nyong'o",
      location: "Kilimani, Nairobi",
      rating: 5,
      comment: "Their pest control service was very effective. No issues since they treated our home."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/20">
              Professional Cleaning Services in Nairobi
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Your Trusted 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                Cleaning Partner
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-slide-up">
              Professional cleaning services across Nairobi and its environs. 
              From deep cleaning to pest control, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                asChild 
                className="bg-white text-primary hover:bg-gray-100 shadow-strong"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get Free Quote <ArrowRight size={20} />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <a href="tel:0753264206" className="flex items-center gap-2">
                  <Phone size={20} /> Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Salosha?</h2>
            <p className="text-lg text-muted-foreground">Professional excellence you can trust</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle size={20} className="text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Complete Cleaning Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From residential to commercial spaces, we provide comprehensive 
              cleaning services tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Testimonials</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for a Cleaner Space?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and experience the difference 
            professional cleaning can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              asChild 
              className="bg-white text-primary hover:bg-gray-100 shadow-strong"
            >
              <Link to="/contact">
                Get Your Free Quote
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <a href="tel:0753264206">
                Call 0753 264 206
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
