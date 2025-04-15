'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
  const pathname = usePathname();
  
  // Don't create breadcrumbs on homepage
  if (pathname === '/') {
    return null;
  }
  
  // Create breadcrumb segments from the URL
  const segments = pathname.split('/').filter(Boolean);
  
  // Map clean names for paths based on your sitemap structure
  const pathNames: Record<string, string> = {
    'services': 'Services',
    'kitchens': 'Kitchens',
    'wardrobes': 'Wardrobes',
    'sliding-doors': 'Sliding Doors',
    'laundries': 'Laundries',
    'shower-screens': 'Shower Screens',
    'vanities': 'Vanities',
    'about': 'About Us',
    'contact': 'Contact Us',
  };
  
  return (
    <nav 
      aria-label="Breadcrumbs" 
      className="sr-only" // Screen reader only - hidden visually
    >
      <ol>
        <li>
          <Link href="/">
            Home
          </Link>
          <span>/</span>
        </li>
        
        {segments.map((segment, index) => {
          // Build path up to current segment
          const href = `/${segments.slice(0, index + 1).join('/')}`;
          const isLast = index === segments.length - 1;
          const displayName = pathNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
          
          return (
            <li key={href}>
              {isLast ? (
                <span>{displayName}</span>
              ) : (
                <>
                  <Link href={href}>
                    {displayName}
                  </Link>
                  <span>/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;