import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "../../components/SEO";

const Blog = () => {
  const { slug } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    if (slug) {
      fetch(`/api/blog/${slug}`).then(r => r.json()).then(setCurrentBlog).catch(() => {});
    } else {
      fetch('/api/blog').then(r => r.json()).then(setBlogs).catch(() => {});
    }
  }, [slug]);

  const defaultBlogs = [
    {
      title: 'The Silent Burden – How Debt Is Crippling Our Health',
      slug: 'debt-health-impact',
      category: 'Finance',
      image: '💔',
      excerpt: 'Debt is more than a financial issue — it\'s a silent killer of mental peace, physical health, and personal freedom.',
      content: 'Debt is more than a financial issue — it\'s a silent killer of mental peace, physical health, and personal freedom. Many individuals in India live with the constant stress of repaying credit cards, personal loans, payday loans, or being harassed by collection agencies...',
      author: 'Penny & Debt Insights',
      date: '2024-12-15',
      tags: ['Debt', 'Health', 'Mental Health']
    },
    {
      title: 'How to Become Debt-Free in 2025',
      slug: 'debt-free-2025',
      category: 'Debt',
      image: '🎯',
      excerpt: 'Learn proven strategies to eliminate debt and achieve financial freedom in the new year.',
      content: 'Starting fresh in 2025? Here are the proven strategies that have helped thousands of Indians become debt-free...',
      author: 'Financial Expert',
      date: '2024-12-10',
      tags: ['Debt Relief', 'Financial Planning', '2025']
    },
    {
      title: 'Understanding Your Credit Score',
      slug: 'understanding-credit-score',
      category: 'Credit Score',
      image: '📊',
      excerpt: 'Everything you need to know about CIBIL scores and how to improve them.',
      content: 'Your credit score is one of the most important numbers in your financial life. Here\'s everything you need to know...',
      author: 'Credit Expert',
      date: '2024-12-05',
      tags: ['Credit Score', 'CIBIL', 'Financial Literacy']
    },
    {
      title: 'Debt Settlement vs Bankruptcy: Which is Right for You?',
      slug: 'settlement-vs-bankruptcy',
      category: 'Loans',
      image: '⚖️',
      excerpt: 'Compare debt settlement and bankruptcy to make an informed decision about your financial future.',
      content: 'When facing overwhelming debt, you have options. Let\'s compare debt settlement and bankruptcy...',
      author: 'Legal Advisor',
      date: '2024-11-28',
      tags: ['Debt Settlement', 'Bankruptcy', 'Legal']
    },
    {
      title: 'Stop Loan Recovery Harassment Legally',
      slug: 'stop-harassment',
      category: 'Finance',
      image: '🛡️',
      excerpt: 'Know your rights and learn how to legally stop harassment from recovery agents.',
      content: 'Recovery agent harassment is illegal. Here\'s how to protect yourself legally...',
      author: 'Legal Team',
      date: '2024-11-20',
      tags: ['Legal', 'Harassment', 'Rights']
    },
    {
      title: 'EMI vs Lump Sum: Best Debt Repayment Strategy',
      slug: 'emi-vs-lumpsum',
      category: 'Debt',
      image: '💰',
      excerpt: 'Discover which debt repayment strategy works best for your financial situation.',
      content: 'Should you pay EMIs or make lump sum payments? Let\'s analyze both strategies...',
      author: 'Financial Planner',
      date: '2024-11-15',
      tags: ['EMI', 'Repayment', 'Strategy']
    }
  ];

  const blogData = blogs.length > 0 ? blogs : defaultBlogs;
  const categories = ['All', ...new Set(blogData.map(b => b.category))];
  
  const filteredBlogs = blogData.filter(blog => {
    const matchesSearch = searchTerm === '' || 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Single Blog View
  if (slug && currentBlog) {
    return (
      <>
        <SEO title={currentBlog.title} description={currentBlog.excerpt} />
        <main style={{ background: '#FFFFFF' }}>
          <article style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 24px' }}>
            <Link to="/blog" style={{ fontSize: '1rem', color: '#0A4DFF', fontWeight: 600, textDecoration: 'none', marginBottom: '32px', display: 'inline-block' }}>
              ← Back to Blog
            </Link>
            
            <div style={{ fontSize: '5rem', textAlign: 'center', marginBottom: '24px' }}>{currentBlog.image}</div>
            
            <h1 style={{ fontSize: '3rem', fontWeight: 900, color: '#0F172A', marginBottom: '24px', lineHeight: 1.2 }}>
              {currentBlog.title}
            </h1>
            
            <div style={{ display: 'flex', gap: '24px', marginBottom: '48px', flexWrap: 'wrap', fontSize: '0.875rem', color: '#64748B' }}>
              <span>By {currentBlog.author}</span>
              <span>•</span>
              <span>{new Date(currentBlog.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>•</span>
              <span style={{ color: '#0A4DFF', fontWeight: 600 }}>{currentBlog.category}</span>
            </div>
            
            <div style={{ fontSize: '1.125rem', color: '#334155', lineHeight: 1.8, marginBottom: '48px' }}>
              {currentBlog.content}
            </div>
            
            {currentBlog.tags && (
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
                {currentBlog.tags.map((tag, i) => (
                  <span key={i} style={{
                    padding: '8px 16px',
                    background: '#E6EEFF',
                    color: '#0A4DFF',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: 600
                  }}>
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            
            <div style={{ padding: '32px', background: '#F8FAFF', borderRadius: '16px', border: '2px solid #E6EEFF', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '16px' }}>
                Need Help with Your Debt?
              </h3>
              <p style={{ fontSize: '1rem', color: '#64748B', marginBottom: '24px' }}>
                Our experts are ready to create a personalized debt relief plan for you.
              </p>
              <Link to="/applyform" style={{
                padding: '14px 32px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #0A4DFF 0%, #0066FF 100%)',
                color: 'white',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Get Free Consultation
              </Link>
            </div>
          </article>
        </main>
      </>
    );
  }

  // Blog List View
  return (
    <>
      <SEO pageName="blog" />
      <main style={{ background: '#FFFFFF' }}>
        
        {/* Hero Section */}
        <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, #0A4DFF 0%, #0039CC 100%)', textAlign: 'center' }}>
          <div className="container">
            <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', marginBottom: '24px' }}>
              Financial Insights & Debt Relief Tips
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', maxWidth: '800px', margin: '0 auto 48px' }}>
              Expert advice, success stories, and practical tips to help you achieve financial freedom
            </p>
            
            {/* Search Bar */}
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px 24px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section style={{ padding: '40px 24px', background: 'white', borderBottom: '1px solid #E6EEFF' }}>
          <div className="container">
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '24px',
                    background: selectedCategory === cat ? 'linear-gradient(135deg, #0A4DFF 0%, #0066FF 100%)' : 'transparent',
                    color: selectedCategory === cat ? 'white' : '#64748B',
                    border: selectedCategory === cat ? 'none' : '2px solid #E6EEFF',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {filteredBlogs.length > 0 && (
          <section style={{ padding: '80px 24px', background: '#F8FAFF' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginBottom: '32px' }}>
                Featured Article
              </h2>
              <Link to={`/blog/${filteredBlogs[0].slug}`} style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '48px',
                background: 'white',
                padding: '48px',
                borderRadius: '16px',
                textDecoration: 'none',
                border: '2px solid #E6EEFF',
                alignItems: 'center'
              }}>
                <div style={{ fontSize: '8rem', textAlign: 'center' }}>{filteredBlogs[0].image}</div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: '#0A4DFF', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase' }}>
                    {filteredBlogs[0].category}
                  </div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginBottom: '16px', lineHeight: 1.2 }}>
                    {filteredBlogs[0].title}
                  </h3>
                  <p style={{ fontSize: '1.125rem', color: '#64748B', marginBottom: '24px', lineHeight: 1.6 }}>
                    {filteredBlogs[0].excerpt}
                  </p>
                  <div style={{ fontSize: '0.875rem', color: '#64748B' }}>
                    {filteredBlogs[0].author} • {new Date(filteredBlogs[0].date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Latest Articles */}
        <section style={{ padding: '80px 24px', background: 'white' }}>
          <div className="container">
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginBottom: '48px', textAlign: 'center' }}>
              Latest Articles
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
              {filteredBlogs.slice(1).map((blog, i) => (
                <Link key={i} to={`/blog/${blog.slug}`} style={{
                  background: '#F8FAFF',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  border: '2px solid #E6EEFF',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ fontSize: '5rem', textAlign: 'center', padding: '32px', background: 'white' }}>
                    {blog.image}
                  </div>
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '0.75rem', color: '#0A4DFF', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase' }}>
                      {blog.category}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '12px', lineHeight: 1.3 }}>
                      {blog.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '16px', lineHeight: 1.6, flex: 1 }}>
                      {blog.excerpt}
                    </p>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', paddingTop: '16px', borderTop: '1px solid #E6EEFF' }}>
                      {new Date(blog.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredBlogs.length === 0 && (
              <div style={{ textAlign: 'center', padding: '64px 24px' }}>
                <div style={{ fontSize: '4rem', marginBottom: '16px' }}>📝</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                  No articles found
                </h3>
                <p style={{ fontSize: '1rem', color: '#64748B' }}>
                  Try adjusting your search or category filter
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #0A4DFF 0%, #0039CC 100%)', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white', marginBottom: '16px' }}>
              Stay Updated
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.95)', marginBottom: '32px' }}>
              Get the latest debt relief tips and financial insights delivered to your inbox
            </p>
            <div style={{ display: 'flex', gap: '16px', maxWidth: '500px', margin: '0 auto' }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: '14px 20px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
              <button style={{
                padding: '14px 32px',
                borderRadius: '12px',
                background: 'white',
                color: '#0A4DFF',
                fontWeight: 700,
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}>
                Subscribe
              </button>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Blog;
