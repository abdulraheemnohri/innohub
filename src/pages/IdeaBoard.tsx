import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import IdeaCard from '../components/IdeaCard';

interface Idea {
  id: number;
  title: string;
  description: string;
  category: string;
  status: string;
}

export default function IdeaBoard() {
  const [ideas] = useState<Idea[]>([
    {
      id: 1,
      title: 'AI-Powered Code Review Assistant',
      description: 'An AI tool that automatically reviews code and suggests improvements.',
      category: 'AI',
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'Blockchain-based Digital Identity',
      description: 'A secure digital identity system using blockchain technology.',
      category: 'Blockchain',
      status: 'Concept',
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Idea Board</h2>
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          New Idea
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ideas.map((idea) => (
          <IdeaCard
            key={idea.id}
            title={idea.title}
            description={idea.description}
            category={idea.category}
            status={idea.status}
            onEdit={() => console.log('Edit idea:', idea.id)}
            onShare={() => console.log('Share idea:', idea.id)}
          />
        ))}
      </div>
    </div>
  );
}