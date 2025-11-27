const ProjectCard = ({ project, theme }) => {
  const isForest = theme === 'forest';
  const accentColor = isForest ? 'emerald' : 'blue';
  const tagAccent = isForest ? 'emerald' : 'orange';

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 h-full flex flex-col">
      {/* Category Badge */}
      <div className="flex items-center justify-between mb-3">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
          isForest
            ? 'bg-emerald-100 text-emerald-800'
            : 'bg-blue-100 text-blue-800'
        }`}>
          {project.category}
        </span>
      </div>

      {/* Title */}
      <h3 className={`text-xl font-bold mb-3 ${
        isForest ? 'text-stone-800' : 'text-slate-900'
      }`}>
        {project.title}
      </h3>

      {/* Description */}
      <p className={`mb-4 flex-grow ${
        isForest ? 'text-stone-600' : 'text-slate-600'
      }`}>
        {project.description}
      </p>

      {/* Problem/Solution (if available) */}
      {project.problem && (
        <div className="mb-4 space-y-2">
          <div>
            <span className={`font-semibold text-sm ${
              isForest ? 'text-emerald-700' : 'text-blue-700'
            }`}>
              Problem:
            </span>
            <p className={`text-sm mt-1 ${
              isForest ? 'text-stone-600' : 'text-slate-600'
            }`}>
              {project.problem}
            </p>
          </div>
          {project.solution && (
            <div>
              <span className={`font-semibold text-sm ${
                isForest ? 'text-emerald-700' : 'text-orange-600'
              }`}>
                Solution:
              </span>
              <p className={`text-sm mt-1 ${
                isForest ? 'text-stone-600' : 'text-slate-600'
              }`}>
                {project.solution}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className={`px-2 py-1 rounded text-xs font-medium ${
              isForest
                ? 'bg-stone-100 text-stone-700'
                : 'bg-slate-100 text-slate-700'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
