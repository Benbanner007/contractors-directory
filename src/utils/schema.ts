import type { Contractor } from '../types/contractor';

export function generateLocalBusinessSchema(contractor: Contractor) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://trianglecontractorshub.com/contractors/${contractor.id}`,
    name: contractor.businessName,
    description: contractor.description,
    url: `https://trianglecontractorshub.com/contractors/${contractor.id}`,
    telephone: contractor.phone,
    email: contractor.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contractor.address.street,
      addressLocality: contractor.address.city,
      addressRegion: contractor.address.state,
      postalCode: contractor.address.zipCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
    },
    areaServed: contractor.serviceAreas.map(area => ({
      '@type': 'City',
      name: area,
    })),
    aggregateRating: contractor.reviewCount > 0 ? {
      '@type': 'AggregateRating',
      ratingValue: contractor.rating,
      reviewCount: contractor.reviewCount,
    } : undefined,
    openingHoursSpecification: Object.entries(contractor.businessHours).map(([day, hours]) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${day}`,
      opens: hours.closed ? undefined : hours.open,
      closes: hours.closed ? undefined : hours.close,
    })),
    sameAs: [
      contractor.website,
      contractor.social.facebook,
      contractor.social.instagram,
      contractor.social.linkedin,
    ].filter(Boolean),
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}