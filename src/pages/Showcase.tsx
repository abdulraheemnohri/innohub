import ProjectCard from '../components/ProjectCard';

interface Project {
  id: number;
  title: string;
  author: string;
  description: string;
  stars: number;
  category: string;
  image: string;
}

export default function Showcase() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'AI Code Assistant',
      author: 'Sarah Chen',
      description: 'An AI-powered tool that helps developers write better code faster.',
      stars: 156,
      category: 'Artificial Intelligence',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      title: 'Smart Home Hub',
      author: 'David Kim',
      description: 'A central platform for managing all your smart home devices.',
      stars: 142,
      category: 'IoT',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
        <div className="flex space-x-3">
          <select className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
            <option>All Categories</option>
            <option>AI</option>
            <option>IoT</option>
            <option>Blockchain</option>
          </select>
          <select className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Most Starred</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            author={project.author}
            description={project.description}
            stars={project.stars}
            category={project.category}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}