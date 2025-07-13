
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Zap, 
  Users, 
  Star,
  ArrowRight,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  ChevronDown
} from "lucide-react";
import { FunzileLogo } from "@/components/FunzileLogo";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies.",
      features: ["React & Next.js", "TypeScript", "Responsive Design", "SEO Optimized"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive designs that look stunning on all devices and screen sizes.",
      features: ["Cross-Platform", "Touch Optimized", "Fast Loading", "PWA Ready"]
    },
    {
      icon: Globe,
      title: "E-Commerce Solutions",
      description: "Complete online store solutions with secure payment processing.",
      features: ["Payment Integration", "Inventory Management", "Analytics", "Admin Dashboard"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast websites optimized for speed and user experience.",
      features: ["Core Web Vitals", "CDN Integration", "Image Optimization", "Caching"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      content: "Funzile transformed our digital presence completely. Their attention to detail and technical expertise is unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-Commerce Plus",
      content: "The team delivered our e-commerce platform ahead of schedule. Sales increased by 150% within the first month.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      company: "Creative Agency Co",
      content: "Professional, reliable, and innovative. Funzile is our go-to partner for all web development projects.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/20 z-50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FunzileLogo />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Funzile</h1>
                <p className="text-xs text-gray-600">by IZIBONELO TECH PTY LTD</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('tikiti')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Tikiti
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>
        <div className="container mx-auto px-6 text-center relative">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              🚀 Building the Future of Web
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Crafting Digital
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We create stunning websites and powerful web applications that drive business growth. 
              From concept to deployment, we're your trusted digital partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection('contact')}
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-blue-600 px-8 py-3 rounded-full transition-all duration-300"
                onClick={() => scrollToSection('services')}
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive web solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Funzile</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Operating under IZIBONELO TECH PTY LTD, Funzile is a dynamic web development 
                company dedicated to creating exceptional digital experiences. We combine technical expertise 
                with creative vision to deliver solutions that exceed expectations.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of skilled developers and designers work collaboratively to transform your ideas 
                into powerful web applications that drive business success.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Funzile?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-3 text-yellow-300" />
                    Expert Team of Developers
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-3 text-yellow-300" />
                    Modern Technologies & Best Practices
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-3 text-yellow-300" />
                    Timely Delivery & Support
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-3 text-yellow-300" />
                    Competitive Pricing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tikiti SaaS Section */}
      <section id="tikiti" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Our SaaS Product</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Tikiti</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our innovative SaaS solution designed to streamline your business operations
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-purple-50 to-blue-50">
              <CardContent className="p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Tikiti - Simplifying Business
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Experience the power of our cutting-edge SaaS platform that transforms 
                      how businesses operate and grow in the digital age.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-gray-700">
                        <Zap className="h-5 w-5 mr-3 text-purple-600" />
                        Lightning-fast performance
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Users className="h-5 w-5 mr-3 text-purple-600" />
                        Team collaboration tools
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Globe className="h-5 w-5 mr-3 text-purple-600" />
                        Cloud-based accessibility
                      </li>
                    </ul>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      onClick={() => window.open('https://www.tikiti.fun/', '_blank')}
                    >
                      Visit Tikiti
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-8 text-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <div className="text-center">
                        <div className="text-6xl font-bold mb-4">Tikiti</div>
                        <div className="text-purple-200">www.tikiti.fun</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by businesses worldwide</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to start your next project? Let's talk!</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <span className="text-gray-700">info@funzile.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <span className="text-gray-700">+27 (0)61 069 2364 </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                  <span className="text-gray-700">Durban, South Africa</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-2">Legal Entity</h4>
                <p className="text-gray-600">IZIBONELO TECH PTY LTD</p>
              </div>
            </div>
            <div>
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Your Project</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                    <textarea
                      placeholder="Tell us about your project"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    ></textarea>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <FunzileLogo variant="white" />
              <div>
                <h3 className="text-lg font-bold">Funzile</h3>
                <p className="text-sm text-gray-400">by IZIBONELO TECH PTY LTD</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">&copy; 2024 Funzile. All rights reserved.</p>
              <p className="text-sm text-gray-500">Building digital excellence since day one</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
