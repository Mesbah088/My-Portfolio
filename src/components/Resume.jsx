import { experience, education } from '../data/experience';

const ExperienceCard = ({ item }) => {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-gray-200 last:pb-0">
      <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
      <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
        <div className="flex flex-wrap items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{item.position || item.degree}</h3>
          <span className="text-sm text-gray-500 font-medium">{item.period}</span>
        </div>
        <p className="text-primary font-medium mb-2">{item.company || item.institution}</p>
        {item.location && (
          <p className="text-sm text-gray-500 mb-3">{item.location}</p>
        )}
        <p className="text-gray-600 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
};

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resume
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            My professional journey and educational background
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Experience</h3>
            <div>
              {experience.map((item) => (
                <ExperienceCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
            <div>
              {education.map((item) => (
                <ExperienceCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
