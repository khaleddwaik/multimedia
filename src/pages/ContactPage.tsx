
import React from 'react';
import { MessageSquare, Mail, Users, Heart, Calendar, Phone, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from "react-hook-form";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  newsletter: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactPage = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      newsletter: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // In a real app, you would send this data to your backend
    alert("Thank you for contacting us! We'll respond shortly.");
    form.reset();
  };

  return (
    <>
      {/* Hero Section - Updated with futuristic design */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F2C] to-[#131720] z-0">
          {/* Neural network grid effect */}
          <div className="absolute inset-0 cyber-grid-bg opacity-40"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0 data-flow"></div>
        </div>
        
        {/* Glowing circle accent */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#8B5CF6] rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-[#1EAEDB] rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
        
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20">
            <MessageCircle className="h-8 w-8 text-[#1EAEDB]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70">Connect with NeuroQuit.AI</h1>
          
          <div className="max-w-3xl mx-auto relative">
            <p className="text-xl mb-8 text-blue-100/80 leading-relaxed">
              Our neural support network is ready to assist with your journey to becoming smoke-free. Reach out for personalized guidance and advanced solutions.
            </p>
            
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="w-0.5 h-16 bg-gradient-to-b from-[#1EAEDB] to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Can We Help You?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ocean bg-opacity-10 mb-4">
                  <MessageSquare className="h-6 w-6 text-ocean" />
                </div>
                <CardTitle>General Inquiries</CardTitle>
                <CardDescription>Questions about our resources or services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  For general questions about our website, resources, or how we can help you quit smoking.
                </p>
              </CardContent>
              <CardFooter>
                <a href="mailto:info@quitsmokinghelp.org" className="text-ocean hover:underline inline-flex items-center">
                  info@quitsmokinghelp.org
                </a>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sunset bg-opacity-10 mb-4">
                  <Heart className="h-6 w-6 text-sunset" />
                </div>
                <CardTitle>Support Requests</CardTitle>
                <CardDescription>Need help with your quitting journey</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  If you're struggling with quitting and need personalized advice or support from our counselors.
                </p>
              </CardContent>
              <CardFooter>
                <a href="mailto:support@quitsmokinghelp.org" className="text-sunset hover:underline inline-flex items-center">
                  support@quitsmokinghelp.org
                </a>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-earth bg-opacity-10 mb-4">
                  <Users className="h-6 w-6 text-earth" />
                </div>
                <CardTitle>Share Your Story</CardTitle>
                <CardDescription>Submit your success story to inspire others</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We'd love to hear about your journey to becoming smoke-free and possibly feature your story on our website.
                </p>
              </CardContent>
              <CardFooter>
                <a href="mailto:stories@quitsmokinghelp.org" className="text-earth hover:underline inline-flex items-center">
                  stories@quitsmokinghelp.org
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Send Us a Message</h2>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#1EAEDB]/10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="text-sm font-medium text-gray-700">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help you?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="text-sm font-medium text-gray-700">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={5}
                            placeholder="Tell us more about your quitting journey or how we can help you..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="newsletter"
                    render={({ field }) => (
                      <FormItem className="mb-6 flex flex-row items-center space-x-2 space-y-0">
                        <FormControl>
                          <input 
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className="rounded border-gray-300 text-[#1EAEDB] focus:ring-[#1EAEDB]"
                          />
                        </FormControl>
                        <FormLabel className="text-sm text-gray-600">
                          Subscribe to our newsletter for tips and resources on quitting smoking
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                  
                  <div>
                    <Button 
                      type="submit" 
                      className="bg-gradient-to-r from-[#1EAEDB] to-[#0FA0CE] hover:from-[#1EAEDB]/90 hover:to-[#0FA0CE]/90 text-white shadow-lg shadow-[#1EAEDB]/20"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Story Submission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-1 p-8">
                <h3 className="text-2xl font-bold mb-6">Share Your Success Story</h3>
                <p className="text-gray-600 mb-6">
                  Have you successfully quit smoking? Your story could inspire others who are just starting their journey.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-ocean">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-600">Tell us how long you smoked and what motivated you to quit</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-ocean">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-600">Share the strategies and resources that helped you succeed</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-ocean">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-600">Describe how your life has changed since quitting</span>
                  </li>
                </ul>
                <Button className="bg-ocean hover:bg-ocean-dark text-white">
                  Submit Your Story
                </Button>
              </div>
              <div className="md:flex-1 bg-gradient-to-br from-earth to-earth-dark text-white p-8 flex flex-col justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Join Our Community</h4>
                  <p className="mb-6">
                    Connect with others who have successfully quit smoking or are on their quitting journey.
                  </p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-earth">
                    Explore Community
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Audio Message Response */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Hear From Our Team</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Listen to a personal message from our founder about why we're committed to helping people quit smoking.
          </p>
          
          <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto">
            <h3 className="font-bold text-xl mb-4">A Message of Hope</h3>
            <audio controls className="w-full mb-4">
              <source src="/audio/founder-message.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <p className="text-sm text-gray-500 italic">
              Audio recorded by our founder Dr. James Wilson. 
              Edited with equalization, compression, and noise reduction.
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">How quickly will I receive a response?</h3>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24-48 hours during business days. 
                For urgent support needs, please call the Quit Smoking Helpline at 1-800-QUIT-NOW.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Can I speak with a quit smoking counselor?</h3>
              <p className="text-gray-600">
                Yes! Indicate in your message that you'd like to speak with a counselor, 
                and we'll arrange a call or video chat with one of our certified smoking cessation specialists.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Is my information kept confidential?</h3>
              <p className="text-gray-600">
                Absolutely. We take privacy very seriously and adhere to strict confidentiality standards. 
                Your personal information will never be shared with third parties without your explicit consent.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Can I volunteer or contribute to your organization?</h3>
              <p className="text-gray-600">
                We welcome volunteers, especially those with personal experience quitting smoking. 
                Please use the contact form and select "Volunteering" as your subject to learn about opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
