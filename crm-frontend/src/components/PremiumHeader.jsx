import React from 'react';
import { FiSearch, FiBell, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '../utils/imageOptimizer';

const PremiumHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Leads', href: '/leads' },
    { name: 'Customers', href: '/customers' },
    { name: 'Payments', href: '/payments' },
    { name: 'Reports', href: '/reports' },
  ];

  const reviews = [
    { id: 1, name: 'John D.', rating: 5, comment: 'Amazing CRM, boosted our sales!' },
    { id: 2, name: 'Sarah M.', rating: 4.5, comment: 'Great features and easy to use.' },
    { id: 3, name: 'Mike T.', rating: 5, comment: 'Best investment for our business.' },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-xl">
                  PD
                </div>
                <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  PennyDebt
                </span>
              </div>
            </Link>
            <nav className="hidden md:ml-10 md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Search and User Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
              <FiSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none focus:outline-none text-sm w-40 sm:w-64"
              />
            </div>
            
            <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100">
              <FiBell className="h-5 w-5" />
            </button>
            
            <div className="relative">
              <button className="flex items-center space-x-2 focus:outline-none">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-medium">
                  JD
                </div>
                <span className="hidden md:inline text-sm font-medium text-gray-700">John Doe</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-100 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <FiSearch className="absolute left-3 top-2.5 text-gray-500 h-5 w-5" />
              </div>
            </div>
          </div>
          
          {/* Reviews Section in Mobile Menu */}
          <div className="px-4 py-3 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
              What Our Users Say
            </h3>
            <div className="space-y-3">
              {reviews.map((review) => (
                <div key={review.id} className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                    <span className="ml-2 text-xs text-gray-500">{review.name}</span>
                  </div>
                  <p className="text-sm text-gray-700">"{review.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default PremiumHeader;
