import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { useState, useEffect } from 'react';
import AOS from 'aos';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'How to Negotiate with Credit Card Companies',
      excerpt: 'Learn proven strategies to reduce your credit card debt by up to 60%. Our expert tips will help you negotiate better terms.',
      category: 'Debt Management',
      author: 'Debt Expert Team',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Understanding Your Credit Score',
      excerpt: 'Everything you need to know about CIBIL scores and how to improve them for better financial health.',
      category: 'Credit Score Tips',
      author: 'Financial Advisor',
      date: '2024-01-10',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Debt Settlement vs Bankruptcy: Which is Right for You?',
      excerpt: 'Compare options and make an informed decision about your financial future with our comprehensive guide.',
      category: 'Financial Planning',
      author: 'Legal Team',
      date: '2024-01-05',
      readTime: '10 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: '5 Signs You Need Debt Relief Help',
      excerpt: 'Recognize the warning signs before it\'s too late. Learn when to seek professional debt relief assistance.',
      category: 'Debt Management',
      author: 'Counselor Team',
      date: '2024-01-01',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Success Story: From ₹15L Debt to Debt-Free in 2 Years',
      excerpt: 'Real customer journey and lessons learned. Discover how one family achieved financial freedom.',
      category: 'Success Stories',
      author: 'Customer Success',
      date: '2023-12-28',
      readTime: '8 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'RBI Guidelines on Debt Collection: Know Your Rights',
      excerpt: 'Understanding your legal rights and protections under RBI guidelines for debt collection practices.',
      category: 'Legal Updates',
      author: 'Legal Team',
      date: '2023-12-20',
      readTime: '12 min read',
      image: '/api/placeholder/400/250'
    }
  ];

  const categories = ['All', 'Debt Management', 'Credit Score Tips', 'Financial Planning', 'Success Stories', 'Legal Updates'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Financial Insights & <br />
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Debt Management Tips
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
                Expert advice, success stories, and practical tips to help you achieve financial freedom. 
                Stay informed with the latest in debt management.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 outline-none"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Article</h2>
            <p className="text-gray-600">Our most popular and helpful content</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                  <div className="text-6xl">📊</div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-600">{featuredPost.category}</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Articles</h2>
            <p className="text-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </div>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or category filter</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post, index) => (
                <article
                  key={post.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                    <div className="text-4xl">
                      {post.category === 'Debt Management' ? '💰' :
                       post.category === 'Credit Score Tips' ? '📊' :
                       post.category === 'Financial Planning' ? '📈' :
                       post.category === 'Success Stories' ? '🎉' :
                       post.category === 'Legal Updates' ? '⚖️' : '📝'}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-600">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-base text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <button className="mt-4 flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
            Stay Updated with Financial Tips
          </h2>
          <p className="text-lg lg:text-xl text-blue-100 mb-8" data-aos="fade-up" data-aos-delay="100">
            Get the latest debt management tips and success stories delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto" data-aos="fade-up" data-aos-delay="200">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 outline-none text-base"
            />
            <button className="px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;