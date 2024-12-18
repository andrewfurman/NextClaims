
import type { NextPage } from 'next';
import Head from 'next/head';

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
    <div className="min-h-screen p-8">
      <Head>
        <title>Members - Health Insurance</title>
        <meta name="description" content="Health insurance members list" />
      </Head>

      <main className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Members List</h1>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Policy Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coverage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {members.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.policyNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.coverage}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.startDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.status}</td>
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
