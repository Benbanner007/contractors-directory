import type { Contractor } from '../types/contractor';

export const contractors: Contractor[] = [
  {
    id: '1',
    name: 'Mike Johnson',
    businessName: 'Johnson Plumbing Services',
    category: 'plumbing',
    specialties: ['Emergency Repairs', 'Kitchen Plumbing', 'Bathroom Remodels'],
    description: 'Professional plumbing services with over 15 years of experience. We handle everything from simple repairs to complete bathroom renovations.',
    phone: '(919) 555-0123',
    email: 'mike@johnsonplumbing.com',
    website: 'https://johnsonplumbing.com',
    address: {
      street: '123 Oak Street',
      city: 'Raleigh',
      state: 'NC',
      zipCode: '27601'
    },
    serviceAreas: ['Raleigh', 'Cary', 'Apex', 'Morrisville'],
    yearsInBusiness: 15,
    licensed: true,
    insured: true,
    certifications: ['NC Licensed Plumber', 'Backflow Prevention'],
    rating: 4.8,
    reviewCount: 127,
    images: {
      logo: '/images/contractors/johnson-plumbing-logo.jpg',
      portfolio: ['/images/contractors/johnson-1.jpg', '/images/contractors/johnson-2.jpg']
    },
    social: {
      facebook: 'https://facebook.com/johnsonplumbing',
      instagram: 'https://instagram.com/johnsonplumbing'
    },
    businessHours: {
      monday: { open: '7:00 AM', close: '6:00 PM' },
      tuesday: { open: '7:00 AM', close: '6:00 PM' },
      wednesday: { open: '7:00 AM', close: '6:00 PM' },
      thursday: { open: '7:00 AM', close: '6:00 PM' },
      friday: { open: '7:00 AM', close: '6:00 PM' },
      saturday: { open: '8:00 AM', close: '4:00 PM' },
      sunday: { open: '24/7 Emergency', close: '24/7 Emergency' }
    }
  },
  {
    id: '2',
    name: 'Sarah Thompson',
    businessName: 'Thompson Electric',
    category: 'electrical',
    specialties: ['Home Wiring', 'Panel Upgrades', 'Smart Home Installation'],
    description: 'Licensed electrician serving the Triangle area for over 12 years. Specializing in residential electrical work and smart home technology.',
    phone: '(919) 555-0456',
    email: 'sarah@thompsonelectric.com',
    website: 'https://thompsonelectric.com',
    address: {
      street: '456 Pine Avenue',
      city: 'Durham',
      state: 'NC',
      zipCode: '27701'
    },
    serviceAreas: ['Durham', 'Chapel Hill', 'Carrboro', 'Hillsborough'],
    yearsInBusiness: 12,
    licensed: true,
    insured: true,
    certifications: ['NC Licensed Electrician', 'Tesla Powerwall Certified'],
    rating: 4.9,
    reviewCount: 89,
    images: {
      logo: '/images/contractors/thompson-electric-logo.jpg',
      portfolio: ['/images/contractors/thompson-1.jpg', '/images/contractors/thompson-2.jpg']
    },
    social: {
      facebook: 'https://facebook.com/thompsonelectric',
      linkedin: 'https://linkedin.com/company/thompson-electric'
    },
    businessHours: {
      monday: { open: '8:00 AM', close: '5:00 PM' },
      tuesday: { open: '8:00 AM', close: '5:00 PM' },
      wednesday: { open: '8:00 AM', close: '5:00 PM' },
      thursday: { open: '8:00 AM', close: '5:00 PM' },
      friday: { open: '8:00 AM', close: '5:00 PM' },
      saturday: { open: '9:00 AM', close: '2:00 PM' },
      sunday: { closed: true, open: '', close: '' }
    }
  },
  {
    id: '3',
    name: 'David Rodriguez',
    businessName: 'Rodriguez Roofing Co.',
    category: 'roofing',
    specialties: ['Asphalt Shingles', 'Metal Roofing', 'Storm Damage Repair'],
    description: 'Family-owned roofing company with 20+ years of experience. We provide quality roofing solutions and work with insurance companies.',
    phone: '(919) 555-0789',
    email: 'david@rodriguezroofing.com',
    website: 'https://rodriguezroofing.com',
    address: {
      street: '789 Cedar Lane',
      city: 'Cary',
      state: 'NC',
      zipCode: '27511'
    },
    serviceAreas: ['Cary', 'Apex', 'Holly Springs', 'Fuquay-Varina', 'Raleigh'],
    yearsInBusiness: 22,
    licensed: true,
    insured: true,
    certifications: ['GAF Master Elite', 'Owens Corning Preferred'],
    rating: 4.7,
    reviewCount: 156,
    images: {
      logo: '/images/contractors/rodriguez-roofing-logo.jpg',
      portfolio: ['/images/contractors/rodriguez-1.jpg', '/images/contractors/rodriguez-2.jpg']
    },
    social: {
      facebook: 'https://facebook.com/rodriguezroofing',
      instagram: 'https://instagram.com/rodriguezroofing'
    },
    businessHours: {
      monday: { open: '7:00 AM', close: '7:00 PM' },
      tuesday: { open: '7:00 AM', close: '7:00 PM' },
      wednesday: { open: '7:00 AM', close: '7:00 PM' },
      thursday: { open: '7:00 AM', close: '7:00 PM' },
      friday: { open: '7:00 AM', close: '7:00 PM' },
      saturday: { open: '8:00 AM', close: '5:00 PM' },
      sunday: { closed: true, open: '', close: '' }
    }
  },
  {
    id: '4',
    name: 'Jennifer Lee',
    businessName: 'Lee HVAC Solutions',
    category: 'hvac',
    specialties: ['AC Installation', 'Heating Repair', 'Duct Cleaning'],
    description: 'Professional HVAC services for residential and commercial properties. Emergency service available 24/7.',
    phone: '(919) 555-0234',
    email: 'jennifer@leehvac.com',
    website: 'https://leehvac.com',
    address: {
      street: '234 Maple Drive',
      city: 'Chapel Hill',
      state: 'NC',
      zipCode: '27514'
    },
    serviceAreas: ['Chapel Hill', 'Durham', 'Carrboro', 'Pittsboro'],
    yearsInBusiness: 8,
    licensed: true,
    insured: true,
    certifications: ['EPA Certified', 'NATE Certified'],
    rating: 4.6,
    reviewCount: 73,
    images: {
      logo: '/images/contractors/lee-hvac-logo.jpg',
      portfolio: ['/images/contractors/lee-1.jpg', '/images/contractors/lee-2.jpg']
    },
    social: {
      facebook: 'https://facebook.com/leehvac',
      linkedin: 'https://linkedin.com/company/lee-hvac'
    },
    businessHours: {
      monday: { open: '7:00 AM', close: '6:00 PM' },
      tuesday: { open: '7:00 AM', close: '6:00 PM' },
      wednesday: { open: '7:00 AM', close: '6:00 PM' },
      thursday: { open: '7:00 AM', close: '6:00 PM' },
      friday: { open: '7:00 AM', close: '6:00 PM' },
      saturday: { open: '8:00 AM', close: '4:00 PM' },
      sunday: { open: '24/7 Emergency', close: '24/7 Emergency' }
    }
  },
  {
    id: '5',
    name: 'Robert Wilson',
    businessName: 'Wilson General Contracting',
    category: 'general-contractor',
    specialties: ['Kitchen Remodels', 'Bathroom Renovations', 'Home Additions'],
    description: 'Full-service general contractor specializing in home renovations and additions. Licensed and bonded with 18 years of experience.',
    phone: '(919) 555-0567',
    email: 'robert@wilsoncontracting.com',
    website: 'https://wilsoncontracting.com',
    address: {
      street: '567 Birch Street',
      city: 'Apex',
      state: 'NC',
      zipCode: '27502'
    },
    serviceAreas: ['Apex', 'Cary', 'Holly Springs', 'Morrisville', 'Raleigh'],
    yearsInBusiness: 18,
    licensed: true,
    insured: true,
    certifications: ['NC General Contractor License', 'OSHA 30-Hour'],
    rating: 4.8,
    reviewCount: 201,
    images: {
      logo: '/images/contractors/wilson-contracting-logo.jpg',
      portfolio: ['/images/contractors/wilson-1.jpg', '/images/contractors/wilson-2.jpg']
    },
    social: {
      facebook: 'https://facebook.com/wilsoncontracting',
      instagram: 'https://instagram.com/wilsoncontracting',
      linkedin: 'https://linkedin.com/company/wilson-contracting'
    },
    businessHours: {
      monday: { open: '7:00 AM', close: '6:00 PM' },
      tuesday: { open: '7:00 AM', close: '6:00 PM' },
      wednesday: { open: '7:00 AM', close: '6:00 PM' },
      thursday: { open: '7:00 AM', close: '6:00 PM' },
      friday: { open: '7:00 AM', close: '6:00 PM' },
      saturday: { open: '8:00 AM', close: '4:00 PM' },
      sunday: { closed: true, open: '', close: '' }
    }
  },
  {
    id: '6',
    name: 'Lisa Chen',
    businessName: 'Chen Landscaping & Design',
    category: 'landscaping',
    specialties: ['Landscape Design', 'Hardscaping', 'Irrigation Systems'],
    description: 'Creative landscape design and installation services. Transforming outdoor spaces with beautiful, sustainable designs.',
    phone: '(919) 555-0890',
    email: 'lisa@chenlandscaping.com',
    website: 'https://chenlandscaping.com',
    address: {
      street: '890 Willow Way',
      city: 'Morrisville',
      state: 'NC',
      zipCode: '27560'
    },
    serviceAreas: ['Morrisville', 'Cary', 'Apex', 'Raleigh', 'Durham'],
    yearsInBusiness: 10,
    licensed: true,
    insured: true,
    certifications: ['Certified Landscape Professional', 'Irrigation Association Certified'],
    rating: 4.9,
    reviewCount: 68,
    images: {
      logo: '/images/contractors/chen-landscaping-logo.jpg',
      portfolio: ['/images/contractors/chen-1.jpg', '/images/contractors/chen-2.jpg']
    },
    social: {
      facebook: 'https://facebook.com/chenlandscaping',
      instagram: 'https://instagram.com/chenlandscaping'
    },
    businessHours: {
      monday: { open: '7:00 AM', close: '5:00 PM' },
      tuesday: { open: '7:00 AM', close: '5:00 PM' },
      wednesday: { open: '7:00 AM', close: '5:00 PM' },
      thursday: { open: '7:00 AM', close: '5:00 PM' },
      friday: { open: '7:00 AM', close: '5:00 PM' },
      saturday: { open: '8:00 AM', close: '3:00 PM' },
      sunday: { closed: true, open: '', close: '' }
    }
  }
];

export const categories = [
  { id: 'plumbing', name: 'Plumbing', slug: 'plumbing' },
  { id: 'electrical', name: 'Electrical', slug: 'electrical' },
  { id: 'roofing', name: 'Roofing', slug: 'roofing' },
  { id: 'hvac', name: 'HVAC', slug: 'hvac' },
  { id: 'general-contractor', name: 'General Contractor', slug: 'general-contractor' },
  { id: 'landscaping', name: 'Landscaping', slug: 'landscaping' },
  { id: 'painting', name: 'Painting', slug: 'painting' },
  { id: 'flooring', name: 'Flooring', slug: 'flooring' }
];