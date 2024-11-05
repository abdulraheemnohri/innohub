import { UserCircleIcon } from '@heroicons/react/24/solid';

export default function Profile() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-white shadow dark:bg-gray-800">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <UserCircleIcon className="h-16 w-16 text-gray-300" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">John Doe</h2>
              <p className="text-sm text-gray-500">Software Developer</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Bio</h3>
              <p className="mt-2 text-sm text-gray-500">
                Passionate software developer with a focus on AI and machine learning. Love to create
                innovative solutions that make a difference.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Skills</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {['JavaScript', 'Python', 'React', 'Node.js', 'AI/ML'].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-white shadow dark:bg-gray-800">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">My Inventions</h3>
          <div className="mt-4 space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-200 p-4 dark:border-gray-700"
              >
                <h4 className="text-base font-medium text-gray-900 dark:text-white">
                  Project Title {i}
                </h4>
                <p className="mt-1 text-sm text-gray-500">
                  Brief description of the project and its current status.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}