import Link from 'next/link';  // ✅ Add this import at the top

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/">
          <span className="text-green-600 text-2xl font-bold cursor-pointer">AlterYouth</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/how-it-works">How It Works</Link></li>
            <li><Link href="/scholarships">Scholarships</Link></li>
            <li><Link href="/collaborate">Collaborate</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
