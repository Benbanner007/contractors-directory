import { contractorDb } from '../src/lib/database.js';
import type { Contractor } from '../src/types/contractor.js';
import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function generateId(): string {
  const allContractors = contractorDb.getAll();
  const maxId = Math.max(...allContractors.map(c => parseInt(c.id) || 0));
  return (maxId + 1).toString();
}

async function addContractorInteractively() {
  console.log('🏗️  Add New Contractor to Database');
  console.log('===================================\n');

  try {
    const businessName = await question('Business Name: ');
    const ownerName = await question('Owner Name: ');
    const category = await question('Category (plumbing/electrical/roofing/hvac/general-contractor/landscaping/painting/flooring): ');
    const phone = await question('Phone: ');
    const email = await question('Email: ');
    const website = await question('Website (optional): ');
    const description = await question('Description: ');
    const street = await question('Street Address: ');
    const city = await question('City: ');
    const state = await question('State (e.g., NC): ');
    const zipCode = await question('Zip Code: ');
    const serviceAreasInput = await question('Service Areas (comma-separated): ');
    const yearsInBusiness = await question('Years in Business: ');
    const rating = await question('Rating (1-5): ');
    const reviewCount = await question('Review Count: ');
    const specialtiesInput = await question('Specialties (comma-separated): ');

    const serviceAreas = serviceAreasInput.split(',').map(area => area.trim());
    const specialties = specialtiesInput.split(',').map(specialty => specialty.trim());

    const contractor: Contractor = {
      id: generateId(),
      name: ownerName,
      businessName: businessName,
      category: category as any,
      specialties: specialties,
      description: description,
      phone: phone,
      email: email,
      website: website || undefined,
      address: {
        street: street,
        city: city,
        state: state,
        zipCode: zipCode
      },
      serviceAreas: serviceAreas,
      yearsInBusiness: parseInt(yearsInBusiness),
      licensed: true, // Default to true
      insured: true,  // Default to true
      certifications: [], // Can be added later
      rating: parseFloat(rating),
      reviewCount: parseInt(reviewCount),
      images: {
        logo: undefined,
        portfolio: []
      },
      social: {},
      businessHours: {
        monday: { open: '8:00 AM', close: '5:00 PM' },
        tuesday: { open: '8:00 AM', close: '5:00 PM' },
        wednesday: { open: '8:00 AM', close: '5:00 PM' },
        thursday: { open: '8:00 AM', close: '5:00 PM' },
        friday: { open: '8:00 AM', close: '5:00 PM' },
        saturday: { open: '9:00 AM', close: '3:00 PM' },
        sunday: { closed: true, open: '', close: '' }
      }
    };

    console.log('\n📋 Contractor Summary:');
    console.log(`Business: ${contractor.businessName}`);
    console.log(`Owner: ${contractor.name}`);
    console.log(`Category: ${contractor.category}`);
    console.log(`Location: ${contractor.address.city}, ${contractor.address.state}`);
    console.log(`Rating: ${contractor.rating} ⭐ (${contractor.reviewCount} reviews)`);

    const confirm = await question('\nAdd this contractor to the database? (y/n): ');
    
    if (confirm.toLowerCase() === 'y' || confirm.toLowerCase() === 'yes') {
      contractorDb.create(contractor);
      console.log('✅ Contractor added successfully!');
      
      const allContractors = contractorDb.getAll();
      console.log(`📊 Database now contains ${allContractors.length} contractors total`);
    } else {
      console.log('❌ Contractor not added.');
    }

  } catch (error) {
    console.error('❌ Error adding contractor:', error);
  } finally {
    rl.close();
    contractorDb.close();
  }
}

addContractorInteractively();