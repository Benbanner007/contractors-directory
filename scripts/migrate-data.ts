import { contractorDb } from '../src/lib/database.js';
import { contractors } from '../src/data/contractors.js';

console.log('Starting data migration...');
console.log(`Found ${contractors.length} contractors to migrate`);

try {
  // Insert all contractors from the existing data file
  for (const contractor of contractors) {
    contractorDb.create(contractor);
    console.log(`✓ Migrated: ${contractor.businessName}`);
  }

  console.log('\n✅ Migration completed successfully!');
  console.log(`${contractors.length} contractors have been added to the database.`);
  
  // Verify the migration
  const dbContractors = contractorDb.getAll();
  console.log(`\n📊 Database now contains ${dbContractors.length} contractors`);

} catch (error) {
  console.error('❌ Migration failed:', error);
} finally {
  contractorDb.close();
}