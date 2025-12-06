import React, { useEffect } from 'react';
import { seoConfig } from '../utils/seoConfig';

const SEO = ({
  title,
  description,
  keywords,
  image = "/assets/logo.png",
  url = "/",
  type = "website",
  pageName
}) => {
  // Get SEO data from config if pageName is provided
  const seoData = pageName ? {
    ...seoConfig.default,
    ...seoConfig.pages[pageName]
  } : {
    title: title || seoConfig.default.title,
    description: description || seoConfig.default.description,
    keywords: keywords || seoConfig.default.keywords,
    url: url || seoConfig.default.url
  };

  const fullTitle = seoData.title.includes("Penny") ? seoData.title : `${seoData.title} | Penny Debt CRM`;
  const fullUrl = seoData.url.startsWith('http') ? seoData.url : `https://pennyanddebt.in${seoData.url}`;
  const fullImage = image.startsWith('http') ? image : `https://pennyanddebt.in${image}`;

  useEffect(() => {
    // Update document title and meta tags
    document.title = fullTitle;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description);
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seoData.keywords);
    }
  }, [fullTitle, seoData.description, seoData.keywords]);

  return (
    <div style={{ display: 'none' }}>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords} />
      <meta name="author" content="Penny & Debt" />
      <meta name="robots" content="index, follow" />
      {/* viewport meta intentionally provided in the HTML head (`index.html`) */}
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Penny Debt CRM" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@pennyanddebt" />
      <meta name="twitter:creator" content="@pennyanddebt" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0070f3" />
      <meta name="msapplication-TileColor" content="#0070f3" />
      <meta name="application-name" content="Penny Debt CRM" />
      <meta name="apple-mobile-web-app-title" content="Penny Debt CRM" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Structured Data */}
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(seoConfig.organization)}
      </script>
      
      {/* Additional Performance and SEO Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="referrer" content="origin-when-cross-origin" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://api.openai.com" />
    </div>
  );
};

export default SEO;