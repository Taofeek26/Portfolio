import experience from '../data/experience.json';

const Experience = () => {
  return (
    <div className="bg-transparent min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Work Experience</h1>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experience.map((job) => (
              <div key={job.id} className="flex items-start space-x-6 p-8 bg-transparent rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                  <img className="w-24 h-24 object-contain rounded-full border-4 border-white shadow-md" src={job.imageUrl} alt={`${job.company} logo`} />
                </a>
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold text-white mb-1">{job.role}</h2>
                  <p className="text-xl font-semibold text-gray-200 mb-2">
                    <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{job.company}</a>
                  </p>
                  <p className="text-md text-gray-400 mb-4">{job.duration}</p>
                  <p className="text-gray-100 text-base">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
