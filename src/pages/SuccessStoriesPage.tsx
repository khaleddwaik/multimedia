import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Activity, ArrowRight, Shield, Star, Volume, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import testimonialVideo from '/Users/khaleddwaik/Desktop/smoking/last.mp4';
import testimonialAudio from '/Users/khaleddwaik/Desktop/smoking/src/edited_voice (1).mp4';
import testimonialAudioPic from "/Users/khaleddwaik/Desktop/smoking/Screenshot 2025-05-17 at 10.58.21 PM.png";
const successStories = [
  {
    id: 1,
    name: "Michael Johnson",
    age: 42,
    duration: "12 years",
    quitPeriod: "2 years",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    story: "I started using the NeuroQuit.AI platform after multiple failed attempts with traditional methods. The neural pattern recognition identified my specific triggers with uncanny accuracy. During moments when I would typically crave a cigarette, the AI intervention system would send personalized biofeedback exercises that completely redirected my neural response. The quantum evolution of my personalized plan as I progressed through different stages was remarkable.",
    advice: "Trust the neural recalibration process. The first week seems impossible, but the AI adapts to your specific neural patterns in real-time."
  },
  {
    id: 2,
    name: "Sarah Williams",
    age: 35,
    duration: "8 years",
    quitPeriod: "8 months",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    story: "The cognitive rewiring protocol completely transformed how my brain responded to smoking triggers. After scanning my neural patterns, the system identified that my addiction was primarily tied to stress response pathways rather than pure nicotine dependence. This personalized insight led to a completely different approach than I'd tried before. The neural override techniques gave me instant relief during cravings, and the biometric feedback showed me in real-time how my brain was healing.",
    advice: "Use the biometric visualization tools daily. Seeing the neural pathway reconfiguration happening in real-time provides incredible motivation."
  },
  {
    id: 3,
    name: "David Chen",
    age: 29,
    duration: "6 years",
    quitPeriod: "1 year",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    story: "As a software developer, I was naturally skeptical about the AI claims. But the neural network adaptation was unlike anything I'd experienced. The system predicted my cravings with 93.8% accuracy and provided intervention before I even realized I was about to have a craving. The quantum support matching connected me with others whose neural patterns complemented mine for optimal reciprocal support. The data visualization of my neural recovery kept me motivated through the most challenging phases.",
    advice: "Allow the quantum computing system to match you with optimal support partners. The neural compatibility algorithm creates connections that traditional support groups can't match."
  },
  {
    id: 4,
    name: "Lisa Rodriguez",
    age: 38,
    duration: "15 years",
    quitPeriod: "6 months",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    story: "The neural imaging of my dopamine system before starting was a wake-up call. Seeing the quantifiable damage in my neural pathways made the consequences real in a way that general health warnings never did. The personalized neural recovery timeline gave me specific milestones to work toward. Watching my neural scans gradually normalize over weeks provided tangible proof that the cognitive rewiring was working. The synthetic dopamine regulation during critical craving periods was revolutionary.",
    advice: "Don't skip the daily neural recalibration exercises. They seem simple, but they're using advanced neuroplasticity algorithms to rewire your addictive pathways."
  }
];

const SuccessStoriesPage: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState(successStories[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVoicePlaying, setIsVoicePlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Audio progress state
  const [voiceCurrentTime, setVoiceCurrentTime] = useState(0);
  const [voiceDuration, setVoiceDuration] = useState(0);
  const [voiceProgress, setVoiceProgress] = useState(0);

  // Format mm:ss
  const formatTime = (t: number) => {
    const mm = Math.floor(t / 60)
      .toString()
      .padStart(2, '0');
    const ss = Math.floor(t % 60)
      .toString()
      .padStart(2, '0');
    return `${mm}:${ss}`;
  };

  // Wire up audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => setVoiceDuration(audio.duration);
    const onTime = () => {
      setVoiceCurrentTime(audio.currentTime);
      setVoiceProgress((audio.currentTime / (audio.duration || 1)) * 100);
    };

    audio.addEventListener('loadedmetadata', onLoaded);
    audio.addEventListener('timeupdate', onTime);
    return () => {
      audio.removeEventListener('loadedmetadata', onLoaded);
      audio.removeEventListener('timeupdate', onTime);
    };
  }, []);

  const togglePlay = () => setIsPlaying(p => !p);
  const toggleVoice = () => {
    const next = !isVoicePlaying;
    setIsVoicePlaying(next);
    if (audioRef.current) {
      next ? audioRef.current.play() : audioRef.current.pause();
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-neon to-cyber">
        <div className="absolute inset-0 cyber-grid-bg opacity-30" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Neural Success Profiles
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Documented neural transformation journeys from individuals who have
            successfully reconfigured their addiction pathways.
          </p>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-16 cyber-grid-bg bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-neon">
            Featured Neural Transformations
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
              {successStories.map(story => (
                <div
                  key={story.id}
                  onClick={() => setSelectedStory(story)}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 neo-glass ${
                    selectedStory.id === story.id
                      ? 'cyber-border cyber-glow border-l-4 border-neon'
                      : 'hover:border hover:border-neon/30'
                  }`}
                >
                  <h3 className="font-bold text-lg">{story.name}</h3>
                  <p className="text-sm text-gray-600">
                    Neural recalibration: {story.quitPeriod}
                  </p>
                  <div className="flex items-center mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Zap key={i} className="h-4 w-4 text-neon" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-2">
              <Card className="neo-glass cyber-border rounded-xl overflow-hidden">
                <div className="md:flex">
                  <img
                    src={selectedStory.image}
                    alt={selectedStory.name}
                    className="h-48 w-full object-cover md:h-full md:w-48"
                  />
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-neon font-semibold">
                      Neural Transformation Profile
                    </div>
                    <h2 className="mt-2 text-2xl font-bold">
                      {selectedStory.name}
                    </h2>
                    <div className="mt-2 flex gap-4">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Age:</span>{' '}
                        {selectedStory.age}
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Period:</span>{' '}
                        {selectedStory.duration}
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Recalibration:</span>{' '}
                        {selectedStory.quitPeriod}
                      </div>
                    </div>
                    <div className="mt-4 text-gray-700 space-y-4">
                      <p>{selectedStory.story}</p>
                      <div className="pt-4 border-t border-gray-200">
                        <h3 className="font-bold text-lg mb-2">
                          Neural Advice:
                        </h3>
                        <p className="italic">{selectedStory.advice}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Video Testimonial */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="cyber-grid-bg h-full w-full data-flow" />
        </div>
        <div className="container mx-auto px-4 relative text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Featured Customer Video
          </h2>
          <div className="relative w-full max-w-3xl mx-auto pb-[56.25%]">
            {isPlaying ? (
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                controls
              >
                <source src={testimonialVideo} type="video/mp4" />
              </video>
            ) : (
              <>
                <img
                  src={testimonialAudioPic}
                  alt="Video thumbnail"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <Button
                  onClick={togglePlay}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neon hover:bg-neon/90 text-black rounded-full p-4"
                >
                  <Video className="h-8 w-8" />
                </Button>
              </>
            )}
          </div>
          <p className="mt-4 text-white font-semibold">
            Khaled's Transformation Journey: “After 7 years of smoking, I never
            thought I could quit. NeuroQuit.AI changed everything.”
          </p>
        </div>
      </section>

      {/* Audio Testimonial */}
      <section className="py-16 bg-gray-50 cyber-grid-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-neon">
            Audio Testimonial
          </h2>
          <Card className="neo-glass cyber-border p-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-4">
              <img
                src={testimonialAudioPic}
                alt="Voice testimonial profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-lg">Khaled Dwaik</h3>
                <p className="text-sm text-gray-600">Smoke-free for 1 year</p>
              </div>
            </div>
            <div className="mt-4">
              <audio ref={audioRef} src={testimonialAudio} preload="metadata" />
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-gray-700 mb-4 italic">
                  “The neural recalibration process was unlike anything I had
                  tried before. Listen to my full experience:”
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex-1 mr-4">
                    <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-neon h-full transition-width duration-100"
                        style={{ width: `${voiceProgress}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{formatTime(voiceCurrentTime)}</span>
                      <span>{formatTime(voiceDuration)}</span>
                    </div>
                  </div>
                  <Button
                    onClick={toggleVoice}
                    variant="outline"
                    className="rounded-full p-2"
                  >
                    <Volume
                      className={`h-5 w-5 ${
                        isVoicePlaying ? 'text-neon' : ''
                      }`}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 cyber-grid-bg bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-neon">
            Neural Transformation Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center neo-glass cyber-border p-6 hover:cyber-glow transition-all duration-300">
              <Shield className="h-8 w-8 text-neon mb-4 rounded-full bg-neon bg-opacity-20 p-2 inline-flex" />
              <div className="text-4xl font-bold text-neon mb-2">12K+</div>
              <p className="text-gray-600">Neural Patterns Analyzed</p>
            </div>
            <div className="text-center neo-glass cyber-border p-6 hover:cyber-glow transition-all duration-300">
              <Activity className="h-8 w-8 text-cyber mb-4 rounded-full bg-cyber bg-opacity-20 p-2 inline-flex" />
              <div className="text-4xl font-bold text-cyber mb-2">94%</div>
              <p className="text-gray-600">Neural Reconfiguration Success</p>
            </div>
            <div className="text-center neo-glass cyber-border p-6 hover:cyber-glow transition-all duration-300">
              <Zap className="h-8 w-8 text-biotic mb-4 rounded-full bg-biotic bg-opacity-20 p-2 inline-flex" />
              <div className="text-4xl font-bold text-biotic mb-2">8.2M</div>
              <p className="text-gray-600">Neural Interventions Delivered</p>
            </div>
            <div className="text-center neo-glass cyber-border p-6 hover:cyber-glow transition-all duration-300">
              <Star className="h-8 w-8 text-neon-dark mb-4 rounded-full bg-neon-dark bg-opacity-20 p-2 inline-flex" />
              <div className="text-4xl font-bold text-neon-dark mb-2">4.9</div>
              <p className="text-gray-600">Cognitive Satisfaction Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="cyber-grid-bg h-full w-full" />
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Share Your Neural Transformation
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-300">
            Submit your cognitive reconfiguration journey to inspire others
            beginning their neural freedom path.
          </p>
          <Link
            to="/contact"
            className="btn-primary cyber-glow inline-flex items-center gap-2"
          >
            Submit Your Neural Profile <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default SuccessStoriesPage;
