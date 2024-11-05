import { ChartBarIcon, LightBulbIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import StatCard from '../components/StatCard';
import CategoryBadge from '../components/CategoryBadge';

interface TrendingIdea {
  id: number;
  title: string;
  author: string;
  category: string;
  likes: number;
}

export default function Dashboard() {
  const trendingIdeas: TrendingIdea[] = [
    {
      id: 1,
      title: 'AI-Powered Code Review Assistant',
      author: 'Sarah Chen',
      category: 'Artificial Intelligence',
      likes: 156,
    },
    {
      id: 2,
      title: 'Blockchain-based Digital Identity',
      author: 'Michael Rodriguez',
      category: 'Blockchain',
      likes: 142,
    },
    {
      id: 3,
      title: 'Smart Home Energy Optimizer',
      author: 'David Kim',
      category: 'IoT',
      likes: 128,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <StatCard
          icon={<LightBulbIcon className="h-6 w-6 text-indigo-600" />}
          title="Total Ideas"
          value={247}
        />
        <StatCard
          icon={<UserGroupIcon className="h-6 w-6 text-indigo-600" />}
          title="Active Users"
          value={1234}
        />
        <StatCard
          icon={<ChartBarIcon className="h-6 w-6 text-indigo-600" />}
          title="Collaborations"
          value={89}
        />
      </div>

      <div className="rounded-lg bg-white shadow dark:bg-gray-800">
        <div className="px-6 py-5">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Trending Ideas</h3>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {trendingIdeas.map((idea) => (
              <li key={idea.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-indigo-600">{idea.title}</p>
                    <p className="text-sm text-gray-500">by {idea.author}</p>
                  </div>
                  <div className="flex items-center">
                    <CategoryBadge category={idea.category} />
                    <span className="ml-4 text-sm text-gray-500">{idea.likes} likes</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}