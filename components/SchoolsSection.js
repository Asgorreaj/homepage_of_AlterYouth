import AppStoreIcon from '../public/icons/appstore_small.svg';
import PlayStoreIcon from '../public/icons/playstore_small.svg';

const SchoolsSection = () => {
  const features = [
    {
      img: '/images/app_graduation.png',
      title: 'Transfer directly',
      description: 'Your scholarship is transferred directly to your student’s family on their mobile bank account.',
    },
    {
      img: '/images/app_school.png',
      title: 'Get school reports',
      description: 'View attendance data and report cards from your student’s school, until completion of Class 5.',
    },
    {
      img: '/images/app_scholarship.jpg',
      title: 'Ensure a literate citizen',
      description: 'Your scholarship continues until completion of Class 5, when your student achieves literacy.',
    },
  ];

  return (
    <section className="text-center py-16 bg-gray-50">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-green-600 mb-4">The Uber for Scholarships</h2>
      <p className="mb-8 text-gray-600">
        A platform connecting the world with financially struggling students in Government Primary Schools of Bangladesh.
      </p>

      {/* Features */}
      <div className="flex justify-center gap-8 flex-wrap">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all max-w-sm"
          >
            <img src={feature.img} alt={feature.title} className="w-40 mx-auto mb-4 rounded-lg" />
            <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* App Store Icons */}
      <div className="flex justify-center gap-6 mt-8">
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <AppStoreIcon className="w-36 h-auto cursor-pointer hover:opacity-80 transition-opacity" />
        </a>
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <PlayStoreIcon className="w-36 h-auto cursor-pointer hover:opacity-80 transition-opacity" />
        </a>
      </div>
    </section>
  );
};

export default SchoolsSection;
