import { personalInfo } from '../data/personalInfo';
import { socialLinks } from '../data/socialLinks';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-medium mb-4 animate-fade-in">{personalInfo.greeting}</p>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
          {personalInfo.name}
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {personalInfo.title}
        </p>

        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {personalInfo.description}
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#projects"
            className="group relative px-6 py-3 bg-primary text-white rounded-lg overflow-hidden font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="relative z-10">See My Work</span>
            <div className="absolute inset-0 bg-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-primary dark:hover:border-primary hover:text-primary transition-all duration-300 font-medium hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Scroll Down</p>
          <div className="flex justify-center">
            <svg
              className="w-6 h-6 text-gray-400 dark:text-gray-500 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
