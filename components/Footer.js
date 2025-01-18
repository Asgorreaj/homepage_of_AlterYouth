const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Learn About Section */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Learn About AlterYouth</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:underline">About Us</a>
            </li>
            <li>
              <a href="/how-it-works" className="hover:underline">How It Works</a>
            </li>
            <li>
              <a href="/scholarship-policy" className="hover:underline">Scholarship Policy</a>
            </li>
            <li>
              <a href="/get-the-app" className="hover:underline">Get the App</a>
            </li>
          </ul>
        </div>

        {/* Mission Section */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Our Mission</h4>
          <p className="text-gray-400 text-sm">
            Towards a literate Bangladesh. AlterYouth envisions a future where every child in
            Bangladesh has access to education and opportunities to thrive.
          </p>
        </div>

        {/* Social Media & Contact */}
        <div className="text-left md:text-right">
          <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
          <div className="flex justify-start md:justify-end space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img src="/images/facebook-icon.png" alt="Facebook" className="h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img src="/images/instagram-icon.png" alt="Instagram" className="h-6" />
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            <a href="/contact" className="hover:underline">Contact Us</a>
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-500 mt-4">
        <p>&copy; 2025 AlterYouth Limited. All rights reserved.</p>
        <p>
          <a href="/terms" className="hover:underline">Terms of Service</a> - 
          <a href="/privacy-policy" className="hover:underline ml-2">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
