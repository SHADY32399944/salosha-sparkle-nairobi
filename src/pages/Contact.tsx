import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  CheckCircle,
  Send
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;
    
    if (!name.trim()) return "Name is required";
    if (!email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email";
    if (!phone.trim()) return "Phone number is required";
    if (phone.length < 10) return "Please enter a valid phone number";
    if (!message.trim()) return "Message is required";
    
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      toast({
        title: "Validation Error",
        description: error,
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    }, 1000);
  };

  const services = [
    "Sofa Cleaning",
    "Carpet Cleaning", 
    "Mattress Cleaning",
    "Fumigation & Pest Control",
    "Deep Cleaning",
    "Move In/Move Out Cleaning",
    "Post-Construction Cleaning",
    "Other"
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "0753 264 206",
      link: "tel:0753264206",
      description: "Available Mon-Sat, 8AM-6PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@saloshacleaningservices.co.ke",
      link: "mailto:info@saloshacleaningservices.co.ke",
      description: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: "Nairobi & Environs",
      description: "We come to you!"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 8AM-6PM",
      description: "Sat: 8AM-4PM, Sun: Emergency only"
    }
  ];

  const whyChooseUs = [
    "Free, no-obligation quotes",
    "Same-day service available",
    "Eco-friendly cleaning products",
    "Fully insured and bonded",
    "100% satisfaction guarantee",
    "Competitive pricing"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/20">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Professional Cleaning?
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Contact us today for a free quote. We're here to make your space 
            cleaner, healthier, and more comfortable.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <info.icon size={24} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-primary hover:text-primary-light font-semibold transition-colors"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-primary font-semibold">{info.details}</p>
                  )}
                  <CardDescription className="mt-2">
                    {info.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <Badge variant="outline" className="mb-4">Get Your Quote</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we'll get back to you with a 
                  personalized quote within 24 hours.
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="07XX XXX XXX"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select a service...</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your cleaning needs, property size, preferred date, etc."
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:shadow-medium"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send size={16} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Why Choose Us */}
            <div className="space-y-8">
              {/* Google Maps */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin size={20} />
                    Our Service Area
                  </CardTitle>
                  <CardDescription>
                    We serve clients throughout Nairobi and its environs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35624364584!2d36.70730744863281!3d-1.302855100000035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1703025600000!5m2!1sen!2sus"
                      width="100%"
                      height="256"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare size={20} />
                    Why Choose Salosha?
                  </CardTitle>
                  <CardDescription>
                    Here's what sets us apart from the competition
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {whyChooseUs.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle size={16} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-gradient-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Need Immediate Service?</h3>
                  <p className="mb-6 text-primary-foreground/90">
                    For urgent cleaning needs or same-day service, 
                    call us directly.
                  </p>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    asChild
                    className="w-full border-white text-white hover:bg-white hover:text-primary"
                  >
                    <a href="tel:0753264206" className="flex items-center justify-center gap-2">
                      <Phone size={16} />
                      Call Now: 0753 264 206
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;