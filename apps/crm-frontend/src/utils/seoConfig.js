// SEO Configuration for all pages
export const seoConfig = {
  default: {
    title: "Penny Debt CRM - Debt Relief & Settlement Solutions",
    description: "Professional debt relief and settlement services. Get expert help with debt management, loan solutions, and financial recovery. Contact Penny & Debt for personalized assistance.",
    keywords: "debt relief, debt settlement, loan solutions, financial recovery, debt management, credit repair, debt consolidation, financial assistance",
    image: "/assets/logo.png",
    url: "https://penny-debt-crm.vercel.app",
    type: "website"
  },
  
  pages: {
    home: {
      title: "Penny Debt CRM - India's Best Debt Relief Service Provider",
      description: "Get expert debt relief, settlement, and credit recovery services. Trusted by 5000+ clients. Transparent process, legal protection, and personalized financial solutions.",
      keywords: "debt relief India, debt settlement, credit recovery, financial freedom, loan solutions, debt management, credit repair, debt consolidation",
      url: "/"
    },
    
    about: {
      title: "About Penny & Debt - India's Trusted Debt Relief Experts",
      description: "Learn about Penny & Debt's mission to provide empathetic, legal, and affordable debt relief solutions. Founded to help Indians achieve financial freedom with integrity.",
      keywords: "about penny debt, debt relief company India, financial freedom mission, debt advisory services, trusted debt experts",
      url: "/about"
    },
    
    services: {
      title: "Debt Relief Services - Comprehensive Financial Solutions",
      description: "Explore our debt relief, legal advisory, credit improvement, and loan services. From debt settlement to financial planning - your complete solution for financial freedom.",
      keywords: "debt relief services, legal advisory, credit score improvement, financial planning, loan solutions, debt settlement, lender negotiation",
      url: "/services"
    },
    
    contact: {
      title: "Contact Us - Get Expert Debt Relief Assistance",
      description: "Contact Penny & Debt for professional debt relief consultation. Email: care@pennyanddebt.in, Phone: +91 7814447895. Get personalized financial solutions today.",
      keywords: "contact penny debt, debt relief consultation, financial assistance contact, debt help India, customer support",
      url: "/contact"
    },
    
    applyform: {
      title: "Apply for Debt Relief - Start Your Financial Recovery",
      description: "Apply for professional debt relief services. Fill out our secure application form to get personalized debt settlement and financial recovery solutions.",
      keywords: "apply debt relief, debt settlement application, financial recovery form, debt help application, loan assistance",
      url: "/applyform"
    },
    
    careers: {
      title: "Careers at Penny & Debt - Join Our Financial Experts Team",
      description: "Join Penny & Debt's mission to help Indians achieve financial freedom. Explore career opportunities in debt advisory, legal services, and financial consulting.",
      keywords: "penny debt careers, debt advisory jobs, financial consultant jobs, legal advisor careers, fintech jobs India",
      url: "/careers"
    },
    
    faq: {
      title: "FAQ - Debt Relief Questions Answered",
      description: "Get answers to frequently asked questions about debt relief, settlement processes, credit improvement, and our services. Expert guidance for your financial queries.",
      keywords: "debt relief FAQ, debt settlement questions, credit repair FAQ, financial help questions, debt advisory FAQ",
      url: "/faq"
    },
    
    blog: {
      title: "Debt Relief Blog - Financial Tips & Expert Advice",
      description: "Read expert articles on debt management, credit improvement, financial planning, and debt relief strategies. Stay informed with Penny & Debt's financial blog.",
      keywords: "debt relief blog, financial tips, credit improvement advice, debt management articles, financial planning blog",
      url: "/blog"
    },
    
    privacypolicy: {
      title: "Privacy Policy - Penny & Debt Data Protection",
      description: "Learn how Penny & Debt protects your personal and financial information. Our comprehensive privacy policy ensures your data security and confidentiality.",
      keywords: "penny debt privacy policy, data protection, financial information security, privacy terms",
      url: "/privacypolicy"
    },
    
    terms: {
      title: "Terms & Conditions - Penny & Debt Service Agreement",
      description: "Read our terms and conditions for debt relief services. Understand your rights and responsibilities when using Penny & Debt's financial solutions.",
      keywords: "penny debt terms conditions, service agreement, debt relief terms, financial services terms",
      url: "/terms"
    }
  },
  
  // Organization structured data
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Penny & Debt",
    "url": "https://pennyanddebt.in",
    "logo": "https://pennyanddebt.in/assets/logo.png",
    "description": "Professional debt relief and settlement services",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7814447895",
      "contactType": "customer service",
      "email": "care@pennyanddebt.in"
    },
    "sameAs": [
      "https://www.facebook.com/share/1YoinDZcbG/",
      "https://www.linkedin.com/company/pennydebt/",
      "https://www.instagram.com/pennydebt_",
      "https://twitter.com/pennyanddebt"
    ]
  }
};

// Helper function to get SEO data for a specific page
export const getSEOData = (pageName) => {
  const pageData = seoConfig.pages[pageName] || seoConfig.default;
  return {
    ...seoConfig.default,
    ...pageData
  };
};