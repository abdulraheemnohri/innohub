import CategoryBadge from './CategoryBadge';

interface IdeaCardProps {
  title: string;
  description: string;
  category: string;
  status: string;
  onEdit?: () => void;
  onShare?: () => void;
}

export default function IdeaCard({ title, description, category, status, onEdit, onShare }: IdeaCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-lg dark:bg-gray-800">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
          <CategoryBadge category={category} />
        </div>
        <span className="text-sm text-gray-500">{status}</span>
      </div>
      <p className="mt-4 text-sm text-gray-500">{description}</p>
      <div className="mt-6 flex justify-end space-x-3">
        <button 
          onClick={onEdit}
          className="text-sm text-indigo-600 hover:text-indigo-500"
        >
          Edit
        </button>
        <button 
          onClick={onShare}
          className="text-sm text-indigo-600 hover:text-indigo-500"
        >
          Share
        </button>
      </div>
    </div>
  );
}