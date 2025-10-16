import { articles } from '../data/articles';

const ArticleCard = ({ article }) => {
  return (
    <article className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 px-3 py-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-xs font-medium rounded-full shadow-lg">
          {article.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {article.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {article.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>

        <a
          href={article.link}
          className="inline-flex items-center gap-1 mt-4 text-primary font-medium hover:gap-2 transition-all"
        >
          Read More
        </a>
      </div>
    </article>
  );
};

const Articles = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Latest Articles
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Insights, thoughts, and learnings from my professional journey
            </p>
          </div>

          <a
            href="#articles"
            className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Posts
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
