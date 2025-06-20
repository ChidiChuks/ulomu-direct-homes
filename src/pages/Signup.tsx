
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Bot, ArrowRight, CheckCircle } from "lucide-react";

const Signup = () => {
  const benefits = [
    "14-day free trial",
    "No credit card required",
    "Cancel anytime",
    "Full access to all features"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-br from-beige to-beige/50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Benefits */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Start Your <span className="text-terracotta">Free Trial</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Join thousands of property owners who have reduced maintenance costs, 
                    improved tenant satisfaction, and saved countless hours with Ulomu's 
                    AI-powered platform.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">What's included:</h3>
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-forest mr-3" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-beige/50">
                  <h4 className="font-semibold text-gray-900 mb-2">Trusted by 2,000+ property owners</h4>
                  <p className="text-gray-600 text-sm">
                    "Ulomu has transformed how we manage maintenance across our 50+ properties. 
                    The AI predictions have prevented countless emergency repairs."
                  </p>
                  <p className="text-sm text-gray-500 mt-2">- Sarah Johnson, Property Manager</p>
                </div>
              </div>
              
              {/* Right side - Signup Form */}
              <div>
                <Card className="shadow-xl border-beige/50">
                  <CardHeader className="text-center space-y-4">
                    <div className="w-16 h-16 bg-terracotta rounded-xl flex items-center justify-center mx-auto">
                      <Bot className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      Create Your Account
                    </CardTitle>
                    <p className="text-gray-600">
                      Get started with your 14-day free trial
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="John"
                            className="border-beige focus:border-terracotta focus:ring-terracotta"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            type="text"
                            placeholder="Doe"
                            className="border-beige focus:border-terracotta focus:ring-terracotta"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          className="border-beige focus:border-terracotta focus:ring-terracotta"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Your Property Company"
                          className="border-beige focus:border-terracotta focus:ring-terracotta"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Create a secure password"
                          className="border-beige focus:border-terracotta focus:ring-terracotta"
                        />
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <input type="checkbox" className="rounded border-beige mt-1" />
                        <p className="text-sm text-gray-600">
                          I agree to the{" "}
                          <Link to="/terms" className="text-terracotta hover:text-terracotta/80">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link to="/privacy" className="text-terracotta hover:text-terracotta/80">
                            Privacy Policy
                          </Link>
                        </p>
                      </div>
                      
                      <Button className="w-full bg-terracotta hover:bg-terracotta/90 text-white">
                        Start Free Trial
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                    
                    <div className="text-center text-sm text-gray-600">
                      Already have an account?{" "}
                      <Link to="/login" className="text-terracotta hover:text-terracotta/80 font-medium">
                        Sign in
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
