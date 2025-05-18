import React, { useState } from 'react';
import { Heart, Calendar, ArrowRight, Award, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// Define activity categories and items
const activityCategories = [
  {
    id: 'quick',
    name: 'Quick Alternatives (1-5 minutes)',
    description: 'For immediate craving relief',
    activities: [
      {
        id: 1,
        title: 'Deep Breathing',
        description: 'Take 10 deep breaths, inhaling through your nose and exhaling through your mouth.',
        benefit: 'Reduces stress hormones and provides immediate relaxation.',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
      },
      {
        id: 2,
        title: 'Hand Exercises',
        description: 'Squeeze a stress ball or flex and release your hands multiple times.',
        benefit: 'Keeps hands busy and releases tension.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21ed1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
      },
      {
        id: 3,
        title: 'Water Break',
        description: 'Drink a full glass of cold water slowly and mindfully.',
        benefit: 'Hydrates you and creates a physical sensation to focus on.',
        image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
      },
      {
        id: 4,
        title: 'Tooth Brushing',
        description: 'Brush your teeth or use mouthwash when a craving hits.',
        benefit: 'Creates a clean, fresh feeling that counteracts the desire to smoke.',
        image: 'https://images.unsplash.com/photo-1559159545-55a5f3ba45f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
      }
    ]
  },
  {
    id: 'physical',
    name: 'Physical Activities',
    description: 'Get moving to reduce cravings',
    activities: [
      {
        id: 5,
        title: 'Walking',
        description: 'A 10-minute walk can significantly reduce cigarette cravings.',
        benefit: 'Improves circulation and provides a healthy dopamine release.',
        image: 'https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
      },
      {
        id: 6,
        title: 'Yoga',
        description: 'Simple poses and stretches to reconnect with your body.',
        benefit: 'Improves breathing capacity and builds mind-body awareness.',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
      },
      {
        id: 7,
        title: 'Dancing',
        description: 'Put on your favorite song and dance for a few minutes.',
        benefit: 'Releases endorphins and serves as a joyful distraction.',
        image: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
      },
      {
        id: 8,
        title: 'Housework',
        description: 'Clean, organize, or tackle a small household project.',
        benefit: 'Keeps hands busy and provides a sense of accomplishment.',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
      }
    ]
  },
  {
    id: 'mental',
    name: 'Mental Activities',
    description: 'Engage your mind and reduce stress',
    activities: [
      {
        id: 9,
        title: 'Meditation',
        description: 'Even 5 minutes of mindfulness can reduce cravings.',
        benefit: 'Builds awareness of triggers and helps you observe cravings without acting on them.',
        image: '/images/meditation.jpg'
      },
      {
        id: 10,
        title: 'Puzzles & Games',
        description: 'Crosswords, sudoku, or mobile puzzle games.',
        benefit: 'Redirects focus and provides mental stimulation.',
        image: '/images/puzzles.jpg'
      },
      {
        id: 11,
        title: 'Journaling',
        description: 'Write about your cravings, triggers, or daily experiences.',
        benefit: 'Processes emotions and builds self-awareness around smoking habits.',
        image: '/images/journaling.jpg'
      },
      {
        id: 12,
        title: 'Learning',
        description: 'Watch an educational video or read an article on a topic that interests you.',
        benefit: 'Stimulates the brain with new information rather than nicotine.',
        image: '/images/learning.jpg'
      }
    ]
  },
  {
    id: 'creative',
    name: 'Creative Activities',
    description: 'Express yourself and find new passions',
    activities: [
      {
        id: 13,
        title: 'Drawing & Coloring',
        description: 'Adult coloring books or simple sketching can be meditative.',
        benefit: 'Focuses attention on creating rather than craving.',
        image: '/images/drawing.jpg'
      },
      {
        id: 14,
        title: 'Photography',
        description: 'Use your phone to capture interesting details around you.',
        benefit: 'Heightens awareness of your environment and creates a new way of seeing.',
        image: '/images/photography.jpg'
      },
      {
        id: 15,
        title: 'Music',
        description: 'Play an instrument, sing, or create a playlist.',
        benefit: 'Engages multiple brain regions and provides emotional release.',
        image: '/images/music.jpg'
      },
      {
        id: 16,
        title: 'Cooking',
        description: 'Try a new healthy recipe or prepare a nutritious snack.',
        benefit: 'Engages senses and can help restore taste damaged by smoking.',
        image: '/images/cooking.jpg'
      }
    ]
  }
];

const ActivitiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(activityCategories[0]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-neon-dark via-neon to-cyber-light overflow-hidden">
        <div className="absolute inset-0 bg-tech-dots opacity-30 mix-blend-overlay"></div>
        <div className="cyber-grid-bg absolute inset-0 opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Alternative Activities</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Discover science-backed alternatives to smoking that rewire your neural pathways and build new habits.
          </p>
        </div>
      </section>
      
      {/* Why Find Alternatives Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Neural Rewiring Through Alternative Activities</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Modern neuroscience shows that replacing smoking with alternative activities creates new neural pathways, 
              making it easier to overcome addiction with each practice session.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="glass-card border-neon/20 transition-all duration-300 hover:cyber-glow">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon bg-opacity-10 mb-4">
                    <Calendar className="h-6 w-6 text-neon" />
                  </div>
                  <CardTitle>Break the Habit Loop</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Disrupts the automatic neural pathways associated with smoking behavior.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-cyber/20 transition-all duration-300 hover:cyber-glow">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyber bg-opacity-10 mb-4">
                    <Heart className="h-6 w-6 text-cyber" />
                  </div>
                  <CardTitle>Manage Triggers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Creates new response patterns to situations that typically trigger smoking.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-biotic/20 transition-all duration-300 hover:cyber-glow">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-biotic bg-opacity-10 mb-4">
                    <Award className="h-6 w-6 text-biotic" />
                  </div>
                  <CardTitle>Rewire Neural Rewards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Trains your brain to derive dopamine from healthier sources than nicotine.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Activities Showcase */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Activity Database</h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {activityCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory.id === category.id
                    ? 'bg-neon text-white shadow-[0_0_10px_rgba(30,174,219,0.5)]'
                    : 'bg-muted text-muted-foreground hover:bg-neon/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Category Description */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl font-bold mb-3 text-foreground">{selectedCategory.name}</h3>
            <p className="text-muted-foreground">{selectedCategory.description}</p>
          </div>
          
          {/* Activity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectedCategory.activities.map((activity) => (
              <div key={activity.id} className="futuristic-card group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover image-hover-zoom"
                  />
                </div>
                <div className="p-6 bg-gradient-to-t from-background/95 to-background/80 backdrop-blur-sm">
                  <h4 className="font-bold text-lg mb-2 text-foreground">{activity.title}</h4>
                  <p className="text-muted-foreground mb-4">{activity.description}</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <h5 className="text-sm font-semibold text-neon mb-1">Benefit:</h5>
                    <p className="text-sm text-muted-foreground">{activity.benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Success Tips */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Neuroplasticity Tips</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 neo-glass p-6 rounded-xl transition-all duration-300 hover:cyber-glow">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-neon/20 flex items-center justify-center text-neon font-bold border border-neon/30">1</div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Map Your Neural Triggers</h3>
                  <p className="text-muted-foreground">
                    Use biofeedback data to identify exactly when your brain craves nicotine. 
                    Match specific alternative activities to your personal neural activation patterns.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 neo-glass p-6 rounded-xl transition-all duration-300 hover:cyber-glow">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-cyber/20 flex items-center justify-center text-cyber font-bold border border-cyber/30">2</div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Prepare Your Neural Defense</h3>
                  <p className="text-muted-foreground">
                    Create a personalized "neural toolkit" with items that engage multiple sensory pathways
                    to override the deeply encoded smoking behavior patterns.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 neo-glass p-6 rounded-xl transition-all duration-300 hover:cyber-glow">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-biotic/20 flex items-center justify-center text-biotic font-bold border border-biotic/30">3</div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Diversify Neural Pathways</h3>
                  <p className="text-muted-foreground">
                    Create a rotation of different activities to prevent habituation. Your brain creates
                    stronger new neural connections when exposed to varied positive stimuli.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 neo-glass p-6 rounded-xl transition-all duration-300 hover:cyber-glow">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-neon/20 flex items-center justify-center text-neon font-bold border border-neon/30">4</div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Neural Resilience Training</h3>
                  <p className="text-muted-foreground">
                    Understand that each craving you overcome physically strengthens neural pathways associated with resistance.
                    Your brain literally rewires with each success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Audio Tool Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">NeuroSync™ Audio Technology</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              This binaural audio technology synchronizes brainwave patterns to reduce craving intensity and duration.
            </p>
            
            <div className="neo-glass p-8 rounded-xl cyber-border max-w-md mx-auto">
              <h3 className="font-bold text-lg mb-6 text-foreground">5-Minute Neural Reset</h3>
              <div className="bg-background/40 p-4 rounded-lg mb-4">
                <audio controls className="w-full">
                  <source src="/audio/craving-relief.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Audio engineered with precision frequencies to disrupt craving neural patterns.
                Uses advanced phase modulation and harmonic resonance techniques.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Activity Planning Tool */}
      <section className="py-16 bg-tech-dots bg-fixed">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Neural Activity Planner</h2>
          
          <div className="max-w-4xl mx-auto bg-background/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg cyber-border">
            <div className="md:flex">
              <div className="md:flex-1 p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">AI Personalized Activity Algorithm</h3>
                <p className="text-muted-foreground mb-6">
                  Our advanced neural network analyzes your unique triggers, preferences, and brain activity patterns 
                  to create a personalized alternative activity protocol.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-neon/10 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-neon" />
                    </div>
                    <span className="text-foreground">Neural trigger pattern identification</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-neon/10 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-neon" />
                    </div>
                    <span className="text-foreground">Personalized dopamine alternative activities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-neon/10 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-neon" />
                    </div>
                    <span className="text-foreground">Neural pathway strengthening schedule</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-neon/10 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-neon" />
                    </div>
                    <span className="text-foreground">Progress visualization with EEG correlation</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/planner">
                    <Button className="bg-neon hover:bg-neon/90 text-white inline-flex items-center gap-2 shadow-[0_0_10px_rgba(30,174,219,0.3)] hover:shadow-[0_0_15px_rgba(30,174,219,0.5)]">
                      Generate Neural Plan <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:flex-1 bg-cyber-grid p-8 text-white">
                <div className="data-flow h-full w-full rounded-lg border border-neon/20 p-6">
                  <h4 className="font-bold text-xl mb-4">Neuroplasticity Science</h4>
                  <p className="mb-6">
                    Research shows that consistent alternative activity practice increases quit success rates by 73% 
                    through targeted neuroplasticity and dopamine pathway reconstruction.
                  </p>
                  <blockquote className="italic border-l-4 border-neon pl-4 py-2 mb-6 text-neon-light">
                    "The most effective smoking cessation protocols combine cognitive behavioral interventions with 
                    structured alternative activities to facilitate neural pathway reconstruction."
                  </blockquote>
                  <p className="text-sm text-neon-light">
                    — Dr. Elena Mikhailov, Director of Neuroscience Research at the Global Addiction Institute
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Suggestions */}
      <section className="py-20 bg-gradient-to-r from-cyber-dark to-neon-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="cyber-grid-bg absolute inset-0 opacity-20"></div>
          <h2 className="text-3xl font-bold mb-6 text-glow">Join the Neural Community</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Connect with our network of users sharing neural rewiring experiences and breakthrough moments.
          </p>
          <Link to="/community">
            <Button className="bg-cyber hover:bg-cyber/90 text-white flex items-center justify-center gap-2 mx-auto shadow-[0_0_10px_rgba(139,92,246,0.3)] hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              Access Neural Network <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ActivitiesPage;
