import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import Weather from './components/Weather';
import News from './components/News';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <ThemeToggle />
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Weather & News Dashboard
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              <div className="transform hover:scale-[1.02] transition-transform duration-300">
                <Weather />
              </div>
              <div className="transform hover:scale-[1.02] transition-transform duration-300">
                <News />
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;