require('dotenv').config();
const mongoose = require('mongoose');
const Role = require('../models/Role');

const ROLE_PERMISSIONS = {
  COUNSELLOR: ['create:lead', 'update:lead', 'view:lead', 'view:customer_basic'],
  ADVISOR: ['view:lead', 'update:lead', 'create:case', 'update:case', 'view:case', 'create:customer', 'update:customer', 'view:customer', 'create:loan', 'update:loan', 'view:loan', 'create:program', 'update:program', 'view:program'],
  CREDIT: ['view:case', 'view:customer', 'view:loan', 'update:credit', 'verify:kyc', 'update:loan_risk'],
  OPERATIONS: ['view:program', 'update:program_status', 'create:mandate', 'update:mandate', 'view:payment', 'update:payment'],
  NEGOTIATOR: ['view:program', 'view:loan', 'create:settlement', 'update:settlement', 'view:settlement'],
  LEGAL: ['view:customer', 'view:loan', 'create:legal_case', 'update:legal_case', 'create:harassment_case', 'update:harassment_case'],
  FINANCE: ['view:payment', 'update:payment_status', 'view:settlement', 'update:settlement_payment', 'view:finance_reports'],
  SUPPORT: ['view:customer', 'update:customer_contact', 'create:ticket', 'update:ticket', 'view:ticket', 'create:harassment_case'],
  RECOVERY: ['view:program', 'update:program', 'view:customer', 'view:payment'],
  COMPLIANCE: ['view:all', 'view:audit', 'override:all'],
  ADMIN: ['*']
};

const seedRoles = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    const roles = [
      { name: 'COUNSELLOR', permissions: ROLE_PERMISSIONS.COUNSELLOR },
      { name: 'ADVISOR', permissions: ROLE_PERMISSIONS.ADVISOR },
      { name: 'CREDIT', permissions: ROLE_PERMISSIONS.CREDIT },
      { name: 'OPERATIONS', permissions: ROLE_PERMISSIONS.OPERATIONS },
      { name: 'NEGOTIATOR', permissions: ROLE_PERMISSIONS.NEGOTIATOR },
      { name: 'LEGAL', permissions: ROLE_PERMISSIONS.LEGAL },
      { name: 'FINANCE', permissions: ROLE_PERMISSIONS.FINANCE },
      { name: 'SUPPORT', permissions: ROLE_PERMISSIONS.SUPPORT },
      { name: 'RECOVERY', permissions: ROLE_PERMISSIONS.RECOVERY },
      { name: 'COMPLIANCE', permissions: ROLE_PERMISSIONS.COMPLIANCE },
      { name: 'ADMIN', permissions: ['*'] }
    ];
    
    for (const role of roles) {
      await Role.findOneAndUpdate(
        { name: role.name },
        role,
        { upsert: true, new: true }
      );
      console.log(`✓ ${role.name} role created/updated`);
    }
    
    console.log('\n✅ All roles seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding roles:', error);
    process.exit(1);
  }
};

seedRoles();
