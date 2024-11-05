import { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: string | number;
}

export default function StatCard({ icon, title, value }: StatCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
          <p className="text-2xl font-semibold text-indigo-600">{value}</p>
        </div>
      </div>
    </div>
  );
}