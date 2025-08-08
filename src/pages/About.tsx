import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  MapPin,
  CheckCircle,
  Star,
  Clock
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every cleaning task, ensuring exceptional results every time."
    },
    {
      icon: Users,
      title: "Reliability",
      description: "Our clients trust us to deliver consistent, high-quality services they can depend on."
    },
    {
      icon: Award,
      title: "Professionalism",
      description: "Trained staff, proper equipment, and systematic approaches define our service delivery."
    },
    {
      icon: Eye,
      title: "Attention to Detail",
      description: "We notice and clean the areas others might miss, ensuring comprehensive results."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Cleaning Jobs" },
    { number: "3+", label: "Years Experience" },
    { number: "7", label: "Services Offered" }
  ];

  const serviceAreas = [
    "Karen", "Westlands", "Kilimani", "Lavington", "Parklands",
    "Kileleshwa", "Runda", "Muthaiga", "Spring Valley", "Gigiri",
    "Riverside", "Upper Hill", "Hurlingham", "Kirichwa Road"
  ];

  const testimonials = [
    {
      name: "Dr. Peter Mwangi",
      title: "Medical Professional",
      location: "Karen",
      rating: 5,
      comment: "Salosha has been cleaning our medical facility for over a year. Their attention to hygiene standards is exceptional. Highly recommended for both residential and commercial spaces."
    },
    {
      name: "Sarah Johnson",
      title: "Real Estate Manager",
      location: "Westlands",
      rating: 5,
      comment: "We use Salosha for all our move-in/move-out cleaning needs. They're thorough, punctual, and their pricing is very competitive. Great team to work with!"
    },
    {
      name: "Michael Ochieng",
      title: "Homeowner",
      location: "Lavington",
      rating: 5,
      comment: "After trying several cleaning services, Salosha stands out for their professionalism and quality. They've been cleaning our home monthly for 2 years now."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/20">
            About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Trusted Cleaning Partner in Nairobi
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Established with a mission to provide exceptional cleaning services, 
            Salosha Cleaning Services Ltd. has become a trusted name in Nairobi's 
            cleaning industry.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Our Story</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Building Clean, Healthy Environments Since 2021
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Salosha Cleaning Services Ltd. was founded with a simple yet powerful vision: 
                  to provide professional, reliable, and affordable cleaning services to homes 
                  and businesses across Nairobi and its environs.
                </p>
                <p>
                  What started as a small team with big dreams has grown into one of Nairobi's 
                  most trusted cleaning service providers. We've built our reputation on 
                  consistency, quality, and a genuine care for our clients' satisfaction.
                </p>
                <p>
                  Today, we serve hundreds of satisfied clients across Nairobi, from residential 
                  homes to commercial establishments, always maintaining our commitment to 
                  excellence and environmental responsibility.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Target size={24} className="text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To provide exceptional, reliable, and eco-friendly cleaning services that 
                  create healthier, more comfortable living and working environments for our 
                  clients across Nairobi and its environs. We are committed to excellence, 
                  sustainability, and building lasting relationships with our clients.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Eye size={24} className="text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To be the leading cleaning services company in Kenya, known for our 
                  professionalism, innovation, and unwavering commitment to customer 
                  satisfaction. We envision a cleaner, healthier Kenya where every space 
                  we touch contributes to improved quality of life.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What Drives Us Every Day
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do, from how we treat our clients 
              to how we approach each cleaning task.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <value.icon size={24} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Service Coverage</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Areas We Serve in Nairobi
            </h2>
            <p className="text-lg text-muted-foreground">
              We proudly serve clients across Nairobi and its environs
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-6">
                <MapPin size={24} className="text-primary mr-2" />
                <span className="text-lg font-semibold text-foreground">Nairobi & Environs</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Detailed Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Client Success Stories</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What Our Clients Say About Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Real feedback from real clients who trust us with their cleaning needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>
                    {testimonial.title} • {testimonial.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Experience the Salosha Difference
          </h2>
          <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who trust us with their cleaning needs. 
            Professional, reliable, and always exceeding expectations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 text-white">
              <Clock size={24} className="text-white flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold">Flexible Scheduling</div>
                <div className="text-gray-200 text-sm">Book at your convenience</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <Award size={24} className="text-white flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold">Quality Guaranteed</div>
                <div className="text-gray-200 text-sm">100% satisfaction promise</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <Users size={24} className="text-white flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold">Trusted Team</div>
                <div className="text-gray-200 text-sm">Trained & insured staff</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;