import React from "react";

const schools = [
  {
    name: "Agla Government Primary School",
    location: "Kayetpara",
    image: "/images/school1.jpeg",
  },
  {
    name: "Kanchan Government Primary School",
    location: "Kanchan",
    image: "/images/school2.jpeg",
  },
  {
    name: "Daudpur Government Primary School",
    location: "Daudpur",
    image: "/images/school3.jpeg",
  },
  {
    name: "Kendua Government Primary School",
    location: "Golakandail",
    image: "/images/school4.jpeg",
  },
  {
    name: "Bhulta Government Primary School",
    location: "Bhulta",
    image: "/images/school5.jpeg",
  },
  {
    name: "Deboi Government Primary School",
    location: "Rupganj",
    image: "/images/school6.jpeg",
  },
  {
    name: "Birabo Government Primary School",
    location: "Bholabo",
    image: "/images/school7.jpeg",
  },
];

const HighSchool = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-8">
        Students from Government Primary Schools Nationwide
      </h2>
      <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
        These schools represent a glimpse of the communities AlterYouth supports across Bangladesh. By empowering students through education, we are building a brighter future for generations to come.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
        {schools.map((school, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={school.image}
              alt={school.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">{school.name}</h3>
              <p className="text-green-500 mt-2 flex items-center">
                <span className="material-icons text-green-500 mr-1">location_on</span>
                {school.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <HighSchool />
    </div>
  );
};

export default App;
