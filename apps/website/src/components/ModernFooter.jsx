import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const ModernFooter = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P&D</span>
              </div>
              <span className="text-xl font-bold text-white">Penny & Debt</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Your trusted partner in debt relief and financial freedom. Helping thousands achieve debt-free lives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-sm hover:text-blue-400 transition-colors">How It Works</Link></li>
              <li><Link to="/services" className="text-sm hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-sm hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-blue-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-sm hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-blue-400 transition-colors">FAQs</Link></li>
              <li><Link to="/careers" className="text-sm hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                <span className="text-sm">care@pennyanddebt.in</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5" />
                <span className="text-sm">+91-XXXXXXXXXX</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <span className="text-sm">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 Penny & Debt. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 text-center max-w-2xl">
              Penny & Debt is a debt settlement service. Results may vary. We do not provide credit repair or debt consolidation loans. All settlements are subject to creditor approval.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
