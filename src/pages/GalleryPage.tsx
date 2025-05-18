import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Camera, Map, Calendar, User, MapPin } from 'lucide-react';

// Enhanced image data with more context
const galleryImages = [
  {
    id: 1,
    title: "Alpine Majesty",
    location: "Swiss Alps",
    date: "June 2023",
    photographer: "Elena Winters",
    description: "Dramatic mountain peaks rising above the clouds at sunrise, capturing the serene beauty of the alpine landscape.",
    src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Tropical Paradise",
    location: "Bali, Indonesia",
    date: "April 2023",
    photographer: "Marcus Chen",
    description: "Pristine turquoise waters meeting golden sands, with gentle waves lapping the shore under a perfect blue sky.",
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Ancient Wonders",
    location: "Petra, Jordan",
    date: "October 2022",
    photographer: "Amir Hassan",
    description: "The iconic Treasury carved into rose-colored stone, illuminated by first light as it filters through the narrow canyon.",
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Enchanted Path",
    location: "Redwood Forest, USA",
    date: "May 2023",
    photographer: "Sarah Rodriguez",
    description: "Sunlight filtering through towering ancient trees, creating a mystical atmosphere in this primeval forest.",
    src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Desert Dreams",
    location: "Sahara Desert",
    date: "January 2023",
    photographer: "Omar Al-Farsi",
    description: "Endless rippling sand dunes stretching to the horizon, capturing the stark and mesmerizing beauty of the desert.",
    src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Cascading Power",
    location: "Skógafoss, Iceland",
    date: "July 2022",
    photographer: "Erik Magnusson",
    description: "Majestic waterfall thundering down a cliff face, creating a perpetual mist and rainbow against the lush green backdrop.",
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const GalleryPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState<"color" | "grayscale" | "sepia">("color");
  const [showDetails, setShowDetails] = useState(false);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  const getFilterClass = (filter: "color" | "grayscale" | "sepia") => {
    switch (filter) {
      case "grayscale":
        return "grayscale";
      case "sepia":
        return "sepia";
      default:
        return "";
    }
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-ocean-dark to-earth-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Travel Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Experience the beauty of our world through captivating images from talented travel photographers.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm">
              <span>All images © their respective photographers</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Slider Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveFilter("color")}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  activeFilter === "color"
                    ? "bg-ocean text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Color
              </button>
              <button
                onClick={() => setActiveFilter("grayscale")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeFilter === "grayscale"
                    ? "bg-ocean text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Grayscale
              </button>
              <button
                onClick={() => setActiveFilter("sepia")}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  activeFilter === "sepia"
                    ? "bg-ocean text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Sepia
              </button>
            </div>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Main Slider */}
            <div className="relative h-[70vh] overflow-hidden rounded-2xl shadow-2xl">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className={`w-full h-full object-cover transition-all duration-300 ${getFilterClass(activeFilter)}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-2xl font-bold">{image.title}</h3>
                        <p className="text-lg">{image.location}</p>
                      </div>
                      <button 
                        onClick={() => setShowDetails(!showDetails)} 
                        className="bg-white/30 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition"
                      >
                        {showDetails ? 'Hide Details' : 'Show Details'}
                      </button>
                    </div>
                    
                    {showDetails && (
                      <div className="mt-4 p-4 bg-black/40 backdrop-blur-sm rounded-lg animate-fade-in">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-ocean" />
                            <span className="text-sm">{image.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Camera className="h-4 w-4 mr-2 text-ocean" />
                            <span className="text-sm">{image.photographer}</span>
                          </div>
                          <div className="flex items-center">
                            <Map className="h-4 w-4 mr-2 text-ocean" />
                            <span className="text-sm">{image.location}</span>
                          </div>
                        </div>
                        <p className="text-sm text-white/90">{image.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            
            {/* Thumbnails */}
            <div className="flex justify-center mt-6 gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-ocean" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Style Comparison */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-center mb-8">Compare Image Styles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-xl">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img
                    src={galleryImages[currentSlide].src}
                    alt="Color version"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-center mt-3 font-medium">Color</p>
                <p className="text-center text-sm text-gray-500">Original color balance and contrast</p>
              </div>
              
              <div className="overflow-hidden rounded-xl">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img
                    src={galleryImages[currentSlide].src}
                    alt="Grayscale version"
                    className="w-full h-full object-cover grayscale hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-center mt-3 font-medium">Grayscale</p>
                <p className="text-center text-sm text-gray-500">Focuses on light, shadow, and texture</p>
              </div>
              
              <div className="overflow-hidden rounded-xl">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img
                    src={galleryImages[currentSlide].src}
                    alt="Sepia version"
                    className="w-full h-full object-cover sepia hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-center mt-3 font-medium">Sepia</p>
                <p className="text-center text-sm text-gray-500">Vintage effect with warm brown tones</p>
              </div>
            </div>
          </div>
          
          {/* Photography Tips Section - NEW */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Travel Photography Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-3">Capturing the Perfect Moment</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-ocean/10 rounded-full p-1 mr-3 mt-1">
                      <span className="text-ocean">1</span>
                    </div>
                    <span>Wake up early for golden hour lighting and fewer tourists in your shots</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-ocean/10 rounded-full p-1 mr-3 mt-1">
                      <span className="text-ocean">2</span>
                    </div>
                    <span>Include people in your landscapes to add scale and storytelling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-ocean/10 rounded-full p-1 mr-3 mt-1">
                      <span className="text-ocean">3</span>
                    </div>
                    <span>Use the rule of thirds to compose more interesting and balanced images</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-3">Gear Recommendations</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-sunset/10 rounded-full p-1 mr-3 mt-1">
                      <span className="text-sunset">1</span>
                    </div>
                    <span>A versatile zoom lens (24-70mm) covers most travel photography needs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sunset/10 rounded-full p-1 mr-3 mt-1">
                      <span className="text-sunset">2</span>
                    </div>
                    <span>Invest in a lightweight tripod for night photography and crisp shots</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sunset/10 rounded-full p-1 mr-3 mt-1">
                      <span className="text-sunset">3</span>
                    </div>
                    <span>Polarizing filters reduce glare and enhance colors, especially for landscapes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Photo Collection</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500 ${getFilterClass(activeFilter)}`}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                    <MapPin className="h-3 w-3" /> {image.location}
                  </div>
                  <p className="text-gray-600 mt-2 text-sm line-clamp-2">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
