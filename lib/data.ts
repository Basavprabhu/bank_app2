// src/lib/data.ts
export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  balance: number;
}

export interface Account {
  customerName: string;
  accountType: string;
  accountNumber: string;
  balance: number;
  ifscCode: string;
  branchName: string;
  customerId: string;
}

export const mockAccount: Account = {
  customerName: "Praveen Basalingol",
  accountType: "Priority Account",
  accountNumber: "017005500160",
  balance: 5202000.00,
  ifscCode: "HDFC0005162",
  branchName: "Dharwad - NTTF Branch",
  customerId: "566829483"
};

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    date: "2025-11-17",
    description: "Samant Audi",
    amount: 312400.00,
    type: "credit",
    balance: 4971020.00
  },
  {
    id: "2",
    date: "2025-11-15",
    description: "Reliance Petroleum",
    amount: 805000.00,
    type: "credit",
    balance: 4100578.00
  },
  {
    id: "3",
    date: "2025-11-11",
    description: "Indian Oil Petroleum pvt ltd",
    amount: 1650000.00,
    type: "credit",
    balance: 2410780.00
  },
  {
    id: "4",
    date: "2025-11-07",
    description: "Milton Industries India Pvt Ltd",
    amount: 4568900.00,
    type: "credit",
    balance: 1953890.00
  },
  {
    id: "5",
    date: "2025-10-23",
    description: "SRV offshore Communications Pvt Ltd",
    amount: 545000.00,
    type: "credit",
    balance: 1408890.00
  },
  {
    id: "6",
    date: "2025-09-29",
    description: "Ola India Entreprises Pvt Ltd",
    amount: 754650.00,
    type: "credit",
    balance: 6542400.00
  }
];

export const loginCredentials = {
  customerId: "CUST001",
  password: "password123"
};
