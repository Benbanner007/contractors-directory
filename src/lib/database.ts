import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import type { Contractor } from '../types/contractor';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dbPath = join(__dirname, '../../contractors.db');

// Initialize database
const db = new Database(dbPath);

// Create contractors table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS contractors (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    business_name TEXT NOT NULL,
    category TEXT NOT NULL,
    specialties TEXT NOT NULL, -- JSON array as string
    description TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    website TEXT,
    address_street TEXT NOT NULL,
    address_city TEXT NOT NULL,
    address_state TEXT NOT NULL,
    address_zip_code TEXT NOT NULL,
    service_areas TEXT NOT NULL, -- JSON array as string
    years_in_business INTEGER NOT NULL,
    licensed BOOLEAN NOT NULL,
    insured BOOLEAN NOT NULL,
    certifications TEXT NOT NULL, -- JSON array as string
    rating REAL NOT NULL,
    review_count INTEGER NOT NULL,
    images_logo TEXT,
    images_portfolio TEXT, -- JSON array as string
    social_facebook TEXT,
    social_instagram TEXT,
    social_linkedin TEXT,
    business_hours TEXT NOT NULL, -- JSON object as string
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Create indexes for better search performance
db.exec(`
  CREATE INDEX IF NOT EXISTS idx_contractors_category ON contractors(category);
  CREATE INDEX IF NOT EXISTS idx_contractors_city ON contractors(address_city);
  CREATE INDEX IF NOT EXISTS idx_contractors_rating ON contractors(rating);
  CREATE INDEX IF NOT EXISTS idx_contractors_business_name ON contractors(business_name);
`);

// Prepared statements for common operations
const insertContractor = db.prepare(`
  INSERT INTO contractors (
    id, name, business_name, category, specialties, description, phone, email, website,
    address_street, address_city, address_state, address_zip_code, service_areas,
    years_in_business, licensed, insured, certifications, rating, review_count,
    images_logo, images_portfolio, social_facebook, social_instagram, social_linkedin,
    business_hours
  ) VALUES (
    ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?,
    ?
  )
`);

const getContractorById = db.prepare('SELECT * FROM contractors WHERE id = ?');
const getAllContractors = db.prepare('SELECT * FROM contractors ORDER BY rating DESC, review_count DESC');
const getContractorsByCategory = db.prepare('SELECT * FROM contractors WHERE category = ? ORDER BY rating DESC');
const updateContractor = db.prepare(`
  UPDATE contractors SET
    name = ?, business_name = ?, category = ?, specialties = ?, description = ?, phone = ?, email = ?, website = ?,
    address_street = ?, address_city = ?, address_state = ?, address_zip_code = ?, service_areas = ?,
    years_in_business = ?, licensed = ?, insured = ?, certifications = ?, rating = ?, review_count = ?,
    images_logo = ?, images_portfolio = ?, social_facebook = ?, social_instagram = ?, social_linkedin = ?,
    business_hours = ?, updated_at = CURRENT_TIMESTAMP
  WHERE id = ?
`);
const deleteContractor = db.prepare('DELETE FROM contractors WHERE id = ?');

// Search function
const searchContractors = db.prepare(`
  SELECT * FROM contractors 
  WHERE (
    business_name LIKE ? OR 
    name LIKE ? OR 
    description LIKE ? OR 
    specialties LIKE ?
  )
  ORDER BY rating DESC, review_count DESC
`);

// Helper function to convert database row to Contractor type
function dbRowToContractor(row: any): Contractor {
  return {
    id: row.id,
    name: row.name,
    businessName: row.business_name,
    category: row.category,
    specialties: JSON.parse(row.specialties),
    description: row.description,
    phone: row.phone,
    email: row.email,
    website: row.website,
    address: {
      street: row.address_street,
      city: row.address_city,
      state: row.address_state,
      zipCode: row.address_zip_code
    },
    serviceAreas: JSON.parse(row.service_areas),
    yearsInBusiness: row.years_in_business,
    licensed: Boolean(row.licensed),
    insured: Boolean(row.insured),
    certifications: JSON.parse(row.certifications),
    rating: row.rating,
    reviewCount: row.review_count,
    images: {
      logo: row.images_logo,
      portfolio: row.images_portfolio ? JSON.parse(row.images_portfolio) : []
    },
    social: {
      facebook: row.social_facebook,
      instagram: row.social_instagram,
      linkedin: row.social_linkedin
    },
    businessHours: JSON.parse(row.business_hours)
  };
}

// Helper function to convert Contractor to database values
function contractorToDbValues(contractor: Contractor): any[] {
  return [
    contractor.id,
    contractor.name,
    contractor.businessName,
    contractor.category,
    JSON.stringify(contractor.specialties),
    contractor.description,
    contractor.phone,
    contractor.email,
    contractor.website,
    contractor.address.street,
    contractor.address.city,
    contractor.address.state,
    contractor.address.zipCode,
    JSON.stringify(contractor.serviceAreas),
    contractor.yearsInBusiness,
    contractor.licensed ? 1 : 0,
    contractor.insured ? 1 : 0,
    JSON.stringify(contractor.certifications),
    contractor.rating,
    contractor.reviewCount,
    contractor.images.logo,
    JSON.stringify(contractor.images.portfolio || []),
    contractor.social?.facebook,
    contractor.social?.instagram,
    contractor.social?.linkedin,
    JSON.stringify(contractor.businessHours)
  ];
}

// Export database operations
export const contractorDb = {
  // Create
  create(contractor: Contractor): void {
    const values = contractorToDbValues(contractor);
    insertContractor.run(...values);
  },

  // Read
  getById(id: string): Contractor | null {
    const row = getContractorById.get(id);
    return row ? dbRowToContractor(row) : null;
  },

  getAll(): Contractor[] {
    const rows = getAllContractors.all();
    return rows.map(dbRowToContractor);
  },

  getByCategory(category: string): Contractor[] {
    const rows = getContractorsByCategory.all(category);
    return rows.map(dbRowToContractor);
  },

  search(query: string): Contractor[] {
    const searchTerm = `%${query}%`;
    const rows = searchContractors.all(searchTerm, searchTerm, searchTerm, searchTerm);
    return rows.map(dbRowToContractor);
  },

  // Update
  update(contractor: Contractor): void {
    const values = contractorToDbValues(contractor);
    values.push(contractor.id); // Add ID for WHERE clause
    updateContractor.run(...values);
  },

  // Delete
  delete(id: string): void {
    deleteContractor.run(id);
  },

  // Utility
  close(): void {
    db.close();
  }
};

export default db;