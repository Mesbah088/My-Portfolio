import { personalInfo } from '../data/personalInfo';
import { skills } from '../data/skills';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {personalInfo.description}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm passionate about creating intuitive, dynamic user experiences on the web.
              With years of experience in the industry, I've had the opportunity to work on
              challenging projects that have helped me grow as a developer.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:scale-105 transition-all duration-300 font-medium hover:shadow-lg"
              >
                Get In Touch
              </a>
              <a
                href="#resume"
                className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-primary dark:hover:border-primary hover:text-primary transition-all duration-300 font-medium hover:scale-105"
              >
                View Resume
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
