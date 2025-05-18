
import React, { useState, useEffect } from 'react';

const quotes = [
  { text: "Travel isn't always pretty. It isn't always comfortable. Sometimes it hurts, it even breaks your heart. But that's OK. The journey changes you.", author: "Anthony Bourdain" },
  { text: "The world is a book and those who do not travel read only one page.", author: "Saint Augustine" },
  { text: "Travel makes one modest. You see what a tiny place you occupy in the world.", author: "Gustave Flaubert" },
  { text: "We travel not to escape life, but for life not to escape us.", author: "Anonymous" },
  { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
  { text: "Travel far enough, you meet yourself.", author: "David Mitchell" },
  { text: "Wherever you go, go with all your heart.", author: "Confucius" },
  { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
];

interface QuoteProps {
  className?: string;
}

const RandomQuote: React.FC<QuoteProps> = ({ className = "" }) => {
  const [quote, setQuote] = useState(quotes[0]);
  
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);
  
  return (
    <div className={`italic text-center ${className}`}>
      <p className="quote-text">"{quote.text}"</p>
      <p className="text-sm mt-2 font-medium">— {quote.author}</p>
    </div>
  );
};

export default RandomQuote;
