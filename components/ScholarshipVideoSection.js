import React from "react";

const ScholarshipAppSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      {/* Video and Text Section */}
      <div className="flex flex-wrap items-center justify-center gap-8 px-4 max-w-[1024px] mx-auto">
        {/* Video */}
        <div className="w-full md:w-[400px] lg:w-[360px] flex-shrink-0">
          <video
            controls
            className="w-full rounded-lg shadow-md"
          >
            <source src="/videos/ay_explainer.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text */}
        <div className="w-full md:w-[480px] lg:w-[520px] text-left">
          <h3 className="text-2xl font-bold mb-4">The scholarship app</h3>
          <p className="text-gray-600 text-lg">
            In Bangladesh, while 98% of children enroll in school, 2 million
            children drop out to work before achieving literacy in order to
            support their families financially. On the flip side, Bangladesh
            has a diaspora population of 10 million in advanced economies who
            wish to make an impact on their homeland.
          </p>
          <p className="text-gray-600 text-lg mt-4">
            AlterYouth, imagine Uber for scholarships, is a C2C scholarship app
            enabling users from around the world to start scholarships directly
            for financially struggling students in Government Primary Schools
            of Bangladesh, through digital banking.
          </p>
        </div>
      </div>

      {/* Logos Section */}
      <div className="mt-12 px-4 flex flex-col items-center">
        <h4 className="text-xl font-bold mb-6 text-center">
          In Association With
        </h4>
        <div className="flex flex-wrap justify-center gap-8">
          {/* UNDP */}
          <div className="flex flex-col items-center">
            <img
              src="/images/undp.jpg"
              alt="UNDP"
              className="w-20 h-20 object-contain"
            />
            <p className="text-sm text-center mt-2">
              "Asia Pacific SDG Enterprise Award"
            </p>
          </div>

          {/* Expo Live */}
          <div className="flex flex-col items-center">
            <img
              src="/images/expo.png"
              alt="Expo Live"
              className="w-20 h-20 object-contain"
            />
            <p className="text-sm text-center mt-2">
              An Expo 2020 Dubai Initiative
            </p>
          </div>

          {/* Google */}
          <div className="flex flex-col items-center">
            <img
              src="/images/google.png"
              alt="Google"
              className="w-20 h-20 object-contain"
            />
            <p className="text-sm text-center mt-2">
              Winner of Google Business Group Stories
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipAppSection;
