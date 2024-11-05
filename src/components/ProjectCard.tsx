import { StarIcon } from '@heroicons/react/24/solid';
import CategoryBadge from './CategoryBadge';

interface ProjectCardProps {
  title: string;
  author: string;
  description: string;
  stars: number;
  category: string;
  image: string;
}

export default function ProjectCard({ title, author, description, stars, category, image }: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow transition-shadow hover:shadow-lg dark:bg-gray-800">
      <img
        className="h-48 w-full object-cover"
        src={image}
        alt={title}
      />
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="mt-1 text-sm text-gray-500">by {author}</p>
          </div>
          <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <span className="ml-1 text-sm text-gray-500">{stars}</span>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-500">{description}</p>
        <div className="mt-6 flex items-center justify-between">
          <CategoryBadge category={category} />
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}