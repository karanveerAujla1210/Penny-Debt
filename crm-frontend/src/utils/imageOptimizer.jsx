/**
 * Optimized image component with lazy loading and responsive images
 * @param {Object} props - Component props
 * @param {string} props.src - Image source
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.sizes] - Sizes attribute for responsive images
 * @param {string} [props.loading] - Loading attribute ('lazy' or 'eager')
 * @param {number} [props.width] - Image width
 * @param {number} [props.height] - Image height
 */
export const OptimizedImage = ({
  src,
  alt,
  className = '',
  sizes = '(max-width: 768px) 100vw, 50vw',
  loading = 'lazy',
  width,
  height,
  ...props
}) => {
  // Check if the image is above the fold
  const isAboveTheFold = loading !== 'lazy';
  
  // Generate srcSet for WebP format
  const srcSet = [
    `${src.replace(/\.(jpg|jpeg|png)$/, '.webp')} 1x`,
    `${src.replace(/\.(jpg|jpeg|png)$/, '@2x.webp 2x')}`,
  ].join(', ');

  return (
    <picture>
      {/* WebP format */}
      <source 
        type="image/webp" 
        srcSet={srcSet}
        sizes={sizes}
      />
      
      {/* Fallback for browsers that don't support WebP */}
      <source 
        srcSet={`${src} 1x, ${src.replace(/\.(jpg|jpeg|png)$/, '@2x$&')} 2x`}
        sizes={sizes}
      />
      
      {/* Fallback image */}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        width={width}
        height={height}
        decoding={isAboveTheFold ? 'sync' : 'async'}
        fetchPriority={isAboveTheFold ? 'high' : 'auto'}
        {...props}
      />
    </picture>
  );
};

/**
 * Preload critical images
 * @param {string[]} imageUrls - Array of image URLs to preload
 */
export const preloadImages = (imageUrls) => {
  if (typeof window === 'undefined') return;
  
  imageUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

/**
 * Convert image to WebP format
 * @param {File} file - Image file to convert
 * @returns {Promise<Blob>} - Promise that resolves with WebP Blob
 */
export const convertToWebP = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(
          (blob) => resolve(blob || new Blob()),
          'image/webp',
          0.8
        );
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });
};
