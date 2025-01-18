// Scholarship Community Section with Horizontal Scroll
import { useRef } from 'react';

const CommunitySection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gray-100 relative">
      <h2 className="text-center text-3xl font-bold mb-6">The Scholarship Community</h2>
      
      {/* Left Scroll Button */}
      <button 
        onClick={scrollLeft} 
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-3 rounded-full shadow-md hover:bg-green-600"
      >
        &#8592;
      </button>

      {/* Scrollable Image Gallery */}
      <div 
        ref={scrollRef} 
        className="flex overflow-x-scroll scrollbar-hide space-x-4 px-10"
      >
        {Array.from({ length: 18 }, (_, i) => (
          <img
            key={i}
            src={`/images/community_${i + 1}.jpg`}
            alt={`Community ${i + 1}`}
            className="w-60 h-60 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
          />
        ))}
      </div>

      {/* Right Scroll Button */}
      <button 
        onClick={scrollRight} 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-3 rounded-full shadow-md hover:bg-green-600"
      >
        &#8594;
      </button>
    </section>
  );
};

export default CommunitySection;
