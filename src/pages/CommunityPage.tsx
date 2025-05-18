
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, MessageSquare, Calendar, Heart, Award, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CommunityPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-cyber-dark to-cyber overflow-hidden">
        <div className="cyber-grid-bg absolute inset-0 opacity-20"></div>
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
            alt="Neural network visualization" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-glow">NeuroConnect™ Community</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join our neural network of quitters where shared experiences strengthen everyone's neural pathways to freedom.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/community#join">
              <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyber px-6 py-3">
                Connect Neural Profile
              </Button>
            </Link>
            <a href="#forums">
              <Button className="bg-neon hover:bg-neon/90 text-white px-6 py-3 shadow-[0_0_10px_rgba(30,174,219,0.3)]">
                Explore Neural Hubs
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      {/* Community Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Neural Network Benefits</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Research shows that neural mirroring in community settings increases dopamine receptor sensitivity by 215%, 
            making quitting significantly more achievable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-neon bg-card/70 backdrop-blur-sm hover:cyber-glow">
              <CardHeader className="space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon bg-opacity-10 mb-2">
                  <Users className="h-6 w-6 text-neon" />
                </div>
                <CardTitle>Neural Mirroring</CardTitle>
                <CardDescription>Connect with others whose brains are rewiring in parallel with yours.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The neurological phenomenon of "mirrored success" means you're 230% more likely to succeed 
                  when connected to others on the same journey.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-cyber bg-card/70 backdrop-blur-sm hover:cyber-glow">
              <CardHeader className="space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyber bg-opacity-10 mb-2">
                  <MessageSquare className="h-6 w-6 text-cyber" />
                </div>
                <CardTitle>Expert Neural Guidance</CardTitle>
                <CardDescription>Direct access to neurologists and addiction specialists in real-time.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our forums are moderated by specialists with combined experience of over 50,000 neural rewiring cases.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-biotic bg-card/70 backdrop-blur-sm hover:cyber-glow">
              <CardHeader className="space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-biotic bg-opacity-10 mb-2">
                  <Award className="h-6 w-6 text-biotic" />
                </div>
                <CardTitle>Neural Achievement System</CardTitle>
                <CardDescription>Visualize and celebrate the physical rewiring of your brain.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our proprietary algorithm visualizes your neural pathway reconstruction based on your activity metrics and milestones.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Forums Section */}
      <section id="forums" className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">NeuroConnect™ Forums</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join specialized discussion hubs where neural pathways are strengthened through shared experiences and expert guidance.
          </p>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="neo-glass overflow-hidden hover:cyber-glow transition-all duration-300 group">
              <div className="p-6 border-b border-border/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon bg-opacity-10 border border-neon/20">
                      <Users className="h-6 w-6 text-neon" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground">Neural Rewiring Hub</h3>
                      <p className="text-muted-foreground text-sm">Discussions about neuroplasticity and quitting strategies</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div>2,435 neural connections</div>
                    <div>562 members</div>
                  </div>
                </div>
              </div>
              <div className="bg-background/30 p-4 group-hover:bg-background/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Profile" className="w-8 h-8 rounded-full object-cover border border-neon/20" />
                    <div className="text-sm">
                      <div className="font-medium text-foreground">First 72 hours - neural adaptation protocol?</div>
                      <div className="text-muted-foreground">by NeuroPioneeer • 2 hours ago</div>
                    </div>
                  </div>
                  <div className="text-sm text-neon">38 responses</div>
                </div>
              </div>
            </div>
            
            <div className="neo-glass overflow-hidden hover:cyber-glow transition-all duration-300 group">
              <div className="p-6 border-b border-border/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyber bg-opacity-10 border border-cyber/20">
                      <Calendar className="h-6 w-6 text-cyber" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground">Neural Milestone Gallery</h3>
                      <p className="text-muted-foreground text-sm">Share transformation metrics and neurological victories</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div>1,873 neural connections</div>
                    <div>446 members</div>
                  </div>
                </div>
              </div>
              <div className="bg-background/30 p-4 group-hover:bg-background/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Profile" className="w-8 h-8 rounded-full object-cover border border-cyber/20" />
                    <div className="text-sm">
                      <div className="font-medium text-foreground">365-Day Brain Scan Comparison [With Images]</div>
                      <div className="text-muted-foreground">by NeuralArchitect • 6 hours ago</div>
                    </div>
                  </div>
                  <div className="text-sm text-cyber">91 responses</div>
                </div>
              </div>
            </div>
            
            <div className="neo-glass overflow-hidden hover:cyber-glow transition-all duration-300 group">
              <div className="p-6 border-b border-border/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-biotic bg-opacity-10 border border-biotic/20">
                      <Heart className="h-6 w-6 text-biotic" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground">Biofeedback & Wellness</h3>
                      <p className="text-muted-foreground text-sm">Track biological improvements after neural rewiring</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div>1,247 neural connections</div>
                    <div>309 members</div>
                  </div>
                </div>
              </div>
              <div className="bg-background/30 p-4 group-hover:bg-background/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Profile" className="w-8 h-8 rounded-full object-cover border border-biotic/20" />
                    <div className="text-sm">
                      <div className="font-medium text-foreground">HRV Improvements: My 90-Day Biometric Data</div>
                      <div className="text-muted-foreground">by BioHacker432 • 1 day ago</div>
                    </div>
                  </div>
                  <div className="text-sm text-biotic">42 responses</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#more-forums">
              <Button variant="outline" className="border-cyber text-cyber hover:bg-cyber hover:text-white shadow-[0_0_5px_rgba(139,92,246,0.2)] hover:shadow-[0_0_10px_rgba(139,92,246,0.4)]">
                Access All Neural Hubs
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      {/* Success Stories with Images */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Neural Transformation Stories</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Witness real neural pathway reconstruction through these documented transformation journeys.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="futuristic-card group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                  alt="Success story" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <div className="flex items-center gap-3 mb-4">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Michael" className="w-10 h-10 rounded-full object-cover border border-neon/20" />
                  <div>
                    <h3 className="font-medium text-foreground">Michael, 42</h3>
                    <p className="text-sm text-neon">Neural rewiring: 2 years complete</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">"My neuroplasticity score improved by 67% in the first six months. The biofeedback tools showed me exactly how my brain was changing."</p>
                <a href="#read-story" className="text-neon hover:underline flex items-center">
                  View Neural Journey <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="futuristic-card group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1506085452766-c330853a4440?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                  alt="Outdoor activities" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <div className="flex items-center gap-3 mb-4">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Jennifer" className="w-10 h-10 rounded-full object-cover border border-cyber/20" />
                  <div>
                    <h3 className="font-medium text-foreground">Jennifer, 35</h3>
                    <p className="text-sm text-cyber">Neural rewiring: 8 months complete</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">"The NeuroSync™ audio technology rewired my response to triggers. My fMRI shows dramatically reduced activation in craving centers."</p>
                <a href="#read-story" className="text-cyber hover:underline flex items-center">
                  View Neural Journey <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="futuristic-card group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1541591425126-4e6dcb8764e6?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                  alt="Family time" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <div className="flex items-center gap-3 mb-4">
                  <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="David" className="w-10 h-10 rounded-full object-cover border border-biotic/20" />
                  <div>
                    <h3 className="font-medium text-foreground">David, 51</h3>
                    <p className="text-sm text-biotic">Neural rewiring: 14 months complete</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">"My lung capacity increased 34% and cognitive performance tests show I'm processing information 28% faster than before quitting."</p>
                <a href="#read-story" className="text-biotic hover:underline flex items-center">
                  View Neural Journey <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Neural Enhancement Events</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join our virtual and in-person neural optimization sessions led by top neurologists and addiction specialists.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-card/70 backdrop-blur-sm hover:cyber-glow">
              <div className="h-40 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                  alt="Virtual support group" 
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neon/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white font-bold text-2xl text-shadow-lg">MAY 20</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Virtual Neural Synchronization</CardTitle>
                <CardDescription>7:00 PM - 8:30 PM EST</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Group neural entrainment session using advanced biofeedback technology to synchronize and strengthen healthy neural patterns.
                </p>
              </CardContent>
              <CardFooter>
                <a href="#register" className="text-neon hover:underline inline-flex items-center">
                  Sync Neural Profile <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-card/70 backdrop-blur-sm hover:cyber-glow">
              <div className="h-40 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                  alt="Doctor consultation" 
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white font-bold text-2xl text-shadow-lg">JUNE 5</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Neurologist Q&A: Brain Recovery</CardTitle>
                <CardDescription>6:00 PM - 7:00 PM EST</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Interactive session with Dr. Maria Chen, head of neurology at Westlake Research Institute, on accelerating neural repair.
                </p>
              </CardContent>
              <CardFooter>
                <a href="#register" className="text-cyber hover:underline inline-flex items-center">
                  Sync Neural Profile <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-card/70 backdrop-blur-sm hover:cyber-glow">
              <div className="h-40 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                  alt="Stress management" 
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-biotic/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white font-bold text-2xl text-shadow-lg">JUNE 15</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Stress Response Neural Retraining</CardTitle>
                <CardDescription>2:00 PM - 3:30 PM EST</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hands-on workshop using biofeedback devices to retrain your brain's stress response without nicotine dependency.
                </p>
              </CardContent>
              <CardFooter>
                <a href="#register" className="text-biotic hover:underline inline-flex items-center">
                  Sync Neural Profile <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Community Guidelines */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Neural Network Protocols</h2>
            
            <div className="neo-glass p-8 rounded-xl cyber-border relative overflow-hidden">
              <div className="cyber-grid-bg absolute inset-0 opacity-10"></div>
              <div className="bg-card/50 backdrop-blur-md p-6 rounded-lg relative z-10">
                <p className="mb-6 text-muted-foreground">
                  Our neural network is optimized for maximum support and scientific accuracy. 
                  To maintain the integrity of our collective neural enhancement, please follow these protocols:
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neon/20 flex items-center justify-center text-neon font-bold border border-neon/30">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-foreground">Neural Respect</h3>
                      <p className="text-muted-foreground">Support all neural rewiring journeys. Every brain has unique activation patterns and rewiring timelines.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber/20 flex items-center justify-center text-cyber font-bold border border-cyber/30">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-foreground">Information Integrity</h3>
                      <p className="text-muted-foreground">Share only scientifically-verified information. Tag speculation clearly to maintain our high accuracy standards.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-biotic/20 flex items-center justify-center text-biotic font-bold border border-biotic/30">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-foreground">Neural Privacy</h3>
                      <p className="text-muted-foreground">Respect the privacy of neural scan data and biometric information shared by community members.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neon/20 flex items-center justify-center text-neon font-bold border border-neon/30">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-foreground">Growth Mindset</h3>
                      <p className="text-muted-foreground">Maintain perspective that neural setbacks are data points for optimization, not failures. Encourage continued rewiring efforts.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber/20 flex items-center justify-center text-cyber font-bold border border-cyber/30">
                      5
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-foreground">Professional Consultation</h3>
                      <p className="text-muted-foreground">Community discussions complement but don't replace personalized medical guidance. Consult healthcare providers for individual treatment plans.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join CTA Section */}
      <section id="join" className="py-20 bg-gradient-to-r from-biotic-dark to-biotic text-white relative overflow-hidden">
        <div className="cyber-grid-bg absolute inset-0 opacity-20"></div>
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1519834584171-e5132a24758f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
            alt="Futuristic connection visualization" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in text-glow">Ready to Rewire Your Neural Pathways?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Create your neural profile to begin tracking your brain's transformation journey and connect with our global network.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#register">
              <Button className="bg-white text-biotic hover:bg-white/90 px-6 py-6 text-lg">
                Initialize Neural Profile
              </Button>
            </a>
            <Link to="/resources">
              <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-biotic px-6 py-6 text-lg">
                Explore Neural Science
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunityPage;
