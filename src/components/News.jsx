import { useQuery } from 'react-query';
import { fetchNews } from '../services/newsService';
import moment from 'moment';

function News() {
  const { data, isLoading, error } = useQuery('news', fetchNews);

  return (
    <div className="max-w-6xl mx-auto bg-gradient-to-br from-card-light to-background-light dark:from-slate-900 dark:to-gray-900 rounded-xl shadow-2xl p-8 transition-colors duration-300">
      <div className="sticky top-0 z-10 backdrop-blur-md bg-background-light/80 dark:bg-slate-900/80 p-6 rounded-xl mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="text-4xl font-black text-bold bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light dark:from-blue-400 dark:to-purple-400">
              Latest News
            </h2>
            <div className="animate-pulse bg-green-500 h-2 w-2 rounded-full"></div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-primary-light to-secondary-light dark:from-blue-500 dark:to-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium">
              Live Updates
            </div>
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center h-96">
          <div className="relative w-20 h-20">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-primary-light/20 dark:border-blue-200/20 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-t-primary-light dark:border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-100/30 dark:bg-red-900/30 border border-red-500/50 p-6 rounded-xl">
          <p className="text-red-600 dark:text-red-400 font-medium">Unable to fetch latest news</p>
        </div>
      )}

      {data && (
        <div className="h-[800px] overflow-y-auto custom-scrollbar space-y-6 px-2">
          {data.articles.map((article, index) => (
            <div 
              key={index} 
              className="bg-card-light/90 dark:bg-white/5 backdrop-blur-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                {article.urlToImage && (
                  <img 
                    src={article.urlToImage} 
                    alt={article.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-text-light dark:text-white mb-4 line-clamp-2 group-hover:text-primary-light dark:group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-secondary-light dark:text-gray-300 mb-6 line-clamp-3">
                  {article.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <span className="text-primary-light dark:text-blue-400">📅</span>
                    <span className="text-sm text-secondary-light dark:text-gray-400">
                      {moment(article.publishedAt).fromNow()}
                    </span>
                  </div>
                  
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-light to-secondary-light dark:from-blue-500 dark:to-purple-500 text-white rounded-xl hover:from-primary-dark hover:to-secondary-dark dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Read Article
                    <svg className="w-5 h-5 ml-2 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(var(--color-primary-light), 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, var(--color-primary-light), var(--color-secondary-light));
          border-radius: 10px;
        }
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
      `}</style>
    </div>
  );
}

export default News;
