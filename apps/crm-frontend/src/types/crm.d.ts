// Basic TypeScript interfaces to help the frontend interop with backend models
interface Customer {
  _id: string;
  name: string;
  email?: string;
  phone?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface Loan {
  _id: string;
  customerId: string;
  principal: number;
  interestRate?: number;
  status?: 'OPEN' | 'CLOSED' | 'DEFAULTED';
  createdAt?: string;
  updatedAt?: string;
}

interface Program {
  _id: string;
  caseId?: string;
  status?: 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
  loans?: Array<{ loanId: string; amount: number }>;
  createdAt?: string;
  updatedAt?: string;
}

interface Payment {
  _id: string;
  loanId: string;
  amount: number;
  method?: string;
  status?: 'PENDING' | 'COMPLETED' | 'FAILED';
  createdAt?: string;
}

interface Ticket {
  _id: string;
  customerId: string;
  type?: string;
  priority?: 'LOW'|'MEDIUM'|'HIGH'|'CRITICAL';
  status?: 'OPEN'|'IN_PROGRESS'|'WAITING'|'RESOLVED';
}

interface AuditLog {
  _id: string;
  userId?: string;
  entity: string;
  entityId?: string;
  action: string;
  before?: any;
  after?: any;
  createdAt?: string;
}

export { Customer, Loan, Program, Payment, Ticket, AuditLog };
