// Basic permission mapping: role -> allowed actions
module.exports = {
  permissions: {
    Admin: ['*'],
    Advisor: ['view:customer','create:case','update:case','view:loan','create:program','view:program'],
    Case: ['view:case','update:case','create:settlement'],
    Collections: ['view:loan','update:loan','create:settlement'],
    Employee: ['view:customer','view:lead']
  },
  roleHas(permissionSet, permission) {
    if (!permissionSet) return false;
    if (permissionSet.includes('*')) return true;
    return permissionSet.includes(permission);
  }
};
