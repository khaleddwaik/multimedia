
import React, { useState } from 'react';
import { Calendar, MapPin, Search, ArrowRight, Globe, Clock, Users, Compass, Check } from 'lucide-react';
import { toast } from 'sonner';

const PlannerPage = () => {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    travelers: '1',
    travelStyle: 'balanced',
    interests: [] as string[],
    budget: 'medium'
  });
  
  const interests = [
    "Nature & Outdoors", "Cultural Experiences", "Food & Cuisine", 
    "History & Architecture", "Adventure Activities", "Beach & Relaxation",
    "Shopping", "Nightlife", "Photography"
  ];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleInterestToggle = (interest: string) => {
    setFormData(prev => {
      if (prev.interests.includes(interest)) {
        return {
          ...prev,
          interests: prev.interests.filter(i => i !== interest)
        };
      } else {
        return {
          ...prev,
          interests: [...prev.interests, interest]
        };
      }
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Trip planning form submitted:", formData);
    toast.success("Your trip plan has been created! Check your email for details.");
  };
  
  const openGoogleMaps = () => {
    if (formData.destination) {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formData.destination)}`, '_blank');
    } else {
      toast.error("Please enter a destination first");
    }
  };
  
  // New popular destinations data
  const popularDestinations = [
    { name: "Bali, Indonesia", type: "Beach Paradise" },
    { name: "Kyoto, Japan", type: "Cultural Experience" },
    { name: "Barcelona, Spain", type: "City Exploration" },
    { name: "Costa Rica", type: "Nature & Adventure" },
    { name: "Marrakech, Morocco", type: "Exotic Getaway" }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-earth to-earth-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Plan Your Perfect Trip</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Use our interactive planner to create a customized itinerary for your next adventure.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-white/70 mr-2" />
              <span className="text-sm font-medium">Save planning time</span>
            </div>
            <div className="flex items-center">
              <Compass className="h-5 w-5 text-white/70 mr-2" />
              <span className="text-sm font-medium">Personalized itineraries</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-white/70 mr-2" />
              <span className="text-sm font-medium">Expert recommendations</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Inspiration Section - NEW */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Popular Right Now</h2>
          <div className="flex overflow-x-auto pb-4 space-x-4 scrollbar-none">
            {popularDestinations.map((dest, index) => (
              <div 
                key={index} 
                className="min-w-[200px] bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition cursor-pointer"
                onClick={() => {
                  setFormData({...formData, destination: dest.name});
                  toast.info(`${dest.name} selected! Now choose your dates.`);
                }}
              >
                <h3 className="font-bold text-gray-800">{dest.name}</h3>
                <p className="text-sm text-gray-500">{dest.type}</p>
                <div className="mt-2 text-xs text-ocean font-medium flex items-center">
                  <span>Trending</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Planner Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-ocean p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Your Journey Starts Here</h2>
                <p className="mb-8">
                  Fill in the form to create your personalized travel plan. Our system will generate recommendations based on your preferences.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Choose Destination</h3>
                      <p className="text-sm opacity-80">Select where you want to go</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="w-6 h-6 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Set Dates</h3>
                      <p className="text-sm opacity-80">When will you travel?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Search className="w-6 h-6 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Customize</h3>
                      <p className="text-sm opacity-80">Tell us your preferences</p>
                    </div>
                  </div>
                </div>
                
                {/* What You'll Get - NEW */}
                <div className="mt-12 pt-6 border-t border-white/20">
                  <h3 className="font-semibold mb-4">What You'll Get:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 mt-0.5" />
                      <span className="text-sm">Personalized day-by-day itinerary</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 mt-0.5" />
                      <span className="text-sm">Curated attractions based on interests</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 mt-0.5" />
                      <span className="text-sm">Restaurant recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 mt-0.5" />
                      <span className="text-sm">Accommodation suggestions</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                        Where do you want to go?
                      </label>
                      <div className="relative">
                        <input
                          id="destination"
                          name="destination"
                          type="text"
                          required
                          value={formData.destination}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-ocean"
                          placeholder="City, country, or region"
                        />
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                          Start Date
                        </label>
                        <input
                          id="startDate"
                          name="startDate"
                          type="date"
                          required
                          value={formData.startDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-ocean"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                          End Date
                        </label>
                        <input
                          id="endDate"
                          name="endDate"
                          type="date"
                          required
                          value={formData.endDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-ocean"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-1">
                          Number of Travelers
                        </label>
                        <select
                          id="travelers"
                          name="travelers"
                          value={formData.travelers}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-ocean"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                          <option value="11+">11+</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-ocean"
                        >
                          <option value="budget">Budget-friendly</option>
                          <option value="medium">Mid-range</option>
                          <option value="luxury">Luxury</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="travelStyle" className="block text-sm font-medium text-gray-700 mb-1">
                        Travel Style
                      </label>
                      <select
                        id="travelStyle"
                        name="travelStyle"
                        value={formData.travelStyle}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-ocean"
                      >
                        <option value="relaxed">Relaxed & Slow-paced</option>
                        <option value="balanced">Balanced Mix</option>
                        <option value="active">Active & Fast-paced</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Interests (Select all that apply)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {interests.map(interest => (
                          <button
                            key={interest}
                            type="button"
                            onClick={() => handleInterestToggle(interest)}
                            className={`px-4 py-2 text-sm rounded-full ${
                              formData.interests.includes(interest)
                                ? "bg-ocean text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {interest}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-2">
                      <button 
                        type="button" 
                        onClick={openGoogleMaps}
                        className="flex items-center text-ocean hover:text-ocean-dark"
                      >
                        <span className="mr-2">View destination on Google Maps</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-ocean hover:bg-ocean-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
                      >
                        Create My Trip Plan
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Travel Tips Section - NEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Trip Planning Tips</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-ocean" /> When to Book
                </h3>
                <p className="text-gray-700 mb-4">
                  For the best deals, book flights 2-3 months in advance for domestic trips and 5-6 months for international journeys. Be flexible with your dates if possible.
                </p>
                <div className="text-sm text-gray-600 italic">
                  Pro tip: Tuesday afternoons often have the best flight prices!
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-ocean" /> Destination Research
                </h3>
                <p className="text-gray-700 mb-4">
                  Research local customs, basic phrases, and cultural norms before you go. Check if you need any visas or vaccinations well in advance.
                </p>
                <div className="text-sm text-gray-600 italic">
                  Pro tip: Download offline maps of your destination before your trip!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Assistant Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need Inspiration?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our AI travel assistant can help you discover destinations based on your preferences.
            </p>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-ocean to-sunset flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-2xl font-semibold">Plan My Trip AI Assistant</h3>
                <p className="text-gray-600">Ask me anything about destinations, activities, or travel logistics!</p>
                
                <div className="w-full max-w-md mt-4 relative">
                  <input
                    type="text"
                    placeholder="e.g., 'Where should I go for hiking in June?'"
                    className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-ocean"
                  />
                  <button 
                    onClick={() => toast.info("AI Assistant is still in development. Check back soon!")}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-ocean hover:text-ocean-dark"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlannerPage;
