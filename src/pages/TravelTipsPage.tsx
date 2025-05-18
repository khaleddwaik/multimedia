import React, { useRef } from 'react';
import { Check, File, FileText, Book } from 'lucide-react';

const TravelTipsPage = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  
  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-sunset to-sunset-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Travel Tips & Advice</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Expert guidance to make your journey smoother, safer, and more enjoyable.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="#packing" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-white backdrop-blur-sm transition">Packing Tips</a>
            <a href="#budgeting" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-white backdrop-blur-sm transition">Budget Hacks</a>
            <a href="#flights" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-white backdrop-blur-sm transition">Flight Tips</a>
            <a href="#safety" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-white backdrop-blur-sm transition">Safety Advice</a>
          </div>
        </div>
      </section>
      
      {/* Audio Tip Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Packing Checklist (Audio Guide)</h2>
              <p className="text-gray-600 mb-6">
                Listen to our quick audio guide on essential items to pack for any trip. Our travel expert shares her top packing strategies learned from visiting over 50 countries.
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <button 
                  onClick={playAudio}
                  className="bg-ocean text-white px-6 py-3 rounded-lg font-medium hover:bg-ocean-dark transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Play
                </button>
                
                <button 
                  onClick={pauseAudio}
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Pause
                </button>
              </div>
              
              {/* Hidden audio element */}
              <audio ref={audioRef} className="hidden">
                <source src="https://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                Note: This is a placeholder audio. In a real application, this would be a custom recorded packing guide.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Downloadable Resources - NEW */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Free Travel Resources</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-ocean/10 p-3 rounded-lg mr-4">
                  <FileText className="h-6 w-6 text-ocean" />
                </div>
                <h3 className="font-bold">Ultimate Packing Checklist</h3>
              </div>
              <p className="text-gray-600 mb-4">Never forget essential items again with our comprehensive packing list for any type of trip.</p>
              <button className="text-ocean hover:text-ocean-dark font-medium flex items-center">
                Download PDF
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-sunset/10 p-3 rounded-lg mr-4">
                  <File className="h-6 w-6 text-sunset" />
                </div>
                <h3 className="font-bold">Travel Budget Template</h3>
              </div>
              <p className="text-gray-600 mb-4">Plan your trip finances with our Excel template that helps track expenses and stay within budget.</p>
              <button className="text-ocean hover:text-ocean-dark font-medium flex items-center">
                Download Excel
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-earth/10 p-3 rounded-lg mr-4">
                  <Book className="h-6 w-6 text-earth" />
                </div>
                <h3 className="font-bold">Language Phrasebook</h3>
              </div>
              <p className="text-gray-600 mb-4">Essential phrases in 10 languages to help you communicate during your international travels.</p>
              <button className="text-ocean hover:text-ocean-dark font-medium flex items-center">
                Download PDF
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tips Sections */}
      <section id="packing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Packing Tips */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-ocean bg-opacity-10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <h2 className="text-3xl font-bold">Packing Tips</h2>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3">Pack Light, Travel Right</h3>
                <p className="text-gray-700 mb-4">
                  The cardinal rule of travel is to pack light. You'll rarely regret bringing too little – you can always buy what you need – but you'll often regret bringing too much.
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Roll clothes instead of folding to save space and reduce wrinkles</li>
                  <li>Pack versatile clothing items that can be mixed and matched</li>
                  <li>Use packing cubes to organize and compress your belongings</li>
                  <li>Wear your bulkiest items during transit to save space in your luggage</li>
                  <li>Pack a lightweight, packable day bag for daily excursions</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3">Essential Packing Checklist</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Passport and ID</li>
                    <li>Travel insurance documents</li>
                    <li>Flight and accommodation details</li>
                    <li>Credit cards and local currency</li>
                    <li>Phone and chargers</li>
                    <li>Basic toiletries</li>
                  </ul>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Medication and first aid supplies</li>
                    <li>Universal power adapter</li>
                    <li>Weather-appropriate clothing</li>
                    <li>Comfortable walking shoes</li>
                    <li>Reusable water bottle</li>
                    <li>Portable power bank</li>
                  </ul>
                </div>

                {/* Pro Tips - NEW */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Check className="h-5 w-5 text-ocean mr-2" /> Pro Tips from Seasoned Travelers
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ocean mr-2 mt-0.5" /> 
                      <span>Keep a digital copy of all your important documents in cloud storage you can access anywhere.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ocean mr-2 mt-0.5" /> 
                      <span>Pack a small laundry kit to wash clothes during longer trips—it will allow you to pack fewer items.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ocean mr-2 mt-0.5" /> 
                      <span>A small foldable tote bag can be useful for carrying souvenirs, groceries, or as an extra bag for day trips.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Budgeting Tips */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-sunset bg-opacity-10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <h2 className="text-3xl font-bold">Budgeting Tips</h2>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3">Save Money While Traveling</h3>
                <p className="text-gray-700 mb-4">
                  Traveling doesn't have to break the bank. With smart planning and savvy decisions, you can stretch your budget further.
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Travel during shoulder season for lower prices and fewer crowds</li>
                  <li>Use flight comparison websites and set up price alerts</li>
                  <li>Stay in accommodations with kitchen facilities to save on meals</li>
                  <li>Use public transportation instead of taxis or rental cars</li>
                  <li>Research free activities and attractions at your destination</li>
                  <li>Get a credit card with no foreign transaction fees</li>
                  <li>Eat where locals eat, away from tourist areas</li>
                </ul>
              </div>
            </div>
            
            {/* Flight Tips */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-earth bg-opacity-10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✈️</span>
                </div>
                <h2 className="text-3xl font-bold">Flight Hacks</h2>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3">Survive Long Flights in Comfort</h3>
                <p className="text-gray-700 mb-4">
                  Long-haul flights don't have to be an ordeal. These tips will help you arrive at your destination feeling refreshed.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Book flights on Tuesday or Wednesday for potential savings</li>
                    <li>Use incognito mode when searching for flights</li>
                    <li>Sign up for airline loyalty programs even before your first flight</li>
                    <li>Check in online 24 hours before your flight for better seats</li>
                  </ul>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Bring a neck pillow, eye mask, and noise-cancelling headphones</li>
                    <li>Stay hydrated and avoid excessive alcohol</li>
                    <li>Get up and walk around every hour to prevent stiffness</li>
                    <li>Bring entertainment: books, downloaded movies, podcasts</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Safety Tips */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-ocean bg-opacity-10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h2 className="text-3xl font-bold">Safety First</h2>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3">Stay Safe While Traveling</h3>
                <p className="text-gray-700 mb-4">
                  Travel safety is paramount. Follow these tips to protect yourself, your belongings, and your peace of mind.
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Research your destination's safety situation before traveling</li>
                  <li>Register with your country's travel advisory service</li>
                  <li>Keep digital and physical copies of important documents</li>
                  <li>Share your itinerary with a trusted friend or family member</li>
                  <li>Use a money belt or anti-theft bag for valuables</li>
                  <li>Know basic phrases in the local language, especially for emergencies</li>
                  <li>Purchase travel insurance that covers medical emergencies</li>
                  <li>Be aware of common scams at your destination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TravelTipsPage;
