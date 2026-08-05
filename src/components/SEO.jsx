import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  name = "Hey Investor", 
  type = "website",
  image = "/og-image.jpg", // You can update this to an actual default OG image URL later
  url = "https://heyinvestor.in"
}) {
  const siteTitle = title ? `${title} | ${name}` : `${name} — Premium Plots in Nagpur & Vidarbha`;
  
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      {description && <meta name="description" content={description} />}
      
      {/* OpenGraph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={name} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />
      
      {/* JSON-LD Schema (Optional generic organization schema) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "name": name,
          "url": url,
          "logo": `${url}/favicon.svg`,
          "image": `${url}${image}`,
          "description": description || "Premium NMRDA & RL approved residential plots in Nagpur's top growth corridors.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nagpur",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          }
        })}
      </script>
    </Helmet>
  );
}
