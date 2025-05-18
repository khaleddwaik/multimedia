
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Activity, ArrowRight, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ResourcesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-neon to-neon-dark">
        <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Neural Resources & Tools</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Advanced, AI-driven resources and tools designed to optimize your smoke-free journey using cognitive behavioral science.
          </p>
        </div>
      </section>
      
      {/* Resource Categories */}
      <section className="py-16 cyber-grid-bg bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-neon">Neural Quit Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="neo-glass cyber-border hover:cyber-glow transition-all duration-500">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon bg-opacity-10 mb-3">
                  <Activity className="h-6 w-6 text-neon" />
                </div>
                <CardTitle>Neural Quit Plan Generator</CardTitle>
                <CardDescription className="text-gray-600">AI-powered personalized cessation plan based on your unique neural and behavioral patterns.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </span>
                    <span>Advanced algorithm optimizes your quit date based on biorhythm analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </span>
                    <span>Neural mapping of your unique triggers with 94% accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </span>
                    <span>Adaptive strategy evolution based on real-time progress data</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/quit-plan" className="text-neon hover:underline inline-flex items-center">
                  Generate Your Neural Plan <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="neo-glass cyber-border hover:cyber-glow transition-all duration-500">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyber bg-opacity-10 mb-3">
                  <Zap className="h-6 w-6 text-cyber" />
                </div>
                <CardTitle>Cognitive Rewiring Protocol</CardTitle>
                <CardDescription className="text-gray-600">Advanced neurocognitive techniques to retrain your brain's response to nicotine triggers.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </span>
                    <span>Neuroplasticity-based exercises for cue extinction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </span>
                    <span>Neural pathway rewiring using advanced cognitive techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </span>
                    <span>Customized based on real-time EEG and biometric analysis</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href="https://www.cdc.gov/tobacco/quit_smoking/index.htm" target="_blank" rel="noopener noreferrer" className="text-cyber hover:underline inline-flex items-center">
                  Access Neural Protocols <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
            
            <Card className="neo-glass cyber-border hover:cyber-glow transition-all duration-500">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-biotic bg-opacity-10 mb-3">
                  <Shield className="h-6 w-6 text-biotic" />
                </div>
                <CardTitle>Quantum Support Network</CardTitle>
                <CardDescription className="text-gray-600">AI-matched support system connecting you with others on the same neural cessation journey.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </span>
                    <span>Neural pattern matching connects you with compatible quit partners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </span>
                    <span>Encrypted immersive VR support group environments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </span>
                    <span>Quantum computing-based mentor matching algorithm</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/community" className="text-biotic hover:underline inline-flex items-center">
                  Join Neural Network <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Biometric Visualization */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="cyber-grid-bg h-full w-full data-flow"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Biometric Recovery Visualization</h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
            Neural imaging shows the dramatic recovery in cognitive function after quitting smoking.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4 text-center">
              <div className="relative overflow-hidden rounded-lg cyber-border">
                <img 
                  src="/images/lungs-colored.jpg" 
                  alt="Neural activity map - Current state" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-neon p-2">
                  Current State
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Neural mapping showing decreased activity in reward centers while smoking
              </p>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="relative overflow-hidden rounded-lg cyber-border">
                <img 
                  src="/images/lungs-grayscale.jpg" 
                  alt="Neural activity map - 30 days" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-neon p-2">
                  30 Days Smoke-Free
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Enhanced dopamine receptor functionality and neural pathway recalibration
              </p>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="relative overflow-hidden rounded-lg cyber-border cyber-glow">
                <img 
                  src="/images/lungs-monochrome.jpg" 
                  alt="Neural activity map - 90 days" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-neon p-2">
                  90 Days Smoke-Free
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Full neural optimization and restored cognitive pathway efficiency
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="italic text-sm text-gray-500">
              *Images generated using advanced neural imaging technology to visualize cognitive recovery patterns.
              Enhanced with AI-powered contrast algorithms to highlight neurological changes.
            </p>
          </div>
        </div>
      </section>
      
      {/* Downloadable Resources */}
      <section className="py-16 cyber-grid-bg bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-neon">Quantum Data Packets</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="neo-glass cyber-border p-6 hover:cyber-glow transition-all duration-300">
              <div className="flex items-center mb-4">
                <Activity className="h-6 w-6 text-neon mr-3" />
                <h3 className="font-bold text-lg">Neural Rewiring Protocol</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced 30-day neural pathway reconfiguration guide with quantum biofeedback integration.
              </p>
              <a href="#download" className="inline-flex items-center text-neon hover:underline">
                Download Quantum Packet <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="neo-glass cyber-border p-6 hover:cyber-glow transition-all duration-300">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-cyber mr-3" />
                <h3 className="font-bold text-lg">Craving Override Algorithm</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Quantum computing-derived techniques to instantaneously redirect neural craving responses.
              </p>
              <a href="#download" className="inline-flex items-center text-cyber hover:underline">
                Download Quantum Packet <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="neo-glass cyber-border p-6 hover:cyber-glow transition-all duration-300">
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-biotic mr-3" />
                <h3 className="font-bold text-lg">Biometric Tracking Matrix</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced visualization system for tracking neural recovery, dopamine recalibration, and health improvements.
              </p>
              <a href="#download" className="inline-flex items-center text-biotic hover:underline">
                Download Quantum Packet <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Support Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="cyber-grid-bg h-full w-full"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold mb-8">NeuroSync™ Support AI</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Our quantum AI system provides personalized, real-time intervention at critical neural trigger points.
          </p>
          
          <div className="max-w-md mx-auto neo-glass cyber-border p-8">
            <div className="rounded-full w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-neon to-cyber cyber-glow flex items-center justify-center">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Neural Quit Assistant</h3>
            <p className="text-lg mb-6">Available 24/7 through our quantum neural interface</p>
            <Button className="bg-neon hover:bg-neon-dark text-white cyber-glow">
              Activate Neural Interface
            </Button>
            <p className="mt-6 text-sm text-gray-400">
              Encrypted neural connection with quantum-level security protocols.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResourcesPage;
