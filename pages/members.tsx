
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

interface Member {
  id: number;
  name: string;
  policyNumber: string;
  coverage: string;
  startDate: string;
  status: string;
}

const members: Member[] = [
  {
    id: 1,
    name: "John Smith",
    policyNumber: "POL-001",
    coverage: "Family Plan",
    startDate: "2024-01-01",
    status: "Active"
  },
  {
    id: 2,
    name: "Jane Doe",
    policyNumber: "POL-002",
    coverage: "Individual Plan",
    startDate: "2024-01-15",
    status: "Active"
  },
  {
    id: 3,
    name: "Mike Johnson",
    policyNumber: "POL-003",
    coverage: "Family Plan",
    startDate: "2024-02-01",
    status: "Pending"
  }
];

const Members: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Members - Health Insurance</title>
        <meta name="description" content="Health insurance members list" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Members List</h1>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Policy Number</th>
                <th>Coverage</th>
                <th>Start Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td>{member.policyNumber}</td>
                  <td>{member.coverage}</td>
                  <td>{member.startDate}</td>
                  <td>{member.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Members;
