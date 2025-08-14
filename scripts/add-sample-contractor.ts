import { contractorDb } from '../src/lib/database.js';
import type { Contractor } from '../src/types/contractor.js';

// Sample contractor data
const sampleContractor: Contractor = {
  id: '7',
  name: 'Maria Garcia',
  businessName: 'Garcia Painting & Design',
  category: 'painting',
  specialties: ['Interior Painting', 'Exterior Painting', 'Color Consultation', 'Wallpaper Installation'],
  description: 'Professional painting services with 14 years of experience. We specialize in residential and commercial painting, offering color consultation and premium finishes. Fully licensed and insured with a focus on quality and customer satisfaction.',
  phone: '(919) 555-0345',
  email: 'maria@garciapainting.com',
  website: 'https://garciapainting.com',
  address: {
    street: '456 Elm Street',
    city: 'Wake Forest',
    state: 'NC',
    zipCode: '27587'
  },
  serviceAreas: ['Wake Forest', 'Raleigh', 'Rolesville', 'Youngsville', 'Zebulon'],
  yearsInBusiness: 14,
  licensed: true,
  insured: true,
  certifications: ['NC Licensed Contractor', 'EPA RRP Certified', 'PDCA Member'],
  rating: 4.9,
  reviewCount: 142,
  images: {
    logo: '/images/contractors/garcia-painting-logo.jpg',
    portfolio: [
      '/images/contractors/garcia-1.jpg', 
      '/images/contractors/garcia-2.jpg',
      '/images/contractors/garcia-3.jpg'
    ]
  },
  social: {
    facebook: 'https://facebook.com/garciapainting',
    instagram: 'https://instagram.com/garciapainting',
    linkedin: 'https://linkedin.com/company/garcia-painting'
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
};

console.log('Adding sample contractor to database...');

try {
  // Check if contractor already exists
  const existing = contractorDb.getById(sampleContractor.id);
  if (existing) {
    console.log(`⚠️  Contractor with ID ${sampleContractor.id} already exists.`);
    console.log('Updating existing contractor...');
    contractorDb.update(sampleContractor);
    console.log('✅ Contractor updated successfully!');
  } else {
    // Add new contractor
    contractorDb.create(sampleContractor);
    console.log('✅ Sample contractor added successfully!');
  }

  console.log('\n📋 Contractor Details:');
  console.log(`Business: ${sampleContractor.businessName}`);
  console.log(`Owner: ${sampleContractor.name}`);
  console.log(`Category: ${sampleContractor.category}`);
  console.log(`Location: ${sampleContractor.address.city}, ${sampleContractor.address.state}`);
  console.log(`Rating: ${sampleContractor.rating} ⭐ (${sampleContractor.reviewCount} reviews)`);

  // Verify database state
  const allContractors = contractorDb.getAll();
  console.log(`\n📊 Database now contains ${allContractors.length} contractors total`);

} catch (error) {
  console.error('❌ Failed to add sample contractor:', error);
} finally {
  contractorDb.close();
}