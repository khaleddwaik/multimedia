
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Santorini, Greece',
    description: 'Experience breathtaking sunsets and iconic white buildings overlooking the Aegean Sea.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Islands',
  },
  {
    id: 2,
    name: 'Kyoto, Japan',
    description: 'Discover ancient temples, traditional gardens, and the beauty of cherry blossoms in spring.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Cultural',
  },
  {
    id: 3,
    name: 'Machu Picchu, Peru',
    description: 'Explore the ancient Incan citadel set high in the Andes Mountains, a wonder of engineering.',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Historical',
  },
  {
    id: 4,
    name: 'Bora Bora, French Polynesia',
    description: 'Relax in overwater bungalows with turquoise waters and pristine beaches all around you.',
    image: 'https://images.unsplash.com/photo-1568548634530-fdfb7c50f2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Islands',
  },
  {
    id: 5,
    name: 'Marrakech, Morocco',
    description: 'Get lost in vibrant markets, ornate palaces, and a rich blend of cultural influences.',
    image: 'https://images.unsplash.com/photo-1575235527753-63ca2deee32f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Cultural',
  },
  {
    id: 6,
    name: 'Swiss Alps, Switzerland',
    description: 'Ski down world-class slopes with stunning mountain vistas and charming alpine villages.',
    image: 'https://images.unsplash.com/photo-1486082570281-d942af5c39b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Mountains',
  },
];

const categories = ['All', 'Islands', 'Cultural', 'Historical', 'Mountains'];

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card h-[400px]">
      <img 
        src={destination.image} 
        alt={destination.name} 
        className="w-full h-full object-cover image-hover-zoom" 
      />
      <div className="destination-card-overlay">
        <span className="bg-primary/80 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">
          {destination.category}
        </span>
        <h3 className="text-2xl font-bold font-playfair mb-2 text-shadow-lg">{destination.name}</h3>
        <p className="text-gray-200 mb-4 text-shadow">{destination.description}</p>
        <button className="btn-primary py-2 px-4 inline-flex items-center gap-2 text-sm">
          Explore <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

const DestinationsPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredDestinations = selectedCategory === 'All'
    ? destinations
    : destinations.filter(dest => dest.category === selectedCategory);

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="hero-section mb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-4 text-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Discover Extraordinary Destinations
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore handpicked travel experiences curated by our luxury travel experts
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="btn-primary">Start Your Journey</button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="section-title">Popular Destinations</h2>
        <p className="section-subtitle">
          From tropical paradises to cultural treasures, discover the world's most inspiring places
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((destination) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <DestinationCard destination={destination} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Experience */}
      <section className="bg-gray-100 py-16 mb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1504607798333-52a30db54a5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Luxury Maldives Retreat" 
                  className="w-full h-[500px] object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-primary/80 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">
                    Featured
                  </span>
                  <h3 className="text-2xl font-bold font-playfair text-white mb-2">
                    Ultimate Maldives Retreat
                  </h3>
                  <p className="text-gray-200 mb-4">
                    7 days of luxury in paradise with private butler service
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
                Experience Pure Luxury
              </h2>
              <p className="text-gray-600 mb-6">
                Indulge in an exclusive retreat where crystal clear waters meet world-class service. Our curated Maldives experience offers:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-primary text-white p-1 rounded-full mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <strong className="font-medium">Overwater Villa Suite</strong>
                    <p className="text-gray-600">Direct lagoon access with private infinity pool</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white p-1 rounded-full mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <strong className="font-medium">Personal Butler</strong>
                    <p className="text-gray-600">24/7 service tailored to your preferences</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white p-1 rounded-full mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <strong className="font-medium">Daily Spa Treatments</strong>
                    <p className="text-gray-600">Rejuvenate with signature treatments for two</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white p-1 rounded-full mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <strong className="font-medium">Private Experiences</strong>
                    <p className="text-gray-600">Sunset sailing and private dining on a secluded sandbank</p>
                  </div>
                </li>
              </ul>
              <button className="btn-primary inline-flex items-center gap-2">
                View Package <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="section-title">What Our Travelers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-sm text-gray-500">Bali Retreat</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="italic text-gray-600 mb-4">
              "The attention to detail was impeccable. From airport pickup to our departure, WanderLuxe created memories we'll cherish forever."
            </blockquote>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <h4 className="font-bold">Michael Rodriguez</h4>
                <p className="text-sm text-gray-500">Japan Explorer</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="italic text-gray-600 mb-4">
              "Our guide's knowledge of hidden gems made this trip extraordinary. We experienced Japan in a way most tourists never do."
            </blockquote>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <h4 className="font-bold">Emma & David Wilson</h4>
                <p className="text-sm text-gray-500">Greek Islands Cruise</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="italic text-gray-600 mb-4">
              "The private yacht experience was worth every penny. Each island visit was perfectly timed to avoid crowds while maximizing the experience."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative bg-gray-900 text-white py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
            alt="Journey background" 
            className="w-full h-full object-cover opacity-30" 
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Let us craft a bespoke travel experience tailored to your dreams and desires.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary">Plan My Trip</button>
            <button className="btn-secondary">Download Brochure</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage;
