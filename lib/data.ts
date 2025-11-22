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
  customerName: "Sri Raghavendra Electrical and Civil Contractor",
  accountType: "Priority Account",
  accountNumber: "017005500160",
  balance: 427102000.00,
  ifscCode: "HDFC0005162",
  branchName: "Dharwad - NTTF Branch",
  customerId: "566829483"
};

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    date: "2025-11-17",
    description: "TVS motor Software solutions India Pvt Ltd",
    amount: 96524000.00,
    type: "credit",
    balance: 427102000.00
  },
  {
    id: "2",
    date: "2025-11-15",
    description: "CreDha Shodha AutoService India Pvt Ltd",
    amount: 89500000.00,
    type: "credit",
    balance: 330578000.00
  },
  {
    id: "3",
    date: "2025-11-11",
    description: "Cipla Phramaceuticals India Pvt Ltd",
    amount: 10250000.00,
    type: "credit",
    balance: 241078000.00
  },
  {
    id: "4",
    date: "2025-11-07",
    description: "Milton Industries India Pvt Ltd",
    amount: 45689000.00,
    type: "credit",
    balance: 195389000.00
  },
  {
    id: "5",
    date: "2025-10-23",
    description: "SRV offshore Communications Pvt Ltd",
    amount: 54500000.00,
    type: "credit",
    balance: 140889000.00
  },
  {
    id: "6",
    date: "2025-09-29",
    description: "Ola India Entreprises Pvt Ltd",
    amount: 75465000.00,
    type: "credit",
    balance: 65424000.00
  }
];

export const loginCredentials = {
  customerId: "CUST001",
  password: "password123"
};
