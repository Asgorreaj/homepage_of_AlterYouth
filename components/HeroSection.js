// components/HeroSection.js
const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/images/hero_pc.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
      className="relative flex items-center justify-center pt-20"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold">Start Your Scholarship</h1>
        <p className="mt-4 text-lg">
          Directly for students in Government Primary Schools throughout Bangladesh.
        </p>
        <button className="mt-6 px-8 py-3 bg-green-500 rounded-lg hover:bg-green-600">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;  // ✅ Must be default export
