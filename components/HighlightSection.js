import React from "react";

const HighlightSection = () => {
  const highlights = [
    {
      title: "Are you a teacher?",
      subtitle: "Get your students listed on the platform.",
      description: "See all scholarships",
      image: "/images/ht2.jpeg",
      link: "#",
    },
    {
      title: "You can be anywhere in the world",
      description: "See all scholarships",
      image: "/images/person.jpg",
      link: "#",
    },
    {
      title: "While students get closer to their dreams",
      description: "See all graduates",
      image: "/images/applicant.jpg",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Scholarship Eligibility
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
          Only students who are currently enrolled in Government Primary Schools and fall under any of the following criteria are eligible to apply for scholarships.
        </p>
      </div>

      {/* Highlight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-16">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            {/* Image */}
            <img
              src={highlight.image}
              alt={highlight.title}
              className="w-full h-72 object-cover"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold">{highlight.title}</h3>
              {highlight.subtitle && (
                <p className="text-white text-lg mt-1">{highlight.subtitle}</p>
              )}
              <a
                href={highlight.link}
                className="text-green-400 text-sm mt-2 hover:underline"
              >
                {highlight.description} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightSection;
