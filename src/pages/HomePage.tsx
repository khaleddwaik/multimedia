
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Activity, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: <Activity className="h-10 w-10 text-neon" />,
    title: 'Improved Health Metrics',
    description: 'Our AI tracks your health improvements in real-time as you progress in your journey to quit smoking.'
  },
  {
    icon: <Star className="h-10 w-10 text-neon" />,
    title: 'Personalized Strategy',
    description: 'Advanced algorithms customize a quitting plan based on your unique smoking patterns and triggers.'
  },
  {
    icon: <Zap className="h-10 w-10 text-neon" />,
    title: 'Smart Intervention',
    description: 'Predictive technology identifies potential relapse moments and provides just-in-time support.'
  },
  {
    icon: <Shield className="h-10 w-10 text-neon" />,
    title: 'Support 24/7',
    description: 'AI-powered support system available round-the-clock, whenever cravings or challenges arise.'
  }
];

const successMetrics = [
  {
    id: 1,
    stat: '94%',
    description: 'Success rate with our neural network support system',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    stat: '1.2M',
    description: 'Data points analyzed to optimize your quitting journey',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    stat: '68%',
    description: 'Fewer withdrawal symptoms compared to traditional methods',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 cyber-grid-bg">
          <img 
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
            alt="Futuristic technology grid" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
          <div className="absolute inset-0 data-flow"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            NeuroQuit<span className="text-neon">.</span>AI
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The future of smoking cessation is here. Our AI-powered platform uses neural network technology to help you break free from nicotine addiction with unprecedented success rates.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/resources" className="btn-primary cyber-glow">Start Your Journey</Link>
            <Link to="/success-stories" className="btn-secondary">See Success Stories</Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div 
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <ArrowRight className="h-6 w-6 text-neon transform rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 cyber-grid-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-neon"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Advanced Smoking Cessation Technology
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our system leverages cutting-edge AI to provide a personalized approach to quitting smoking that adapts to your unique patterns
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="neo-glass p-8 cyber-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Success Metrics</h2>
              <p className="text-lg text-gray-300">Backed by data and proven results</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/resources" className="btn-secondary inline-flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div 
                key={metric.id} 
                className="futuristic-card h-[300px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              >
                <img 
                  src={metric.image} 
                  alt={`Success metric ${metric.id}`} 
                  className="w-full h-full object-cover image-hover-zoom" 
                />
                <div className="futuristic-card-overlay">
                  <h3 className="text-4xl font-bold mb-2 text-neon text-glow">{metric.stat}</h3>
                  <p className="text-gray-300">{metric.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="cyber-grid-bg h-full w-full"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 text-neon mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl md:text-3xl italic mb-8">
              "The neural response prediction algorithm seemed to know when I would have a craving before I did. The intervention system helped me overcome the toughest moments of my quitting journey."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gray-700 mr-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                     alt="User profile" 
                     className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <p className="font-bold">Michael Chen</p>
                <p className="text-neon">Smoke-free for 14 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neon">Neural Network Intervention</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our AI system uses predictive modeling to anticipate when you're most likely to experience cravings based on time, location, and behavioral patterns.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-neon mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </span>
                  <span>Real-time craving prediction with 94% accuracy</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-neon mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </span>
                  <span>Just-in-time adaptive interventions</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-neon mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </span>
                  <span>Continuous learning from your feedback</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/activities" className="btn-primary cyber-glow inline-flex items-center gap-2">
                  Explore Features <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-neon/20 to-cyber/20 rounded-2xl blur-xl opacity-70"></div>
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Neural network visualization" 
                className="relative rounded-xl shadow-2xl cyber-border w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
            alt="Tech background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Begin Your Smoke-Free Future Today</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands who have successfully quit smoking with our advanced AI-powered platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/resources" className="btn-primary cyber-glow">
                Get Started Now
              </Link>
              <Link to="/contact" className="btn-secondary">
                Talk to a Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto neo-glass p-10 cyber-border">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Updated with AI Advancements</h2>
              <p className="text-gray-600 mb-8">
                Subscribe to receive the latest updates on our smoking cessation AI technology and research.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg border border-neon/30 focus:outline-none focus:ring-2 focus:ring-neon bg-white/80 backdrop-blur-sm"
              />
              <button className="btn-primary whitespace-nowrap animate-pulse-neon">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
