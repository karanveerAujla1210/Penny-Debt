const mongoose = require('mongoose');
const Role = require('../models/Role');
const { ROLE_PERMISSIONS } = require('../../../packages/shared/constants/permissions');

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
