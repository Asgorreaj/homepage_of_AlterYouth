import Header from '../components/Header';
import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import SchoolsSection from '../components/SchoolsSection';
import ScholarshipCommunity from '../components/ScholarshipCommunity'; // Import the new component
//import ScholarshipEligibilitySection from '../components/ScholarshipEligibilitySection';
import Footer from '../components/Footer';
import leaderboardData from '../public/data/leaderboard.json';
import CommunitySection from '../components/CommunitySection';
import HighSchool from '../components/HighSchool';
import HighlightSection from '../components/HighlightSection';
import ScholarshipVideoSection from '../components/ScholarshipVideoSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>AlterYouth | Start Your Scholarship</title>
        <meta name="description" content="Empowering youth in Bangladesh through scholarships" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <HeroSection />
        <SchoolsSection />
        <ScholarshipCommunity data={leaderboardData} /> {/* Use ScholarshipCommunity here */}
        <CommunitySection />
        <HighSchool/>
        <HighlightSection/>
        <ScholarshipVideoSection/>

      </main>

      <Footer />
    </>
  );
}
