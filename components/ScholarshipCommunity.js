import React, { useState } from "react";

const ScholarshipCommunity = ({ data = [] }) => {
  const [visibleCount, setVisibleCount] = useState(12); // Show 12 items initially

  // Remove duplicate entries based on the "invite_code"
  const uniqueData = data.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.invite_code === value.invite_code)
  );

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 12); // Load 12 more items when clicked
  };

  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-center text-2xl font-bold text-green-600 mb-4">
        #alteryouthrevolution
      </h2>
      <p className="text-center text-sm text-gray-700 max-w-3xl mx-auto mb-8">
        Despite public primary schools being free of cost in Bangladesh, many students still{" "}
        <strong>drop out of school</strong> to work and earn in order to support their families.
        Your scholarship helps a child attend school and support their families at the same time.
      </p>

      {/* Display unique leaderboard cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
        {uniqueData.slice(0, visibleCount).map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Header Section with User Details */}
            <div className="flex items-center space-x-3 mb-3">
              <img
                src={item.student_imgs[0]} // Display the first student image
                alt={item.name}
                className="w-12 h-12 rounded-full border border-gray-300"
              />
              <div>
                <p className="font-bold text-sm text-gray-800">@{item.name}</p>
                <p className="text-green-600 text-xs">{item.count} Scholarship(s)</p>
              </div>
            </div>

            {/* Invited By and Joined Date */}
            <p className="text-xs text-gray-600 mb-2">
              Invited By: <span className="font-medium">{item.invited_by}</span>
            </p>
            <p className="text-xs text-gray-400">
              Joined: {new Date(item.started_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>

      {/* "See More" button */}
      {visibleCount < uniqueData.length && (
        <div className="text-center mt-6">
          <button
            onClick={loadMore}
            className="bg-green-500 text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-colors"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
};

export default ScholarshipCommunity;
