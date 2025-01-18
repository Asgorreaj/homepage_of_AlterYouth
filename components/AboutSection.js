export default function AboutSection() {
  return (
    <section className="text-center py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-green-600 mb-4">The Uber for Scholarships</h2>
      <p className="mb-8">Connecting the world with financially struggling students.</p>
      <div className="flex justify-center gap-6 flex-wrap">
        {['app_graduation.png', 'app_school.png', 'app_scholarship.jpg'].map((img, i) => (
          <img
            key={i}
            src={`/images/${img}`}
            alt="Feature"
            className="w-40 h-40 transform hover:scale-110 transition rounded-lg shadow-lg"
          />
        ))}
      </div>
    </section>
  );
}
